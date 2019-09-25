import React, { FC, ChangeEvent, FormEvent } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store/storeContext";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import ContactField from "../ContactField/ContactField";
import { IContactFieldRow } from "../ContactField/ContactFieldRow";
import { IOption } from "../Dropdown/Dropdown";
import SelectField from "../SelectField/SelectField";

interface IProps {
  caption: string;
  onSubmit: () => void;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  nameError?: string;
  organization: string;
  organizationOptions: IOption[];
  onOrganizationChange: (value: string) => void;
  groups?: string;
  onGroupsChange: (e: ChangeEvent<HTMLInputElement>) => void;
  assistant?: string;
  onAssistantChange: (e: ChangeEvent<HTMLInputElement>) => void;
  emailFieldLabel?: string;
  emailList: IContactFieldRow[];
  addEmail: () => void;
  removeEmail: (id: number) => void;
  emailLabelOptions: IOption[];
  singleEmail?: boolean;
  phoneFieldLabel?: string;
  phoneList: IContactFieldRow[];
  addPhone: () => void;
  removePhone: (id: number) => void;
  phoneLabelOptions: IOption[];
  singlePhone?: boolean;
  onClose: () => void;
  isPending: boolean;
}

export const EDIT_PERSON_MODAL_ID = "editPerson";

export const EditPersonModal: FC<IProps> = ({
  caption,
  name,
  nameError,
  onNameChange,
  organization,
  organizationOptions,
  onOrganizationChange,
  groups,
  onGroupsChange,
  assistant,
  onAssistantChange,
  onSubmit,
  emailFieldLabel,
  emailList,
  addEmail,
  removeEmail,
  emailLabelOptions,
  singleEmail,
  phoneFieldLabel,
  phoneList,
  phoneLabelOptions,
  addPhone,
  removePhone,
  singlePhone,
  onClose,
  isPending
}) => {
  const handleSubmit = (e: FormEvent) => {
    e && e.preventDefault();
    onSubmit();
  };
  const handleClose = () => {
    !isPending && onClose();
  };
  return (
    <Modal
      openOnInit
      id={EDIT_PERSON_MODAL_ID}
      caption={caption}
      customCloseFunction={handleClose}
    >
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="modal-content modal-padding">
          <TextField
            autofocus
            id="name"
            onChange={onNameChange}
            value={name}
            error={nameError}
            label="Name"
          />
          <SelectField
            onSelect={onOrganizationChange}
            options={organizationOptions}
            selected={organization}
            label="Organization"
            allowSearch
          />
          <TextField
            id="assistant"
            onChange={onAssistantChange}
            value={assistant}
            label="Assistant"
          />
          <ContactField
            fieldLabel={emailFieldLabel}
            type="email"
            labelOptions={emailLabelOptions}
            list={emailList}
            addListItem={addEmail}
            removeListItem={removeEmail}
            isSingle={singleEmail}
          />
          <ContactField
            fieldLabel={phoneFieldLabel}
            type="tel"
            labelOptions={phoneLabelOptions}
            list={phoneList}
            addListItem={addPhone}
            removeListItem={removePhone}
            isSingle={singlePhone}
          />
          <TextField
            id="groups"
            onChange={onGroupsChange}
            value={groups}
            label="Groups"
          />
        </div>
        <div className="modal-footer">
          <div className="modal-footer__right">
            <Button isPending={isPending} primary onClick={onSubmit}>
              Save
            </Button>
            <Button disabled={isPending} onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

const EditPersonModalController: FC = () => {
  const { peopleList } = useStore();
  const { editPerson } = peopleList;
  if (!editPerson) return null;
  const {
    caption,
    name,
    submit,
    organization,
    onOrganizationChange,
    organizationOptions,
    groups,
    assistant,
    email,
    phone,
    handleClose,
    isPending
  } = editPerson;
  return (
    <EditPersonModal
      caption={caption}
      onSubmit={submit}
      name={name.value}
      onNameChange={name.onChange}
      nameError={name.error}
      organization={organization}
      onOrganizationChange={onOrganizationChange}
      organizationOptions={organizationOptions}
      groups={groups.value}
      onGroupsChange={groups.onChange}
      assistant={assistant.value}
      onAssistantChange={assistant.onChange}
      emailFieldLabel={email.fieldLabel}
      // @ts-ignore
      emailList={email.list}
      emailLabelOptions={email.formattedLabelOptions}
      addEmail={email.addListItem}
      removeEmail={email.removeListItem}
      singleEmail={email.isSingle}
      phoneFieldLabel={phone.fieldLabel}
      // @ts-ignore
      phoneList={phone.list}
      phoneLabelOptions={phone.formattedLabelOptions}
      addPhone={phone.addListItem}
      removePhone={phone.removeListItem}
      singlePhone={phone.isSingle}
      onClose={handleClose}
      isPending={isPending}
    />
  );
};

export default observer(EditPersonModalController);
