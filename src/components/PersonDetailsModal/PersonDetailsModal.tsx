import React, { FC, Fragment } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store/storeContext";
import Modal from "../Modal/Modal";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import "./personDetailModal.scss";
import LoaderOverlay from "../LoaderOverlay/LoaderOverlay";

interface IProps {
  name: string;
  avatarUrl?: string;
  phone?: string;
  email?: string;
  organization?: string;
  assistant?: string;
  groups?: string;
  location?: string;
  additionalEmails?: string;
  additionalPhones?: string;
  onCloseClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
  pendingDelete?: boolean;
  incompleteData?: boolean;
}
interface IRow {
  label: string;
  value?: string;
}

export const PERSON_DETAILS_MODAL_ID = "personDetails";

export const PersonDetailModal: FC<IProps> = ({
  name,
  avatarUrl,
  phone,
  email,
  organization,
  assistant,
  groups,
  location,
  additionalEmails,
  additionalPhones,
  onCloseClick,
  onEditClick,
  onDeleteClick,
  pendingDelete,
  incompleteData
}) => {
  const additionalDetails: IRow[] = [
    { label: "Email", value: email },
    { label: "Organization", value: organization },
    { label: "Assistant", value: assistant },
    { label: "Groups", value: groups },
    { label: "Location", value: location },
    { label: "Additional emails", value: additionalEmails },
    { label: "Additional phones", value: additionalPhones }
  ];
  const existingAdditionalDetails: IRow[] = additionalDetails.filter(
    item => item.value
  );
  const renderRow = ({ label, value }: IRow) => (
    <Fragment key={label}>
      <dt className="person-additional-details__label">{label}</dt>
      <dd className="person-additional-details__value">{value}</dd>
    </Fragment>
  );
  const handleClose = () => {
    !pendingDelete && onCloseClick();
  };
  return (
    <Modal
      openOnInit
      id={PERSON_DETAILS_MODAL_ID}
      caption="Person Information"
      customCloseFunction={handleClose}
    >
      <div className="modal-content">
        {incompleteData && <LoaderOverlay />}
        <section className="person-details">
          <header className="person-details__top">
            <Avatar isLarge name={name} imageUrl={avatarUrl} />
            <h4 className="person-details__name">{name}</h4>
            {phone && <p className="person-details__phone">{phone}</p>}
          </header>
          <div className="person-details__bottom">
            <dl className="person-additional-details">
              {existingAdditionalDetails.map(renderRow)}
            </dl>
          </div>
        </section>
      </div>
      <div className="modal-footer">
        <div className="modal-footer__left">
          <Button
            icon="delete"
            title="Delete"
            isPending={pendingDelete}
            disabled={incompleteData}
            onClick={onDeleteClick}
          />
        </div>
        <div className="modal-footer__right">
          <Button
            primary
            disabled={pendingDelete || incompleteData}
            onClick={onEditClick}
          >
            Edit
          </Button>
          <Button disabled={pendingDelete} onClick={handleClose}>
            Back
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const PersonDetailModalController: FC = () => {
  const { peopleList } = useStore();
  if (!peopleList.selectedPerson) return null;
  const {
    name,
    pictureId,
    primaryEmail,
    primaryPhone,
    assistant,
    organization,
    location,
    groups,
    additionalEmails,
    additionalPhones,
    closeDetails,
    editPerson,
    askForDeleteCurrentPerson,
    pendingDelete,
    incompleteData
  } = peopleList.selectedPerson;
  return (
    <PersonDetailModal
      name={name}
      location={location}
      assistant={assistant}
      email={primaryEmail}
      organization={organization}
      avatarUrl={pictureId}
      groups={groups}
      phone={primaryPhone}
      additionalEmails={additionalEmails}
      additionalPhones={additionalPhones}
      onCloseClick={closeDetails}
      onEditClick={editPerson}
      onDeleteClick={askForDeleteCurrentPerson}
      pendingDelete={pendingDelete}
      incompleteData={incompleteData}
    />
  );
};

export default observer(PersonDetailModalController);
