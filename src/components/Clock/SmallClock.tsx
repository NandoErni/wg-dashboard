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
  let dateTime: Date = new Date();

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
