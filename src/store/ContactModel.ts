import {
  types,
  applySnapshot,
  Instance,
  SnapshotIn,
  getParent
} from "mobx-state-tree";
import { ChangeEvent } from "react";
import Validator from "validatorjs";
import { rules } from "./Input";
import { IOption } from "../components/Dropdown/Dropdown";
import { capitalize } from "../utils";

const DEFAULT_LABEL = "work";

const ContactItem = types
  .model("ContactItem", {
    id: types.identifierNumber,
    value: "",
    error: types.maybe(types.string),
    label: DEFAULT_LABEL
  })
  .views(self => ({
    get list(): IContactModel {
      return getParent(self, 2);
    },
    get type(): string {
      return this.list.type;
    },
    get name(): string {
      return this.list.fieldLabel.toLocaleLowerCase();
    }
  }))
  .actions(self => {
    const setError = (error: string) => {
      self.error = error;
    };
    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      !self.list.isDirty && self.list.setDirty();
      self.value = e.target.value;
      self.error = "";
    };
    const onLabelChange = (value: string) => {
      !self.list.isDirty && self.list.setDirty();
      self.label = value;
    };
    const validate = () => {
      const validation = new Validator(
        { [self.name]: self.value },
        // @ts-ignore
        { [self.name]: rules[self.type] }
      );
      const isValid = validation.passes();
      // @ts-ignore
      const error = validation.errors.first(self.name);
      error && setError(error);
      return isValid;
    };
    return {
      onValueChange,
      onLabelChange,
      validate
    };
  });

export interface IContactItem extends Instance<typeof ContactItem> {}
export interface IContactItemSnapshotIn
  extends SnapshotIn<typeof ContactItem> {}

const ContactModel = types
  .model("ContactModel", {
    fieldLabel: types.string,
    counter: 0,
    type: types.enumeration("InputTypes", ["string", "tel", "email"]),
    labelOptions: types.array(types.string),
    list: types.optional(types.array(ContactItem), [{ id: 0 }]),
    isDirty: false
  })
  .views(self => ({
    get isSingle(): boolean {
      return self.list.length === 1;
    },
    get formattedLabelOptions(): IOption[] {
      return self.labelOptions.map(option => ({
        value: option,
        label: capitalize(option)
      }));
    }
  }))
  .actions(self => {
    const incrementCounter = () => {
      self.counter += 1;
    };
    const addListItem = () => {
      incrementCounter();
      self.list.push({ id: self.counter });
    };
    const removeListItem = (id: number) => {
      const filtered = self.list.filter(item => item.id !== id);
      try {
        applySnapshot(self.list, filtered);
      } catch (e) {
        console.error(e); //eslint-disable-line no-console
      }
    };
    const validate = () => {
      const isValid = self.list.map(item => item.validate());
      return isValid.every(item => item === true);
    };
    const setDirty = () => {
      self.isDirty = true;
    };
    const getValue = () => {
      const rawValue: IContactItemSnapshotIn[] = self.list.toJSON();
      const formattedValue = rawValue
        .filter(item => item.value)
        .map(({ value, label }, index) => ({
          value,
          label,
          primary: index === 0
        }));
      return formattedValue;
    };
    return {
      addListItem,
      removeListItem,
      validate,
      setDirty,
      getValue
    };
  });

export interface IContactModel extends Instance<typeof ContactModel> {}
export interface IContactModelSnapshotIn
  extends SnapshotIn<typeof ContactModel> {}
export default ContactModel;
