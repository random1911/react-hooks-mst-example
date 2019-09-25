import React, { FC, Fragment } from "react";
import PersonDetailsModal from "../PersonDetailsModal/PersonDetailsModal";
import EditPersonModal from "../EditPersonModal/EditPersonModal";
import WarningModal from "../WarningModal/WarningModal";

const TopLevelModals: FC = () => (
  <Fragment>
    <PersonDetailsModal />
    <EditPersonModal />
    <WarningModal />
  </Fragment>
);

export default TopLevelModals;
