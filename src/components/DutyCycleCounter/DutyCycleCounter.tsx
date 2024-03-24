import {
  faHourglassStart,
  faHourglassHalf,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Icon, TimeRemaining } from "./Components";
import useRecurringDate, {
  getDayDifference,
} from "../../hooks/useRecurringDate";

const DutyCycleCounter = () => {
  const nextCycleChange = useRecurringDate(new Date(2024, 2, 11), 14);
  const now = new Date();
  const daysUntilNextChange = getDayDifference(now, nextCycleChange);
  return (
    <Container>
      <Icon>
        <FontAwesomeIcon icon={faHourglassStart} />
      </Icon>
      <TimeRemaining>
        {daysUntilNextChange} Day{daysUntilNextChange === 1 ? "" : "s"}
      </TimeRemaining>
    </Container>
  );
};

export default DutyCycleCounter;
