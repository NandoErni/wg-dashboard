import { useState, useEffect } from "react";
import { Container, TimeContainer, DateContainer } from "./Components";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dateString = dateTime.toLocaleString("de-CH", dateFormatOptions);
  const timeString = dateTime.toLocaleString("de-CH", timeFormatOptions);

  return (
    <Container>
      <TimeContainer>{timeString}</TimeContainer>
      <DateContainer>{dateString}</DateContainer>
    </Container>
  );
};

export default SmallClock;
