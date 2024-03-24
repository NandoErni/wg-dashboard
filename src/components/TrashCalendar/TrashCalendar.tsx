import {
  Container,
  Title,
  TrashContainer,
  Icon,
  DateContainer,
} from "./Components";
import { faDumpster, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRecurringDate, {
  dateFormatOptions,
} from "../../hooks/useRecurringDate";

const TrashCalendar = () => {
  const trashDate = useRecurringDate(new Date(2024, 2, 21), 7);
  const paperDate = useRecurringDate(new Date(2024, 2, 21), 14);

  console.log(trashDate);
  return (
    <Container>
      <Title>Abfallkalender</Title>
      <TrashContainer>
        <Icon>
          <FontAwesomeIcon icon={faDumpster} />
        </Icon>
        <DateContainer>
          {trashDate.toLocaleString("de-CH", dateFormatOptions)}
        </DateContainer>
      </TrashContainer>
      <TrashContainer>
        <Icon>
          <FontAwesomeIcon icon={faNewspaper} />
        </Icon>
        <DateContainer>
          {paperDate.toLocaleString("de-CH", dateFormatOptions)}
        </DateContainer>
      </TrashContainer>
    </Container>
  );
};

export default TrashCalendar;
