import React, { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import { observer } from "mobx-react";
import { getBemClassName } from "../../utils";
import { useStore } from "../../store/storeContext";
import "./modal.scss";
import ModalHeader from "./ModalHeader";
const ROOT_ID = "modal-root";

interface IProps {
  hideHeader?: boolean;
  caption?: string;
  isTopLevel?: boolean;
  isOpen?: boolean;
  children: ReactNode;
  isClosing?: boolean;
  closeFunction: () => void;
  shouldReactOnEsc?: boolean;
}

export const Modal: FC<IProps> = ({
  hideHeader,
  isOpen = false,
  isTopLevel,
  closeFunction,
  children,
  caption,
  isClosing,
  shouldReactOnEsc
}) => {
  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    e.stopPropagation();
    closeFunction();
  };
  useEffect(() => {
    shouldReactOnEsc && document.addEventListener("keydown", handleEscPress);
    !shouldReactOnEsc &&
      document.removeEventListener("keydown", handleEscPress);
    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [shouldReactOnEsc]); // eslint-disable-line
  const template = (
    <FocusLock>
      <AutoFocusInside>
        <div className="modal-holder">
          {isTopLevel && (
            <div className="modal-overlay" onClick={closeFunction} />
          )}
          <div className={getBemClassName("modal", { isClosing })}>
            {!hideHeader && (
              <ModalHeader caption={caption} onCloseClick={closeFunction} />
            )}
            {children}
          </div>
        </div>
      </AutoFocusInside>
    </FocusLock>
  );
  const modalRoot = document.getElementById(ROOT_ID);
  if (!modalRoot || !isOpen) return null;
  return createPortal(template, modalRoot);
};

interface IController {
  hideHeader?: boolean;
  id: string;
  openOnInit?: boolean;
  caption?: string;
  children: ReactNode;
  customCloseFunction?: () => void;
}

const ModalController: FC<IController> = ({
  hideHeader,
  id,
  caption,
  children,
  openOnInit,
  customCloseFunction
}) => {
  const { ui } = useStore();
  const { addModal, removeModal, getModal, openModal, closeModal } = ui;
  const handleClose = () => {
    customCloseFunction ? customCloseFunction() : closeModal(id);
  };
  useEffect(() => {
    addModal(id);
    openOnInit && openModal(id);
    return () => {
      removeModal(id);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const modal = getModal(id);
  if (!modal || !modal.isOpen) return null;
  return (
    <Modal
      hideHeader={hideHeader}
      caption={caption}
      isClosing={modal.isClosing}
      isOpen={modal.isOpen}
      closeFunction={handleClose}
      isTopLevel={modal.isTopLevel}
      shouldReactOnEsc={modal.shouldReactOnEsc}
    >
      {children}
    </Modal>
  );
};

export default observer(ModalController);
