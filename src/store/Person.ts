import {
  Instance,
  SnapshotIn,
  types,
  getRoot,
  flow,
  applySnapshot
} from "mobx-state-tree";
import { IStore } from "./main";
import { formatKeys } from "../utils";
import apiRequest from "./apiRequest";

const OrganizationInfo = types.model("OrganizationInfoModel", {
  name: types.maybeNull(types.string),
  address: types.maybeNull(types.string),
  value: types.maybeNull(types.number)
});
const Contact = types.model("ContactModel", {
  label: types.maybe(types.string),
  value: types.maybe(types.string)
});
interface IContact extends Instance<typeof Contact> {}

const getPrimaryContact = (source: IContact[]) => {
  if (!source.length) return undefined;
  return source[0].value;
};
const getAdditionalContacts = (source: IContact[]) => {
  if (!source.length) return undefined;
  const notMain = source.slice(1, source.length);
  if (!notMain.length) return undefined;
  return notMain.map(item => item.value).join(", ");
};

const Person = types
  .model("PersonModel", {
    id: types.identifier,
    name: types.string,
    assistant: types.maybe(types.string),
    groups: types.maybe(types.string),
    orderingId: types.maybe(types.number),
    organizationInfo: types.maybe(OrganizationInfo),
    phones: types.optional(types.array(Contact), []),
    emails: types.optional(types.array(Contact), []),
    pictureId: types.maybe(types.string),
    incompleteData: false
  })
  .views(self => ({
    get store(): IStore {
      return getRoot(self);
    },
    get pendingDelete(): boolean {
      return this.store.peopleList.pendingDelete;
    },
    get primaryPhone() {
      return getPrimaryContact(self.phones);
    },
    get primaryEmail() {
      return getPrimaryContact(self.emails);
    },
    get additionalEmails() {
      return getAdditionalContacts(self.emails);
    },
    get additionalPhones() {
      return getAdditionalContacts(self.phones);
    },
    get organization(): string {
      return (self.organizationInfo && self.organizationInfo.name) || "";
    },
    get location(): string {
      return (self.organizationInfo && self.organizationInfo.address) || "";
    },
    get searchQuery(): string {
      return this.store.peopleList.searchQuery;
    },
    get validSearch(): boolean {
      return this.store.peopleList.haveValidSearch;
    }
  }))
  .actions(self => {
    const requestDetails = flow(function*() {
      const endpoint = `/persons/${self.id}`;
      const response = yield apiRequest({ endpoint });
      if (response && response.ok) {
        const json = yield response.json();
        const { data } = formatKeys(json);
        return data;
      }
    });
    const updateSelf = (snapshot: IPersonSnapshotIn) => {
      try {
        applySnapshot(self, snapshot);
      } catch (e) {
        console.error(e);
      }
    };
    const loadMissedData = flow(function*() {
      const fullData = yield requestDetails();
      if (!fullData) return;
      updateSelf(fullData);
    });
    const setSelected = () => {
      self.incompleteData && loadMissedData();
      self.store.peopleList.showPersonDetails(self.id);
    };
    const closeDetails = () => {
      self.store.peopleList.hidePeronDetailsDialog();
    };
    const editPerson = () => {
      self.store.peopleList.openEditPersonModal(true);
    };
    const askForDeleteCurrentPerson = () => {
      self.store.peopleList.askForDeleteCurrentPerson();
    };
    return {
      setSelected,
      closeDetails,
      editPerson,
      askForDeleteCurrentPerson
    };
  });

export interface IPerson extends Instance<typeof Person> {}
export interface IPersonSnapshotIn extends SnapshotIn<typeof Person> {}
export interface IPersonDumb extends IPersonSnapshotIn {
  organization?: string;
  location?: string;
  primaryEmail?: string;
  setSelected: () => void;
  searchQuery?: string;
  validSearch?: boolean;
}
export default Person;
