import React, { FC } from "react";
import "./loaderOverlay.scss";
import Spinner from "../Spinner/Spinner";

const LoaderOverlay: FC = () => (
  <div className="loader-overlay">
    <Spinner />
  </div>
);

export default LoaderOverlay;
