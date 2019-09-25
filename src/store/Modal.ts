import { types, getParent, Instance } from "mobx-state-tree";
import { IUi } from "./Ui";

const Modal = types
  .model("ModalModel", {
    id: types.identifier,
    isClosing: false,
    isOpen: false
  })
  .views(self => ({
    get ui(): IUi {
      return getParent(self, 2);
    },
    get isTopLevel(): boolean {
      return this.ui.topModalId === self.id;
    },
    get shouldReactOnEsc(): boolean {
      return this.isTopLevel && this.isTopLevel && !this.ui.dropdownIsOpen;
    }
  }))
  .actions(self => ({
    delayedClose() {
      self.isClosing = false;
      self.isOpen = false;
    },
    open() {
      self.isOpen = true;
      self.isClosing = false;
    },
    close() {
      self.isClosing = true;
      return new Promise(resolve => {
        setTimeout(() => {
          this.delayedClose();
          // here we returning promise to possibility to execute operation really after it closed with animation
          resolve();
        }, 250);
      });
    }
  }));

export interface IModal extends Instance<typeof Modal> {}
export default Modal;
