import { Container } from "./Components";
import DutyCard from "../DutyCard/DutyCard";
import { faPoo, faUtensils, faBroom } from "@fortawesome/free-solid-svg-icons";

const DutyCardContainer = (props: any) => {
  return (
    <Container>
      <DutyCard dutyName="Bad" name="Nando" icon={faPoo} />
      <DutyCard dutyName="Boden" name="Timon" icon={faBroom} />
      <DutyCard dutyName="Küche" name="Lauro" icon={faUtensils} />{" "}
    </Container>
  );
};

export default DutyCardContainer;
