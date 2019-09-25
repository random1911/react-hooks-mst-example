import React, { FC } from "react";
import "./dropdown.scss";
import { getBemClassName } from "../../utils";

interface IProps {
  text?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  isOpen?: boolean;
  disabled?: boolean;
  haveError?: boolean;
}

const DropdownToggleButton: FC<IProps> = ({
  text,
  isOpen,
  onClick,
  disabled,
  haveError,
  fullWidth
}) => (
  <button
    className={getBemClassName("dropdown-toggle-button", {
      isOpen,
      isError: haveError,
      fullWidth
    })}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    <span className="dropdown-toggle-button__text">{text}</span>
    <span
      className={getBemClassName("dropdown-toggle-button__arrow", { isOpen })}
    />
  </button>
);

export default React.memo(DropdownToggleButton);
