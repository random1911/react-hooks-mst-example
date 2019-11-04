import { getRoot, Instance, SnapshotIn, types } from "mobx-state-tree";
import { IStore } from "./main";
import Input, { IInput, rules } from "./Input";
import ContactModel from "./ContactModel";
import { IWarningModelSnapshotIn, WARNING_ACTIONS } from "./WarningModel";
import { IOption } from "../components/Dropdown/Dropdown";

const DEFAULT_LABEL = "work";

const PHONE_LABELS = [DEFAULT_LABEL, "home", "mobile", "other"];
const EMAIL_LABELS = [DEFAULT_LABEL, "home", "other"];

const INPUT_KEYS = ["name", "groups", "assistant"];
const CONTACTS_KEYS = ["emails", "phones"];
const ALL_FIELDS_KEYS = [...INPUT_KEYS, ...CONTACTS_KEYS];

export interface IEditPersonValues {
  name?: string;
  groups?: string;
  assistant?: string;
  orderingId?: string;
}
export interface IContactValues {
  value: string;
  label: string;
  primary?: boolean;
}

export interface IPersonRequestBody {
  name?: string;
  organization?: string;
  location?: string;
  groups?: string;
  assistant?: string;
  emails?: IContactValues[];
  phones?: IContactValues[];
}

const nameInput = {
  id: "name",
  name: "name",
  customRules: rules.name
};
const groupsInput = {
  id: "groups"
};
const assistantInput = {
  id: "assistant"
};

const emailModel = {
  fieldLabel: "Email",
  type: "email",
  labelOptions: EMAIL_LABELS,
  list: [{ id: 0 }]
};

const phoneModel = {
  fieldLabel: "Phone",
  type: "tel",
  labelOptions: PHONE_LABELS,
  list: [{ id: 0 }]
};

const DEFAULT_ORG_OPTION = {
  value: "none",
  label: "(not selected)"
};

const EditPerson = types
  .model("EditPersonModel", {
    isEditMode: false,
    caption: "Add person",
    id: types.maybe(types.string),
    orderingId: types.maybe(types.number),
    name: types.optional(Input, nameInput),
    organization: DEFAULT_ORG_OPTION.value,
    groups: types.optional(Input, groupsInput),
    assistant: types.optional(Input, assistantInput),
    emails: types.optional(ContactModel, emailModel),
    phones: types.optional(ContactModel, phoneModel),
    isPending: false
  })
  .views(self => ({
    get store(): IStore {
      return getRoot(self);
    },
    get validationKeys(): string[] {
      return ["name", ...CONTACTS_KEYS];
    },
    get inputKeys(): string[] {
      return ALL_FIELDS_KEYS;
    },
    get isClear(): boolean {
      if (self.isEditMode) return false;
      // ignore phone and email for this case
      // @ts-ignore
      const values = this.inputKeys.map(key => self[key].value);
      return values.every(item => !item);
    },
    get isDirty(): boolean {
      // @ts-ignore
      const dirtyFields = this.inputKeys.map(key => self[key].isDirty);
      return dirtyFields.some(item => item === true);
    },
    get shouldBlockClose(): boolean {
      if (self.isEditMode) {
        return this.isDirty;
      }
      return !this.isClear;
    },
    get organizationOptions(): IOption[] {
      return [DEFAULT_ORG_OPTION, ...this.store.organizationsList.options];
    }
  }))
  .actions(self => {
    const setPendingStatus = (status: boolean) => {
      self.isPending = status;
    };
    const validate = () => {
      const validationResult = self.validationKeys.map(key => {
        // @ts-ignore
        return self[key].validate();
      });
      return validationResult.every(item => item === true);
    };
    const setValues = (values: IEditPersonValues) => {
      const keys = Object.keys(values);
      keys.forEach(key => {
        // @ts-ignore
        if (values[key] !== undefined) {
          // @ts-ignore
          self[key].value = values[key];
        }
      });
    };
    const setContact = (model: "phones" | "emails", list: IContactValues[]) => {
      const snapshot: any = list.map(
        ({ value, label }: IContactValues, index) => ({
          id: index,
          value,
          label
        })
      );
      self[model].list = snapshot;
    };
    const setPhones = (list: IContactValues[]) => {
      setContact("phones", list);
    };
    const setEmails = (list: IContactValues[]) => {
      setContact("emails", list);
    };
    const showCloseWarning = () => {
      const warning: IWarningModelSnapshotIn = {
        text:
          "Are you sure you want to close this form without saving? All changes will be lost",
        confirmText: "Yes, close form",
        cancelText: "No, stay here",
        confirmAction: WARNING_ACTIONS.CLOSE_EDIT_PERSON_FORM
      };
      self.store.ui.showWarningDialog(warning);
    };
    const close = () => {
      self.store.peopleList.closeEditPersonModal();
    };
    const handleClose = () => {
      if (self.isPending) return;
      self.shouldBlockClose ? showCloseWarning() : close();
    };
    const onOrganizationChange = (value: string) => {
      self.organization = value;
    };
    const getFieldValues = (): IPersonRequestBody => {
      const data: any = {};
      self.inputKeys.forEach(key => {
        // @ts-ignore
        const input: IInput = self[key];
        if (input.isDirty && input.value !== undefined) {
          data[key] = input.value;
        }
      });
      CONTACTS_KEYS.forEach(key => {
        // @ts-ignore
        const value = self[key].getValue();
        if (value && value.length) {
          data[key] = value;
        }
      });
      if (self.organization !== DEFAULT_ORG_OPTION.value) {
        data.organizationInfo = self.organization;
      }
      if (self.orderingId) {
        data.orderingId = self.orderingId;
      }
      return data;
    };
    const submit = () => {
      const isValid = validate();
      if (!isValid) return;
      const data = getFieldValues();
      const { updateSelectedPerson, createNewPerson } = self.store.peopleList;
      self.isEditMode ? updateSelectedPerson(data) : createNewPerson(data);
    };
    return {
      setPendingStatus,
      onOrganizationChange,
      submit,
      setValues,
      setPhones,
      setEmails,
      handleClose
    };
  });

export interface IEditPerson extends Instance<typeof EditPerson> {}
export interface IEditPersonSnapshotIn extends SnapshotIn<typeof EditPerson> {}
export default EditPerson;
