import { Container } from "./Components";
import DutyCard from "../DutyCard/DutyCard";
import { GetDuties } from "../../data/Duties";
import { useState } from "react";
import useRecurringDate from "../../hooks/useRecurringDate";
import { useTranslation } from "react-i18next";

const DutyCardContainer = (props: { getDuties: GetDuties }) => {
  const [listOfNames, setListOfNames] = useState(["Lauro", "Timon", "Nando"]);
  const { t, i18n } = useTranslation();

  const rotateList = () => {
    let newList = [...listOfNames];
    newList.push(newList.shift() ?? "");
    setListOfNames(newList);
  };

  const nextChangeDate = useRecurringDate(
    new Date(2024, 2, 11),
    30,
    rotateList
  );

  return (
    <Container>
      <DutyCard duty={props.getDuties(t).bathroom} name={listOfNames[0]} />
      <DutyCard duty={props.getDuties(t).floor} name={listOfNames[1]} />
      <DutyCard duty={props.getDuties(t).kitchen} name={listOfNames[2]} />
    </Container>
  );
};

export default DutyCardContainer;
