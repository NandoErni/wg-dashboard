import "./style/App.css";
import DutyPage from "./pages/DutyPage";
import { scaleRotate as Menu } from "react-burger-menu";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DashboardPage from "./pages/DashboardPage";
import DeliveryDriverPage from "./pages/DeliveryDriverPage";
import SettingsPage from "./pages/SettingsPage";
import WifiPage from "./pages/WifiPage";
import CameraPage from "./pages/CameraPage";
import ImagesOfCameraPage from "./pages/ImagesOfCameraPage";
import styled, { ThemeProvider } from "styled-components";
import {
  getSavedTheme,
  GlobalStyle,
  THEME,
  theme_blue,
  themeIdToTheme,
} from "./Theme";

const HOUR_IN_MS = 3600_000;

export type AppContextType = {
  currentDatetimeState: Date;
  currentDatetimeHourlyState: Date;
  setNewTheme: Function;
};
export const AppContext = createContext<AppContextType>({
  currentDatetimeState: new Date(),
  currentDatetimeHourlyState: new Date(),
  setNewTheme: (themeId: number) =>
    console.error(
      "The Appcontext is not ready yet. Could not apply theme " + themeId
    ),
});

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
`;

function App() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(<DashboardPage />);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDateHourly, setCurrentDateHourly] = useState(new Date());
  const [activeTheme, setActiveTheme] = useState<THEME>(getSavedTheme());

  const changePage = (newPage: JSX.Element) => {
    setCurrentPage(newPage);
    setIsOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    const hourlyInterval = setInterval(() => {
      setCurrentDateHourly(new Date());
    }, HOUR_IN_MS);

    return () => {
      clearInterval(interval);
      clearInterval(hourlyInterval);
    };
  }, []);

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

        <h2 onClick={() => changePage(<DeliveryDriverPage />)}>
          {t("burgerMenu.deliveryDriver")}
        </h2>

        <h2 onClick={() => changePage(<WifiPage />)}>{t("burgerMenu.wifi")}</h2>
        <h2 onClick={() => changePage(<CameraPage />)}>
          {t("burgerMenu.camera")}
        </h2>
        <h2 onClick={() => changePage(<ImagesOfCameraPage />)}>
          {t("burgerMenu.images")}
        </h2>
        {/* <h2>{t("burgerMenu.lights")}</h2>
        <h2>{t("burgerMenu.jokeOfTheDay")}</h2>*/}
        <h2 onClick={() => changePage(<SettingsPage />)}>
          {t("burgerMenu.settings")}
        </h2>
      </Menu>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <AppContainer id="outer-container">
          <AppContext.Provider
            value={{
              currentDatetimeState: currentDate,
              currentDatetimeHourlyState: currentDateHourly,
              setNewTheme: (themeId: number) =>
                setActiveTheme(themeIdToTheme(themeId)),
            }}
          >
            <div id="page-wrap" style={{ height: "100%" }}>
              {currentPage}
            </div>
          </AppContext.Provider>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
