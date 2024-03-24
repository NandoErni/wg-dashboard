import "./style/App.css";
import DutyPage from "./pages/DutyPage";
import { scaleRotate as Menu } from "react-burger-menu";

function App() {
  return (
    <>
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <h2>Uhr</h2>
        <h2>Ämtliplan</h2>
        <h2>Lichter</h2>
        <h2>Witz des Tages</h2>
      </Menu>
      <div className="App" id="outer-container">
        <div id="page-wrap">
          <DutyPage />
        </div>
      </div>
    </>
  );
}

export default App;
