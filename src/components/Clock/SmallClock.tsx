import { useState, useEffect, useContext } from "react";
import { Container, TimeContainer, DateContainer } from "./Components";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App";

const dateFormatOptions: any = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const timeFormatOptions: any = {
  hour: "numeric",
  minute: "numeric",
};
const SmallClock = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const { i18n } = useTranslation();
  const { currentDatetimeState } = useContext(AppContext);

  useEffect(() => {
    setDateTime(currentDatetimeState);
  }, [currentDatetimeState]);

  const dateString = dateTime.toLocaleString(i18n.language, dateFormatOptions);
  const timeString = dateTime.toLocaleString(i18n.language, timeFormatOptions);

  return (
    <Container>
      <TimeContainer>{timeString}</TimeContainer>
      <DateContainer>{dateString}</DateContainer>
    </Container>
  );
};

export default SmallClock;
