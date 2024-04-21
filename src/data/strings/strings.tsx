import STRING_EN from "./strings_en";
import STRING_DE from "./strings_de";

const STRINGS: { en: StringType; de: StringType } = {
  en: STRING_EN,
  de: STRING_DE,
};

export default STRINGS;

export type StringType = {
  translation: {
    burgerMenu: {
      dutyPlan: string;
      dashboard: string;
      lights: string;
      jokeOfTheDay: string;
      calendar: string;
      weather: string;
      bus: string;
      plants: string;
      settings: string;
    };
    dutyCard: {
      tasks: string;
      tasksInDetail: string;
      everyWeek: string;
      everyXWeeks_one: string;
      everyXWeeks_other: string;
      day_one: string;
      day_other: string;
    };
    trashCalendar: {
      title: string;
    };
    duties: {
      bathroom: DutyStringType;
      floor: DutyStringType;
      kitchen: DutyStringType;
    };
  };
};

export type DutyStringType = {
  name: string;
  quote: string;
  generalTasks: {};
  detailedTasks: {};
};
