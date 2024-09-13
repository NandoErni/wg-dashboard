import { faBus } from "@fortawesome/free-solid-svg-icons";

import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Container, ProgressbarContainer } from "./Components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { getNextBusTime } from "../../data/BusTimes";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

const BusClock = () => {
  const { t, i18n } = useTranslation();
  const { currentDatetimeState } = useContext(AppContext);
  const [minutesTillNextBus, setMinutesTillNextBus] = useState(95);
  const [maxMinutesTillNextBus, setMaxMinutesTillNextBus] = useState(0);

  useEffect(() => {
    if (minutesTillNextBus == 0) {
      newMin();
    }
  }, [minutesTillNextBus]);

  useEffect(() => {
    setMinutesTillNextBus(minutesTillNextBus - 1);
  }, [currentDatetimeState]);

  useEffect(() => {
    newMin();
  }, []);

  const newMin = () => {
    const nextBus = getNextBusTime();
    const secondsBetween = Math.round(
      (nextBus.getTime() - new Date().getTime()) / 1000
    );
    setMaxMinutesTillNextBus(secondsBetween);
    setMinutesTillNextBus(secondsBetween);
  };

  return (
    <Container>
      <FontAwesomeIcon icon={faBus} />
      <ProgressbarContainer>
        <CircularProgressbar
          maxValue={maxMinutesTillNextBus}
          value={minutesTillNextBus}
          text={`${Math.round(minutesTillNextBus / 60)}'`}
          styles={buildStyles({
            textColor: "white",
            pathColor: "white",
            trailColor: "#00000025",
          })}
        />
      </ProgressbarContainer>
    </Container>
  );
};

export default BusClock;
