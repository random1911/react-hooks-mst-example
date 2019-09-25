import { Instance, types } from "mobx-state-tree";
import PeopleList from "./PeopleList";
import Ui from "./Ui";
import OrganizationsList from "./OrganizationsList";

const Store = types.model("MainStore", {
  peopleList: types.optional(PeopleList, {}),
  organizationsList: types.optional(OrganizationsList, {}),
  ui: types.optional(Ui, {})
});

export interface IStore extends Instance<typeof Store> {}
export default Store;
