const STRINGS: { en: StringType; de: StringType } = {
  en: {
    translation: {
      burgerMenu: {
        dutyPlan: "Duty plan",
        clock: "Clock",
        lights: "Lights",
        jokeOfTheDay: "Joke of the day",
      },
      dutyCard: {
        tasks: "Tasks",
        tasksInDetail: "Tasks in detail",
        everyWeek: "every week",
        everyXWeeks_one: "every {{count}} week",
        everyXWeeks_other: "every {{count}} weeks",
        day_one: "{{count}} day",
        day_other: "{{count}} days",
      },
    },
  },
  de: {
    translation: {
      burgerMenu: {
        dutyPlan: "Ämtliplan",
        clock: "Uhr",
        lights: "Lichter",
        jokeOfTheDay: "Witz des Tages",
      },
      dutyCard: {
        tasks: "Aufgaben",
        tasksInDetail: "Aufgaben im Detail",
        everyWeek: "Jede Woche",
        everyXWeeks_one: "Alle {{count}} Woche",
        everyXWeeks_other: "Alle {{count}} Wochen",
        day_one: "{{count}} day",
        day_other: "{{count}} days",
      },
    },
  },
};

export default STRINGS;

type StringType = {
  translation: {
    burgerMenu: {
      dutyPlan: string;
      clock: string;
      lights: string;
      jokeOfTheDay: string;
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
  };
};
