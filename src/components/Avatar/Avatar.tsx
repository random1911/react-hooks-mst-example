import React, { FC, memo, useState } from "react";
import { getBemClassName } from "../../utils";
import "./avatar.scss";

interface IProps {
  imageUrl?: string;
  name: string;
  isLarge?: boolean;
}

const Avatar: FC<IProps> = ({ imageUrl, name, isLarge }) => {
  const [isLoaded, setLoaded] = useState(false);
  const getInitials = () => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName[0]}${lastName ? lastName[0] : ""}`.toUpperCase();
  };
  const onLoad = () => {
    setLoaded(true);
  };
  const renderImage = () => {
    if (!imageUrl) return null;
    return (
      <img
        onLoad={onLoad}
        className={getBemClassName("avatar__image", { isLoaded, isLarge })}
        src={imageUrl}
        alt={name}
      />
    );
  };
  return (
    <div className={getBemClassName("avatar", { isLarge })}>
      <div className="avatar__letters">{getInitials()}</div>
      {renderImage()}
    </div>
  );
};

export default memo(Avatar);
