import {
  faPoo,
  faUtensils,
  faBroom,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type Duty = {
  name: string;
  quote: string;
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
    quote:
      "Wer jemandem in die Schüssel scheisst, muss mit den Konsequenzen rechnen!",
    icon: faPoo,
    generalTasks: ["Bad", "Kericht", "Kompost"],
    detailedTasks: [
      { task: "WC Putzen", frequencyInWeeks: 1 },
      { task: "Lavabo Putzen", frequencyInWeeks: 1 },
      { task: "Dusche putzen", frequencyInWeeks: 1 },
      { task: "Gestelle putzen", frequencyInWeeks: 2 },
      { task: "Kericht raus bringen", frequencyInWeeks: 1 },
      { task: "Kompost raus bringen", frequencyInWeeks: 1 },
    ],
  },

  floor: {
    name: "Böden",
    quote: "Der Boden hält uns für immer und ewig!",
    icon: faBroom,
    generalTasks: ["Wohnzimmer", "Boden", "Pflanzen", "Glas / Dosen"],
    detailedTasks: [
      { task: "Sofa reinigen", frequencyInWeeks: 2 },
      { task: "Lampen", frequencyInWeeks: 1 },
      { task: "Staub saugen", frequencyInWeeks: 1 },
      { task: "Nass aufnehmen", frequencyInWeeks: 2 },
      { task: "Glas & Dosen entsorgen", frequencyInWeeks: 1 },
      { task: "Pflanzen giessen", frequencyInWeeks: 1 },
    ],
  },

  kitchen: {
    name: "Küche",
    quote: "Ohne ein El Tony kann selbst der aller beste nichts erreichen!",
    icon: faUtensils,
    generalTasks: ["Küche", "PET & Plastik Flaschen", "Karton & Papier"],
    detailedTasks: [
      { task: "Herd, Tisch und Lavabo Putzen", frequencyInWeeks: 1 },
      { task: "Oberflächen Putzen", frequencyInWeeks: 1 },
      { task: "Abfallschrank", frequencyInWeeks: 2 },
      { task: "Dampfabzug", frequencyInWeeks: 2 },
      { task: "Karton und Papier entsorgen", frequencyInWeeks: 2 },
      { task: "PET und Plastik flaschen entsorgen", frequencyInWeeks: 1 },
    ],
  },
};
