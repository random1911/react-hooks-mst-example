import React, { FC } from "react";
import "./spinner.scss";

interface IProps {
  small?: boolean;
}

const Spinner: FC<IProps> = ({ small }) => (
  <div className={`spinner${small ? " spinner_small" : ""}`}>
    <div className="visually-hidden">Loading...</div>
  </div>
);

export default Spinner;
