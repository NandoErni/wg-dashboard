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
import { useTranslation } from "react-i18next";

const TrashCalendar = () => {
  const trashDate = useRecurringDate(new Date(2024, 2, 21), 7);
  const paperDate = useRecurringDate(new Date(2024, 2, 21), 14);

  const { t, i18n } = useTranslation();
  return (
    <Container>
      <Title>{t("trashCalendar.title")}</Title>
      <TrashContainer>
        <Icon>
          <FontAwesomeIcon icon={faDumpster} />
        </Icon>
        <DateContainer>
          {trashDate.toLocaleString(i18n.language, dateFormatOptions)}
        </DateContainer>
      </TrashContainer>
      <TrashContainer>
        <Icon>
          <FontAwesomeIcon icon={faNewspaper} />
        </Icon>
        <DateContainer>
          {paperDate.toLocaleString(i18n.language, dateFormatOptions)}
        </DateContainer>
      </TrashContainer>
    </Container>
  );
};

export default TrashCalendar;
