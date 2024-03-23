import { Container } from "./Components";
import DutyCard from "../DutyCard/DutyCard";
import { Duties } from "../../data/duties";

const DutyCardContainer = (props: { duties: Duties }) => {
  return (
    <Container>
      <DutyCard duty={props.duties.bathroom} name="Lauro" />
      <DutyCard duty={props.duties.floor} name="Timon" />
      <DutyCard duty={props.duties.kitchen} name="Nando" />
    </Container>
  );
};

export default DutyCardContainer;
