import React, { FC } from "react";
import "../TextField/textField.scss";
import { IOption } from "../Dropdown/Dropdown";
import Select from "../Dropdown/Select";

interface IProps {
  label?: string;
  error?: string;
  selected: string;
  options: IOption[];
  onSelect: (value: string) => void;
  disabled?: boolean;
  allowSearch?: boolean;
}

const SelectField: FC<IProps> = ({
  label,
  error,
  options,
  disabled,
  onSelect,
  selected,
  allowSearch
}) => {
  const haveError = !!error;
  return (
    <div className="text-field">
      {label && <span className="text-field__label">{label}</span>}
      <div className="text-field__input">
        <Select
          selected={selected}
          options={options}
          onSelect={onSelect}
          disabled={disabled}
          haveError={haveError}
          allowSearch={allowSearch}
          fullWidth
        />
      </div>
      {error && <p className="text-field__error">{error}</p>}
    </div>
  );
};

export default SelectField;
