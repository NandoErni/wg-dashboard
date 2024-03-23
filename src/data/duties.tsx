import {
  faPoo,
  faUtensils,
  faBroom,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type Duty = {
  name: string;
  icon: IconDefinition;
  generalTasks: string[];
  detailedTasks: { task: string; frequencyInWeeks: number }[];
};

export type Duties = {
  bathroom: Duty;
  floor: Duty;
  kitchen: Duty;
};

export const DUTIES: Duties = {
  bathroom: {
    name: "Bad",
    icon: faPoo,
    generalTasks: ["Bad", "Kericht"],
    detailedTasks: [
      { task: "Lavabo Putzen", frequencyInWeeks: 1 },
      { task: "Dusche putzen", frequencyInWeeks: 1 },
      { task: "Kericht raus bringen", frequencyInWeeks: 1 },
    ],
  },

  floor: {
    name: "Böden",
    icon: faBroom,
    generalTasks: ["Boden", "Pflanzen", "Glas / Dosen"],
    detailedTasks: [
      { task: "Staub saugen", frequencyInWeeks: 1 },
      { task: "Nass aufnehmen", frequencyInWeeks: 2 },
      { task: "Glas & Dosen entsorgen", frequencyInWeeks: 1 },
      { task: "Pflanzen giessen", frequencyInWeeks: 1 },
    ],
  },

  kitchen: {
    name: "Küche",
    icon: faUtensils,
    generalTasks: ["Küche", "PET & Plastik Flaschen", "Karton & Papier"],
    detailedTasks: [
      { task: "Lavabo Putzen", frequencyInWeeks: 1 },
      { task: "Karton und Papier entsorgen", frequencyInWeeks: 2 },
      { task: "PET und Plastik flaschen entsorgen", frequencyInWeeks: 1 },
    ],
  },
};
