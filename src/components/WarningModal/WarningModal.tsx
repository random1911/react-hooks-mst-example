import React, { FC } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import "./warningModal.scss";
import { useStore } from "../../store/storeContext";
import { observer } from "mobx-react";

interface IProps {
  text?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const WARNING_MODAL_ID = "warning-modal";

export const WarningModal: FC<IProps> = ({
  text,
  onConfirm,
  onCancel,
  confirmText = "Ok",
  cancelText = "Cancel"
}) => {
  return (
    <Modal
      id={WARNING_MODAL_ID}
      openOnInit
      hideHeader
      customCloseFunction={onCancel}
    >
      <div className="modal-content">
        <div className="warning-container">
          <div className="warning-container__image" role="img" />
          <div className="warning-container__text">{text}</div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="modal-footer__right">
          <Button primary onClick={onConfirm}>
            {confirmText}
          </Button>
          <Button onClick={onCancel}>{cancelText}</Button>
        </div>
      </div>
    </Modal>
  );
};

const WarningModalController: FC = () => {
  const { ui } = useStore();
  const { warning } = ui;
  if (!warning) return null;
  const {
    text,
    confirmAction,
    confirmText,
    cancelAction,
    cancelText,
    handleAction
  } = warning;
  const onConfirm = () => {
    handleAction(confirmAction);
  };
  const onCancel = () => {
    handleAction(cancelAction);
  };
  return (
    <WarningModal
      onCancel={onCancel}
      onConfirm={onConfirm}
      text={text}
      cancelText={cancelText}
      confirmText={confirmText}
    />
  );
};

export default observer(WarningModalController);
