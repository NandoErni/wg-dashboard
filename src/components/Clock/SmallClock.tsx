import { useState, useEffect } from "react";
import { Container, TimeContainer, DateContainer } from "./Components";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
