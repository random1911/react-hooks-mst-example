import React, { FC } from "react";
import "./styles/common.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PeopleListView from "./components/PeopleListView/PeopleListView";
import TopLevelModals from "./components/TopLevelModals/TopLevelModals";
import NotificationContainer from "./components/NotificationsContainer/NotificationsContainer";

const App: FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <PeopleListView />
      <Footer />
      <TopLevelModals />
      <NotificationContainer />
    </div>
  );
};

export default App;
