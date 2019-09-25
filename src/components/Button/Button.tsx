import React, { FC } from "react";
import { getBemClassName } from "../../utils";
import "./button.scss";

interface IProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: string;
  children?: string;
  disabled?: boolean;
  title?: string;
  isPending?: boolean;
  primary?: boolean;
}

const Button: FC<IProps> = ({
  type = "button",
  onClick,
  icon,
  primary,
  isPending,
  disabled,
  children,
  title
}) => {
  const onlyIcon = icon && !children;
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      title={title}
      disabled={disabled || isPending}
      className={getBemClassName("button", { isPending, primary, onlyIcon })}
    >
      {icon && (
        <span role="img" className={`button__icon button__icon_${icon}`} />
      )}
      {children && <span className="button__text">{children}</span>}
    </button>
  );
};

export default Button;
