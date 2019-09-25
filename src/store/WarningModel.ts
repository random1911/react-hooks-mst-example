import {
  types,
  Instance,
  getParent,
  SnapshotIn,
  getRoot,
  flow
} from "mobx-state-tree";
import { IUi } from "./Ui";
import { IStore } from "./main";

export enum WARNING_ACTIONS {
  DELETE_CURRENT_PERSON = "deleteCurrentPerson",
  CLOSE_EDIT_PERSON_FORM = "closeEditPersonForm"
}

const WarningModel = types
  .model("WarningModel", {
    text: types.maybe(types.string),
    confirmText: types.maybe(types.string),
    cancelText: types.maybe(types.string),
    confirmAction: types.maybe(types.string),
    cancelAction: types.maybe(types.string)
  })
  .views(self => ({
    get store(): IStore {
      return getRoot(self);
    },
    get ui(): IUi {
      return getParent(self, 1);
    }
  }))
  .actions(self => {
    const close = flow(function*(): any {
      yield self.ui.hideWarningDialog();
    });
    const closeEditPersonModal = flow(function*(): any {
      yield close();
      self.store.peopleList.closeEditPersonModal();
    });
    const deleteCurrentPerson = flow(function*(): any {
      yield close();
      self.store.peopleList.deleteCurrentPerson();
    });
    const handleAction = (action?: string) => {
      switch (action) {
        case WARNING_ACTIONS.DELETE_CURRENT_PERSON:
          return deleteCurrentPerson();
        case WARNING_ACTIONS.CLOSE_EDIT_PERSON_FORM:
          return closeEditPersonModal();
        default:
          return close();
      }
    };
    return {
      handleAction
    };
  });

export interface IWarningModel extends Instance<typeof WarningModel> {}
export interface IWarningModelSnapshotIn
  extends SnapshotIn<typeof WarningModel> {}
export default WarningModel;
