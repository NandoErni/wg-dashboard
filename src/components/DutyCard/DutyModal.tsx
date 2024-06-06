import i18next from "i18next";
import { Duty } from "../../data/Duties";
import {
  DutyModalContainer,
  DutyModalTitle,
  Quote,
  TasksList,
  Title,
  Seperator,
} from "./Components";
import { useTranslation } from "react-i18next";

interface DutyModalProps {
  closeModal: any;
  duty: Duty;
  hasDetails: boolean;
}

const DutyModal = (props: DutyModalProps) => {
  const { t, i18n } = useTranslation();
  return (
    <DutyModalContainer>
      <DutyModalTitle>{props.duty.name}</DutyModalTitle>
      <Quote>{props.duty.quote}</Quote>
      <Seperator />
      <Title>{i18next.t("dutyCard.tasks")}</Title>
      <TasksList>
        {props.duty.generalTasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </TasksList>
      {props.hasDetails ? (
        <>
          <Title>{t("dutyCard.tasksInDetail")}</Title>
          <TasksList>
            {props.duty.detailedTasks.map((task, i) => (
              <li key={i}>
                {task.task}{" "}
                {task.frequencyInWeeks === 1
                  ? t("dutyCard.everyWeek")
                  : t("dutyCard.everyXWeeks", {
                      count: task.frequencyInWeeks,
                    })}
              </li>
            ))}
          </TasksList>
        </>
      ) : (
        <></>
      )}
    </DutyModalContainer>
  );
};

export default DutyModal;
