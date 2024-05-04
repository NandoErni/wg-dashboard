import "./style/App.css";
import DutyPage from "./pages/DutyPage";
import { scaleRotate as Menu } from "react-burger-menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(<DashboardPage />);

  const changePage = (newPage: JSX.Element) => {
    setCurrentPage(newPage);
    setIsOpen(false);
  };

  return (
    <>
      <Menu
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        <h2 onClick={() => changePage(<DashboardPage />)}>
          {t("burgerMenu.dashboard")}
        </h2>
        <h2 onClick={() => changePage(<DutyPage />)}>
          {t("burgerMenu.dutyPlan")}
        </h2>
        <h2>{t("burgerMenu.lights")}</h2>
        <h2>{t("burgerMenu.jokeOfTheDay")}</h2>
        <h2>{t("burgerMenu.calendar")}</h2>
        <h2>{t("burgerMenu.weather")}</h2>
        <h2>{t("burgerMenu.bus")}</h2>
        <h2>{t("burgerMenu.plants")}</h2>
        <h2>{t("burgerMenu.settings")}</h2>
      </Menu>
      <div className="App" id="outer-container">
        <div id="page-wrap" style={{ height: "100%" }}>
          {currentPage}
        </div>
      </div>
    </>
  );
}

export default App;
