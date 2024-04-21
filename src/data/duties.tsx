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

export type GetDuties = (t: Function) => {
  bathroom: Duty;
  floor: Duty;
  kitchen: Duty;
};

export const GET_DUTIES: GetDuties = (t) => {
  return {
    bathroom: {
      name: t("duties.bathroom.name"),
      quote: t("duties.bathroom.quote"),
      icon: faPoo,
      generalTasks: [
        t("duties.bathroom.generalTasks.bathroom"),
        t("duties.bathroom.generalTasks.trash"),
        t("duties.bathroom.generalTasks.compost"),
      ],
      detailedTasks: [
        {
          task: t("duties.bathroom.detailedTasks.cleanToilet"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.bathroom.detailedTasks.cleanSink"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.bathroom.detailedTasks.cleanShower"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.bathroom.detailedTasks.cleanFurniture"),
          frequencyInWeeks: 2,
        },
        {
          task: t("duties.bathroom.detailedTasks.disposeTrash"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.bathroom.detailedTasks.disposeCompost"),
          frequencyInWeeks: 1,
        },
      ],
    },

    floor: {
      name: t("duties.floor.name"),
      quote: t("duties.floor.quote"),
      icon: faBroom,
      generalTasks: [
        t("duties.floor.generalTasks.livingRoom"),
        t("duties.floor.generalTasks.floor"),
        t("duties.floor.generalTasks.plants"),
        t("duties.floor.generalTasks.glasAndCans"),
      ],
      detailedTasks: [
        {
          task: t("duties.floor.detailedTasks.cleanSofa"),
          frequencyInWeeks: 2,
        },
        { task: t("duties.floor.detailedTasks.lamps"), frequencyInWeeks: 1 },
        {
          task: t("duties.floor.detailedTasks.vacuumClean"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.floor.detailedTasks.wipeFloor"),
          frequencyInWeeks: 2,
        },
        {
          task: t("duties.floor.detailedTasks.disposeGlasAndCans"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.floor.detailedTasks.waterPlants"),
          frequencyInWeeks: 1,
        },
      ],
    },

    kitchen: {
      name: t("duties.kitchen.name"),
      quote: t("duties.kitchen.quote"),
      icon: faUtensils,
      generalTasks: [
        t("duties.kitchen.generalTasks.kitchen"),
        t("duties.kitchen.generalTasks.petAndPlasticBottles"),
        t("duties.kitchen.generalTasks.cardBoardAndPaper"),
      ],
      detailedTasks: [
        {
          task: t("duties.kitchen.detailedTasks.cleanStoveTableAndSink"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.kitchen.detailedTasks.cleanSurfaces"),
          frequencyInWeeks: 1,
        },
        {
          task: t("duties.kitchen.detailedTasks.cleanTrashCabinet"),
          frequencyInWeeks: 2,
        },
        {
          task: t("duties.kitchen.detailedTasks.cleanSteamExhaust"),
          frequencyInWeeks: 2,
        },
        {
          task: t("duties.kitchen.detailedTasks.disposeCardboardAndPaper"),
          frequencyInWeeks: 2,
        },
        {
          task: t("duties.kitchen.detailedTasks.disposePetAndPlasticBottles"),
          frequencyInWeeks: 1,
        },
      ],
    },
  };
};
