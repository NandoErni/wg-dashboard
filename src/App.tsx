import "./style/App.css";
import DutyCardContainer from "./components/DutyCardContainer/DutyCardContainer";
import DutyCycleCounter from "./components/DutyCycleCounter/DutyCycleCounter";
import SmallClock from "./components/Clock/SmallClock";
import TrashCalendar from "./components/TrashCalendar/TrashCalendar";
import { FlexContainer } from "./components/Helper/HelperComponents";
import { DUTIES } from "./data/duties";

function App() {
  return (
    <div className="App">
      <DutyCycleCounter />
      <DutyCardContainer duties={DUTIES} />
      <FlexContainer>
        <TrashCalendar />
        <SmallClock />
      </FlexContainer>
    </div>
  );
}

export default App;
