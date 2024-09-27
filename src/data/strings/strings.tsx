import STRING_EN from "./strings_en";
import STRING_DE from "./strings_de";
import STRING_CH from "./strings_ch";
import STRING_SQ from "./strings_sq";
import STRING_EE from "./strings_ee";

const STRINGS: {
  en: StringType;
  de: StringType;
  ch: StringType;
  sq: StringType;
  ee: StringType;
} = {
  en: STRING_EN,
  de: STRING_DE,
  ch: STRING_CH,
  sq: STRING_SQ,
  ee: STRING_EE,
};

export default STRINGS;

export type StringType = {
  translation: {
    general: {
      loading: string;
    };
    burgerMenu: {
      dutyPlan: string;
      dashboard: string;
      lights: string;
      jokeOfTheDay: string;
      settings: string;
      deliveryDriver: string;
      wifi: string;
      camera: string;
      images: string;
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
    weatherCodes: {
      sunny: string;
      clear: string;
      mainlySunny: string;
      mainlyClear: string;
      partlyCloudy: string;
      cloudy: string;
      foggy: string;
      rimeFog: string;
      lightDrizzle: string;
      drizzle: string;
      heavyDrizzle: string;
      lightFreezingDrizzle: string;
      freezingDrizzle: string;
      lightRain: string;
      rain: string;
      heavyRain: string;
      lightFreezingRain: string;
      freezingRain: string;
      lightSnow: string;
      snow: string;
      heavySnow: string;
      snowGrains: string;
      lightShowers: string;
      showers: string;
      heavyShowers: string;
      lightSnowShowers: string;
      snowShowers: string;
      thunderstorm: string;
      lightThunderstormsWithHail: string;
      thunderstormWithHail: string;
    };
    deliveryDrivers: {
      orderedOn: string;
      order: string;
    };
    camera: {
      done: string;
      imagePreviewInfoText: string;
    };
    settings: {
      language: string;
      theme: string;
    };
  };
};

export type DutyStringType = {
  name: string;
  quote: string;
  generalTasks: {};
  detailedTasks: {};
};
