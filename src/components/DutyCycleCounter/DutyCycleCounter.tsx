import {
  faHourglassStart,
  faHourglassHalf,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Icon, TimeRemaining } from "./Components";

const DutyCycleCounter = () => {
  return (
    <Container>
      <Icon>
        <FontAwesomeIcon icon={faHourglassStart} />
      </Icon>
      <TimeRemaining>13 Days</TimeRemaining>
    </Container>
  );
};

export default DutyCycleCounter;
