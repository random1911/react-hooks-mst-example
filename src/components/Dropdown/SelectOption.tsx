import React, { FC, useRef } from "react";
import { getBemClassName } from "../../utils";
import MatchedSearch from "../MatchedSearch/MatchedSearch";
import { IOption } from "./Dropdown";
import "./dropdown.scss";

interface IMenuOptionProps {
  onClick?: (value?: string | number) => void;
  isSelected?: boolean;
  search?: string;
  onFocus?: () => void;
  shouldAutofocus?: boolean;
}

const MenuOption: FC<IMenuOptionProps & IOption> = ({
  onClick,
  value,
  label,
  disabled,
  isSelected,
  search,
  shouldAutofocus
}) => {
  const buttonElement = useRef<HTMLButtonElement | null>(null);
  const handleClick = () => {
    onClick && onClick(value);
  };
  const onMouseEnter = () => {
    if (shouldAutofocus && buttonElement && buttonElement.current) {
      buttonElement.current.focus();
    }
  };
  return (
    <li className="select-option">
      <button
        ref={buttonElement}
        onMouseEnter={onMouseEnter}
        className={getBemClassName("select-option__button", { isSelected })}
        onClick={handleClick}
        disabled={disabled}
      >
        <MatchedSearch
          value={label || ""}
          query={search}
          matchedClassName="select-option__match"
        />
      </button>
    </li>
  );
};

export const NotFoundOption: FC = () => (
  <li className="select-option">
    <div className="select-option__button_not_found">Nothing found</div>
  </li>
);

export default MenuOption;
