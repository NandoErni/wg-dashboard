import { Duty } from "../../data/duties";

interface DutyModalProps {
  closeModal: any;
  duty: Duty;
}

const DutyModal = (props: DutyModalProps) => {
  return (
    <>
      <h2>{props.duty.name}</h2>
      <button onClick={props.closeModal}>close</button>
      <div>
        {props.duty.generalTasks.map((task) => (
          <p>{task}</p>
        ))}
      </div>
    </>
  );
};

export default DutyModal;
