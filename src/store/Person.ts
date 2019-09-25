import {
  Instance,
  SnapshotIn,
  types,
  getRoot,
  flow,
  applySnapshot
} from "mobx-state-tree";
import { IStore } from "./main";
import { formatKeys, renameCustomKeysFromApi } from "../utils";
import apiRequest from "./apiRequest";

export const customKeys: any = {
  assistant: "e84ab1fc4ad4dd171c97287b2ad84ffe58baca1b",
  groups: "7ec8f8dbc0d0c618cbfda94eb39b49b788357f32",
  orderingId: "903f7c14f57c1095f7909192941f221f79cd3d71"
};

const OrganizationInfo = types.model("OrganizationInfoModel", {
  name: types.maybeNull(types.string),
  address: types.maybeNull(types.string),
  value: types.maybeNull(types.number)
});
const Contact = types.model("ContactModel", {
  label: types.maybe(types.string),
  value: types.maybe(types.string),
  primary: false
});
interface IContact extends Instance<typeof Contact> {}

const PictureSizes = types.model("PictureSizesModel", {
  128: types.string,
  512: types.string
});
const Picture = types.model("PictureModel", {
  pictures: PictureSizes
});
const getPrimaryContact = (source: IContact[]) => {
  if (!source.length) return undefined;
  const primary = source.find(item => item.primary);
  return primary && primary.value;
};
const getAdditionalContacts = (source: IContact[]) => {
  if (!source.length) return undefined;
  const notMain = source.filter(item => !item.primary);
  if (!notMain.length) return undefined;
  return notMain.map(item => item.value).join(", ");
};

const Person = types
  .model("PersonModel", {
    id: types.identifierNumber,
    name: types.string,
    assistant: types.maybe(types.string),
    groups: types.maybe(types.string),
    orderingId: types.maybe(types.number),
    orgId: types.maybe(OrganizationInfo),
    phone: types.optional(types.array(Contact), []),
    email: types.optional(types.array(Contact), []),
    pictureId: types.maybe(Picture),
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
      return getPrimaryContact(self.phone);
    },
    get primaryEmail() {
      return getPrimaryContact(self.email);
    },
    get additionalEmails() {
      return getAdditionalContacts(self.email);
    },
    get additionalPhones() {
      return getAdditionalContacts(self.phone);
    },
    get organization(): string {
      return (self.orgId && self.orgId.name) || "";
    },
    get location(): string {
      return (self.orgId && self.orgId.address) || "";
    },
    get smallAvatar() {
      if (!self.pictureId) return undefined;
      return self.pictureId.pictures["128"];
    },
    get largeAvatar() {
      if (!self.pictureId) return undefined;
      return self.pictureId.pictures["512"];
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
        return renameCustomKeysFromApi(data, customKeys);
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
  smallAvatar?: string;
  largeAvatar?: string;
  setSelected: () => void;
  searchQuery?: string;
  validSearch?: boolean;
}
export default Person;
