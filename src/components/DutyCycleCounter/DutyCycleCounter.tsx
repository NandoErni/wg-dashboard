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
import { useTranslation } from "react-i18next";

const DutyCycleCounter = () => {
  const { t, i18n } = useTranslation();
  const nextCycleChange = useRecurringDate(new Date(2024, 2, 11), 30);
  const now = new Date();
  const daysUntilNextChange = getDayDifference(now, nextCycleChange);

  let hourGlassIcon = <FontAwesomeIcon icon={faHourglassEnd} />;
  if (daysUntilNextChange >= 9) {
    hourGlassIcon = <FontAwesomeIcon icon={faHourglassStart} />;
  } else if (daysUntilNextChange > 3) {
    hourGlassIcon = <FontAwesomeIcon icon={faHourglassHalf} />;
  }
  return (
    <Container>
      <Icon>{hourGlassIcon}</Icon>
      <TimeRemaining>
        {t("dutyCard.day", { count: daysUntilNextChange })}
      </TimeRemaining>
    </Container>
  );
};

export default DutyCycleCounter;
