import React, { FC, ChangeEvent } from "react";
import { TextInput } from "../TextField/TextField";
import Select from "../Dropdown/Select";
import "./contactField.scss";
import { IOption } from "../Dropdown/Dropdown";

export interface IContactFieldRow {
  id: number;
  type: string;
  value?: string;
  error?: string;
  onValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isSingle?: boolean;
  onRemove: (id: number) => void;
  label: string;
  onLabelChange?: (value: string) => void;
  labelOptions: IOption[];
}

const ContactFieldRow: FC<IContactFieldRow> = ({
  id,
  value,
  error,
  onValueChange,
  type,
  label,
  onLabelChange,
  labelOptions,
  isSingle,
  onRemove
}) => {
  const haveError = !!error;
  const handleRemove = () => {
    onRemove(id);
  };
  const inputId = `${type}${id}`;
  return (
    <div className="contact-field-row">
      <div className="contact-field-row__inner">
        <TextInput
          id={inputId}
          value={value}
          isInvalid={haveError}
          onChange={onValueChange}
          type={type}
        />
        <Select
          selected={label}
          options={labelOptions}
          onSelect={onLabelChange}
        />
        {!isSingle && (
          <button
            type="button"
            onClick={handleRemove}
            className="contact-field-row__remove"
            title="Remove"
          />
        )}
      </div>
      {error && <p className="contact-field-row__error">{error}</p>}
    </div>
  );
};

export default ContactFieldRow;
