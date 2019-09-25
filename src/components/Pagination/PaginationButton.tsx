import React, { FC } from "react";
import "./pagination.scss";
import { getBemClassName } from "../../utils";

interface IProps {
  isActive?: boolean;
  text: string;
  pageId: number;
  onClick: (id: number) => void;
  disabled?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
}

const PaginationButton: FC<IProps> = ({
  isActive,
  onClick,
  text,
  pageId,
  disabled,
  isNext,
  isPrev
}) => {
  const handleClick = () => {
    !isActive && onClick(pageId);
  };
  const isArrow = isNext || isPrev;
  return (
    <li
      className={getBemClassName("pagination__item", {
        isActive,
        isPrev,
        isNext
      })}
    >
      <button
        onClick={handleClick}
        disabled={disabled}
        className={getBemClassName("pagination__button", {
          isActive,
          isPrev,
          isNext
        })}
      >
        <span className={isArrow ? "visually-hidden" : undefined}>{text}</span>
      </button>
    </li>
  );
};

export default PaginationButton;
