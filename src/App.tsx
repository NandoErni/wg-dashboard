import "./style/App.css";
import DutyCardContainer from "./components/DutyCardContainer/DutyCardContainer";
import DutyCycleCounter from "./components/DutyCycleCounter/DutyCycleCounter";
import SmallClock from "./components/Clock/SmallClock";
import TrashCalendar from "./components/TrashCalendar/TrashCalendar";

function App() {
  return (
    <div className="App">
      <DutyCycleCounter />
      <DutyCardContainer />
      <SmallClock />
      <TrashCalendar />
    </div>
  );
}

export default App;
