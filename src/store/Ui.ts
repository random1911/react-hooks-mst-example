import {
  applySnapshot,
  destroy,
  flow,
  Instance,
  types,
  cast
} from "mobx-state-tree";
import Modal, { IModal } from "./Modal";
import Notification, {
  INotification,
  INotificationProps,
  NOTIFICATION_TYPES
} from "./Notification";
import WarningModel, { IWarningModelSnapshotIn } from "./WarningModel";
import { WARNING_MODAL_ID } from "../components/WarningModal/WarningModal";

const DISABLED_SCROLL_CL_NAME = "disable-scroll";

const Ui = types
  .model("UiModel", {
    modals: types.array(Modal),
    notifications: types.array(Notification),
    dropdownIsOpen: false, // prop to avoid close modal on Esc if custom dropdown is opened
    openedModals: types.array(types.string), // LIFO-like struct to know what which modal is on top level (but not actually last can out first)
    warning: types.maybe(WarningModel),
    notificationsCount: 0
  })
  .views(self => ({
    getModal(id: string): IModal | undefined {
      return self.modals.find(modal => id === modal.id);
    },
    get topModalId(): string | undefined {
      return self.openedModals[self.openedModals.length - 1];
    },
    get haveOpenedPopups(): boolean {
      return !!self.openedModals.length;
    },
    getNotification(id: number): INotification | undefined {
      return self.notifications.find(notification => notification.id === id);
    }
  }))
  .actions(self => {
    const disableBodyScroll = () => {
      document.body.classList.add(DISABLED_SCROLL_CL_NAME);
    };
    const enableBodyScroll = () => {
      document.body.classList.remove(DISABLED_SCROLL_CL_NAME);
    };
    const registerOpenedModal = (id: string) => {
      self.openedModals.push(id);
    };
    const unregisterOpenedModal = (id: string) => {
      const updated = self.openedModals.filter(item => item !== id);
      applySnapshot(self.openedModals, updated);
    };
    const addModal = (id: string) => {
      if (self.getModal(id)) return;
      self.modals.push({ id });
    };
    const removeModal = (id: string) => {
      const cleared = self.modals.filter(modal => modal.id !== id);
      applySnapshot(self.modals, cleared);
    };
    const openModal = (id: string) => {
      const modal = self.getModal(id);
      if (modal) {
        modal.open();
        registerOpenedModal(id);
        disableBodyScroll();
      }
    };
    const closeModal = flow(function*(id: string): any {
      const modal: IModal | undefined = self.getModal(id);
      if (modal) {
        yield modal.close();
        unregisterOpenedModal(id);
        !self.openedModals.length && enableBodyScroll();
      }
    });
    const onDropdownOpen = () => {
      self.dropdownIsOpen = true;
      !self.haveOpenedPopups && disableBodyScroll();
    };
    const onDropdownClose = () => {
      self.dropdownIsOpen = false;
      !self.haveOpenedPopups && enableBodyScroll();
    };
    const setWarning = (snapshot: IWarningModelSnapshotIn) => {
      try {
        self.warning = cast(snapshot);
      } catch (e) {
        console.error(e);
      }
    };
    const showWarningDialog = (snapshot: IWarningModelSnapshotIn) => {
      setWarning(snapshot);
      openModal(WARNING_MODAL_ID);
    };
    const hideWarningDialog = flow(function*(): any {
      yield closeModal(WARNING_MODAL_ID);
    });
    const addNotification = ({ type, text }: INotificationProps) => {
      self.notifications.push({ id: self.notificationsCount, type, text });
      self.notificationsCount += 1;
    };
    const addSuccessNotification = (text: string) => {
      addNotification({ text, type: NOTIFICATION_TYPES.SUCCESS });
    };
    const addErrorNotification = (text: string) => {
      addNotification({ text, type: NOTIFICATION_TYPES.ERROR });
    };
    const destroyNotification = (id: number) => {
      const notification = self.getNotification(id);
      notification && destroy(notification);
    };
    return {
      addModal,
      removeModal,
      openModal,
      closeModal,
      onDropdownOpen,
      onDropdownClose,
      showWarningDialog,
      hideWarningDialog,
      addSuccessNotification,
      addErrorNotification,
      destroyNotification
    };
  });

export interface IUi extends Instance<typeof Ui> {}
export default Ui;
