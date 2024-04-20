import i18next from "i18next";
import { Duty } from "../../data/duties";
import {
  DutyModalContainer,
  DutyModalTitle,
  Quote,
  TasksList,
  Title,
  Seperator,
} from "./Components";

interface DutyModalProps {
  closeModal: any;
  duty: Duty;
}

const DutyModal = (props: DutyModalProps) => {
  return (
    <DutyModalContainer>
      <DutyModalTitle>{props.duty.name}</DutyModalTitle>
      {/* <button onClick={props.closeModal}>close</button> */}
      <Quote>{props.duty.quote}</Quote>
      <Seperator />
      <Title>{i18next.t("dutyCard.tasks")}</Title>
      <TasksList>
        {props.duty.generalTasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </TasksList>
      <Title>{i18next.t("dutyCard.tasksInDetail")}</Title>
      <TasksList>
        {props.duty.detailedTasks.map((task, i) => (
          <li key={i}>
            {task.task}{" "}
            {task.frequencyInWeeks === 1
              ? i18next.t("dutyCard.everyWeek")
              : i18next.t("dutyCard.everyXWeeks", {
                  count: task.frequencyInWeeks,
                })}
          </li>
        ))}
      </TasksList>
    </DutyModalContainer>
  );
};

export default DutyModal;
