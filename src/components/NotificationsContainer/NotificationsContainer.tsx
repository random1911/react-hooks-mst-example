import React, { FC } from "react";
import { createPortal } from "react-dom";
import { observer } from "mobx-react";
import "./notifications.scss";
import Notification from "./Notification";
import { INotificationDumb } from "../../store/Notification";
import { useStore } from "../../store/storeContext";

const ROOT_ID = "dropdown-root";

interface IProps {
  list: INotificationDumb[];
}

export const NotificationContainer: FC<IProps> = observer(({ list }) => {
  const renderItems = ({
    type,
    text,
    id,
    isHidden
  }: INotificationDumb) => {
    return (
      <Notification
        key={id}
        type={type}
        text={text}
        isHidden={isHidden}
      />
    );
  };
  const template = (
    <ul className="notifications-list">{list.map(renderItems)}</ul>
  );
  const root = document.getElementById(ROOT_ID);
  if (!root) return null;
  return createPortal(template, root);
});

const NotificationContainerController: FC = () => {
  const { ui } = useStore();
  const { notifications } = ui;
  return <NotificationContainer list={notifications} />;
};

export default observer(NotificationContainerController);
