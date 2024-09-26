import { faBus } from "@fortawesome/free-solid-svg-icons";

import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ProgressbarContainer } from "./Components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { getNextBusTime } from "../../data/BusTimes";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useTheme } from "styled-components";

const BusClock = () => {
  const { currentDatetimeState } = useContext(AppContext);
  const [minutesTillNextBus, setMinutesTillNextBus] = useState(95);
  const [maxMinutesTillNextBus, setMaxMinutesTillNextBus] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    if (minutesTillNextBus <= 0) {
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
            textColor: theme.colors.font,
            pathColor: theme.colors.font,
            trailColor: theme.colors.notFontTransparent,
          })}
        />
      </ProgressbarContainer>
    </Container>
  );
};

export default BusClock;
