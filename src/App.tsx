import "./style/App.css";
import DutyPage from "./pages/DutyPage";
import { scaleRotate as Menu } from "react-burger-menu";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  useEffect(() => {}, []);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <h2>{t("burgerMenu.clock")}</h2>
        <h2>{t("burgerMenu.dutyPlan")}</h2>
        <h2>{t("burgerMenu.lights")}</h2>
        <h2>{t("burgerMenu.jokeOfTheDay")}</h2>
      </Menu>
      <div className="App" id="outer-container">
        <div id="page-wrap" style={{ height: "100%" }}>
          <DutyPage />
        </div>
      </div>
    </>
  );
}

export default App;
