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
      <Title>Aufgaben</Title>
      <TasksList>
        {props.duty.generalTasks.map((task) => (
          <li>{task}</li>
        ))}
      </TasksList>
      <Title>Aufgaben im Detail</Title>
      <TasksList>
        {props.duty.detailedTasks.map((task) => (
          <li>
            {task.task}{" "}
            {task.frequencyInWeeks === 1
              ? "jede Woche"
              : "alle " + task.frequencyInWeeks + " Wochen"}
          </li>
        ))}
      </TasksList>
    </DutyModalContainer>
  );
};

export default DutyModal;
