import {
  Container,
  Title,
  TrashContainer,
  Icon,
  DateContainer,
} from "./Components";

import { faDumpster, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrashCalendar = () => {
  return (
    <Container>
      <Title>Abfallkalender</Title>
      <TrashContainer>
        <Icon>
          <FontAwesomeIcon icon={faDumpster} />
        </Icon>
        <DateContainer>14. März 2024</DateContainer>
      </TrashContainer>
      <TrashContainer>
        <Icon>
          <FontAwesomeIcon icon={faNewspaper} />
        </Icon>
        <DateContainer>21. März 2024</DateContainer>
      </TrashContainer>
    </Container>
  );
};

export default TrashCalendar;
