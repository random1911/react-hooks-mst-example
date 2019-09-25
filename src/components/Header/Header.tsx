import React, { FC } from "react";
import "./header.scss";

const Header: FC = () => (
  <header className="app-header">
    <a href="/" className="app-header__link">
      <h1 className="app-header__logo">
        <span className="visually-hidden">Company name was here</span>
      </h1>
    </a>
  </header>
);

export default Header;
