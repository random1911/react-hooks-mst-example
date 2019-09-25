import React, { FC } from "react";
import { NOTIFICATION_TYPES } from "../../store/Notification";
import "./notifications.scss";
import { getBemClassName } from "../../utils";

export interface INotificationProps {
  type: NOTIFICATION_TYPES;
  isHidden?: boolean;
  text?: string;
}

const Notification: FC<INotificationProps> = ({
  type,
  isHidden,
  text,
}) => {
  const clName = "notification";
  return (
    <li
      className={`${getBemClassName(clName, { isHidden })} ${clName}_${type}`}
    >
      <span className={`notification__icon notification__icon_${type}`} />
      <p className="notification__text">{text}</p>
    </li>
  );
};

export default Notification;
