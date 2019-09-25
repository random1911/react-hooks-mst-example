import React, { ChangeEvent, FC, useEffect, useRef } from "react";
import { getBemClassName } from "../../utils";
import "./textField.scss";

export interface ITextInput {
  id: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoComplete?: "on" | "off";
  cssModifiers?: string | string[];
  autofocus?: boolean;
  placeholder?: string;
}

export const TextInput: FC<ITextInput & { isInvalid?: boolean }> = ({
  id,
  type = "text",
  value,
  disabled,
  readonly,
  onChange,
  onFocus,
  onBlur,
  isInvalid,
  autoComplete = "off",
  cssModifiers,
  autofocus,
  placeholder
}) => {
  const element = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (autofocus) {
      element && element.current && element.current.focus();
    }
  }, []); //eslint-disable-line
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };
  const handleBlur = () => {
    onBlur && onBlur();
  };
  const handleFocus = () => {
    onFocus && onFocus();
  };
  const getModifiers = () => {
    const modifiers: any = { isInvalid };
    if (!cssModifiers) return modifiers;
    const keys = Array.isArray(cssModifiers) ? cssModifiers : [cssModifiers];
    keys.forEach(item => {
      modifiers[item] = true;
    });
    return modifiers;
  };
  return (
    <input
      ref={element}
      id={id}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      type={type}
      value={value}
      disabled={disabled}
      readOnly={readonly}
      className={getBemClassName("text-input", getModifiers())}
      autoComplete={autoComplete}
      placeholder={placeholder}
    />
  );
};

interface ITextField extends ITextInput {
  label?: string;
  error?: string;
}

const TextField: FC<ITextField> = ({ label, error, id, ...inputProps }) => {
  const haveError = !!error;
  return (
    <div className="text-field">
      {label && (
        <label className="text-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="text-field__input">
        <TextInput id={id} {...inputProps} isInvalid={haveError} />
      </div>
      {error && <p className="text-field__error">{error}</p>}
    </div>
  );
};

export default TextField;
