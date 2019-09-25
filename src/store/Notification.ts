import { types, getParent, Instance, SnapshotIn } from "mobx-state-tree";

import { IUi } from "./Ui";

export enum NOTIFICATION_TYPES {
  ERROR = "error",
  SUCCESS = "success"
}
export interface INotificationProps {
  type: NOTIFICATION_TYPES;
  text: string;
}

const Notification = types
  .model("Notification", {
    id: types.identifierNumber,
    type: types.enumeration("NotificationTypes", [
      NOTIFICATION_TYPES.ERROR,
      NOTIFICATION_TYPES.SUCCESS
    ]),
    text: "",
    isHidden: false,
    autoClose: true,
    timeout: 5000
  })
  .views(self => ({
    get ui(): IUi {
      return getParent(self, 2);
    }
  }))
  .actions(self => ({
    destroy() {
      self.isHidden = true;
      setTimeout(() => {
        self.ui.destroyNotification(self.id);
      }, 500);
    },
    afterCreate() {
      if (self.autoClose) {
        setTimeout(this.destroy, self.timeout);
      }
    }
  }));

export interface INotification extends Instance<typeof Notification> {}
export interface INotificationSnapshotIn
  extends SnapshotIn<typeof Notification> {}
export interface INotificationDumb extends INotificationSnapshotIn {
  destroy: () => void;
}
export default Notification;
