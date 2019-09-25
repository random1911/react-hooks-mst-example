import React, { FC } from "react";
import "./modal.scss";

interface IProps {
  onCloseClick: () => void;
  caption?: string;
}

const ModalHeader: FC<IProps> = ({ caption = "", onCloseClick }) => (
  <header className="modal-header">
    <h3 className="modal-header__caption">{caption}</h3>
    <button
      className="modal-header__close-button"
      title="Close"
      onClick={onCloseClick}
    />
  </header>
);

export default ModalHeader;
