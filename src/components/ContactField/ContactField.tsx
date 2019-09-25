import React, { FC } from "react";
import { observer } from "mobx-react";
import "./contactField.scss";
import ContactFieldRow, { IContactFieldRow } from "./ContactFieldRow";
import { IOption } from "../Dropdown/Dropdown";

interface IProps {
  fieldLabel?: string;
  type: string;
  list: IContactFieldRow[];
  addListItem: () => void;
  removeListItem: (id: number) => void;
  labelOptions: IOption[];
  isSingle?: boolean;
}

const ContactField: FC<IProps> = ({
  fieldLabel,
  addListItem,
  removeListItem,
  labelOptions,
  type,
  isSingle,
  list
}) => {
  const renderRow = ({
    id,
    label,
    value,
    error,
    onLabelChange,
    onValueChange
  }: IContactFieldRow) => {
    return (
      <ContactFieldRow
        key={id}
        id={id}
        label={label}
        labelOptions={labelOptions}
        onRemove={removeListItem}
        type={type}
        value={value}
        error={error}
        isSingle={isSingle}
        onLabelChange={onLabelChange}
        onValueChange={onValueChange}
      />
    );
  };
  return (
    <div className="contact-field">
      {fieldLabel && <span className="contact-field__label">{fieldLabel}</span>}
      {list.map(renderRow)}
      <button
        type="button"
        onClick={addListItem}
        className="contact-field__add"
      >
        + <span className="contact-field__add-label">add one more</span>
      </button>
    </div>
  );
};

export default observer(ContactField);
