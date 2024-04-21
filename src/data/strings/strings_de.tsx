import { StringType } from "./strings";

const STRING_DE: StringType = {
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
      day_one: "{{count}} Tag",
      day_other: "{{count}} Tage",
    },
    trashCalendar: {
      title: "Abfallkalender",
    },
    duties: {
      bathroom: {
        name: "Bad",
        quote:
          "Wer jemandem in die Schüssel scheisst, muss mit den Konsequenzen rechnen!",
        generalTasks: {
          bathroom: "Bad",
          trash: "Kericht",
          compost: "Kompost",
        },
        detailedTasks: {
          cleanToilet: "WC putzen",
          cleanSink: "Lavabo putzen",
          cleanShower: "Dusche putzen",
          cleanFurniture: "Gestelle putzen",
          disposeTrash: "Kericht entsorgen",
          disposeCompost: "Kompost entsorgen",
        },
      },
      floor: {
        name: "Böden",
        quote: "Der Boden hält uns für immer und ewig!",
        generalTasks: {
          livingRoom: "Wohnzimmer",
          floor: "Boden",
          plants: "Pflanzen",
          glasAndCans: "Glas & Dosen",
        },
        detailedTasks: {
          cleanSofa: "Sofa reinigen",
          lamps: "Lampen",
          vacuumClean: "Staubsaugen",
          wipeFloor: "Feucht aufnehmen",
          disposeGlasAndCans: "Glas & Dosen entsorgen",
          waterPlants: "Pflanzen giessen",
        },
      },
      kitchen: {
        name: "Küche",
        quote: "Ohne ein El Tony kann selbst der aller beste nichts erreichen!",
        generalTasks: {
          kitchen: "Küche",
          petAndPlasticBottles: "PET- und Plastikflaschen",
          cardboardAndPaper: "Karton und Papier",
        },
        detailedTasks: {
          cleanStoveTableAndSink: "Herd, Tisch und Lavabo putzen",
          cleanSurfaces: "Oberflächen putzen",
          cleanTrashCabinet: "Abfallschrank putzen",
          cleanSteamExhaust: "Dampfabzug putzen",
          disposeCardboardAndPaper: "Karton und Papier entsorgen",
          disposePetAndPlasticBottles: "PET- und Plastikflaschen entsorgen",
        },
      },
    },
  },
};

export default STRING_DE;
