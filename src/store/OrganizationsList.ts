import {
  applySnapshot,
  flow,
  Instance,
  SnapshotIn,
  types
} from "mobx-state-tree";
import { formatKeys } from "../utils";
import apiRequest from "./apiRequest";
import { IOption } from "../components/Dropdown/Dropdown";

const Organization = types.model("OrganizationModel", {
  id: types.identifierNumber,
  name: types.string
});

export interface IOrganization extends Instance<typeof Organization> {}
export interface IOrganizationSnapshotIn
  extends SnapshotIn<typeof Organization> {}

const OrganizationsList = types
  .model("OrganizationsLIst", {
    list: types.optional(types.array(Organization), [])
  })
  .views(self => ({
    get options(): IOption[] {
      return self.list.map(item => ({
        value: `${item.id}`,
        label: item.name
      }));
    }
  }))
  .actions(self => {
    const setList = (snapshot: IOrganization[]) => {
      try {
        applySnapshot(self.list, snapshot);
      } catch (e) {
        console.error(e);
      }
    };
    const requestList = flow(function*() {
      const endpoint = "/organizations";
      const params = {
        start: 0,
        limit: 10000,
        sort: "name"
      };
      return yield apiRequest({ endpoint, params });
    });
    const getList = flow(function*() {
      try {
        const response = yield requestList();
        if (!response || !response.ok) {
          return;
        }
        const json = yield response.json();
        const data = formatKeys(json.data);
        setList(data);
      } catch (e) {
        console.error(e);
      }
    });
    const afterAttach = () => {
      getList();
    };
    return {
      afterAttach
    };
  });

export interface IOrganizationsList
  extends Instance<typeof OrganizationsList> {}
export interface IOrganizationsListSnapshotIn
  extends SnapshotIn<typeof OrganizationsList> {}

export default OrganizationsList;
