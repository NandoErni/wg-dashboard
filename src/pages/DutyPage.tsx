import SmallClock from "../components/Clock/SmallClock";
import DutyCardContainer from "../components/DutyCardContainer/DutyCardContainer";
import DutyCycleCounter from "../components/DutyCycleCounter/DutyCycleCounter";
import { FlexContainer } from "../components/Helper/HelperComponents";
import TrashCalendar from "../components/TrashCalendar/TrashCalendar";
import { DUTIES } from "../data/duties";

const DutyPage = () => {
  return (
    <>
      <DutyCycleCounter />
      <DutyCardContainer duties={DUTIES} />
      <FlexContainer>
        <TrashCalendar />
        <SmallClock />
      </FlexContainer>
    </>
  );
};

export default DutyPage;
