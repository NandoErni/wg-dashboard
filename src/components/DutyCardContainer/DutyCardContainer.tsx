import { Container } from "./Components";
import DutyCard from "../DutyCard/DutyCard";
import { Duties } from "../../data/duties";
import { useState } from "react";
import useRecurringDate from "../../hooks/useRecurringDate";

const DutyCardContainer = (props: { duties: Duties }) => {
  const [listOfNames, setListOfNames] = useState(["Lauro", "Timon", "Nando"]);

  const rotateList = () => {
    let newList = [...listOfNames];
    newList.push(newList.shift() ?? "");
    setListOfNames(newList);
  };

  const nextChangeDate = useRecurringDate(
    new Date(2024, 2, 25),
    14,
    rotateList
  );

  return (
    <Container>
      <DutyCard duty={props.duties.bathroom} name={listOfNames[0]} />
      <DutyCard duty={props.duties.floor} name={listOfNames[1]} />
      <DutyCard duty={props.duties.kitchen} name={listOfNames[2]} />
    </Container>
  );
};

export default DutyCardContainer;
