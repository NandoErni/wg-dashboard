import "./style/App.css";
import DutyPage from "./pages/DutyPage";
import { scaleRotate as Menu } from "react-burger-menu";
import i18next from "i18next";
import { useEffect } from "react";
import STRINGS from "./data/strings";

function App() {
  useEffect(() => {
    i18next.init({
      lng: "en",
      debug: true,
      resources: {
        ...STRINGS,
      },
    });
  }, []);

  return (
    <>
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <h2>{i18next.t("burgerMenu.clock")}</h2>
        <h2>{i18next.t("burgerMenu.dutyPlan")}</h2>
        <h2>{i18next.t("burgerMenu.lights")}</h2>
        <h2>{i18next.t("burgerMenu.jokeOfTheDay")}</h2>
      </Menu>
      <div className="App" id="outer-container">
        <div id="page-wrap" style={{ height: "100vh" }}>
          <DutyPage />
        </div>
      </div>
    </>
  );
}

export default App;
