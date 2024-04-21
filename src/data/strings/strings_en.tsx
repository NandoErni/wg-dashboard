import { StringType } from "./strings";

const STRING_EN: StringType = {
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
      day_one: "{{count}} Day",
      day_other: "{{count}} Days",
    },
    trashCalendar: {
      title: "Trash calendar",
    },
    duties: {
      bathroom: {
        name: "Bathroom",
        quote:
          "He, who finds himself upon the edge of rectal release, may enjoy this very moment!",
        generalTasks: {
          bathroom: "Bathroom",
          trash: "Trash",
          compost: "Compost",
        },
        detailedTasks: {
          cleanToilet: "Clean toilet",
          cleanSink: "Clean sink",
          cleanShower: "Clean shower",
          cleanFurniture: "Clean furniture",
          disposeTrash: "Dispose trash",
          disposeCompost: "Dispose compost",
        },
      },
      floor: {
        name: "Floor",
        quote: "The floor is below us!",
        generalTasks: {
          livingRoom: "Livingroom",
          floor: "Floor",
          plants: "Plants",
          glasAndCans: "Glas & Cans",
        },
        detailedTasks: {
          cleanSofa: "Clean sofa",
          lamps: "lamps",
          vacuumClean: "Vacuum clean",
          wipeFloor: "Wipe the floor",
          disposeGlasAndCans: "dispose glas & cans",
          waterPlants: "Water plants",
        },
      },
      kitchen: {
        name: "Kitchen",
        quote:
          "Even the greatest of them all can't wipe his feet without an El Tony!",
        generalTasks: {
          kitchen: "Kitchen",
          petAndPlasticBottles: "PET- and plastic bottles",
          cardboardAndPaper: "Cardboard and paper",
        },
        detailedTasks: {
          cleanStoveTableAndSink: "Clean stove, table and sink",
          cleanSurfaces: "Clean surfaces",
          cleanTrashCabinet: "Clean trash cabinet",
          cleanSteamExhaust: "Clean steam exhaust",
          disposeCardboardAndPaper: "Dispose cardboard and paper",
          disposePetAndPlasticBottles: "Dispose PET- and plastic bottles",
        },
      },
    },
  },
};

export default STRING_EN;
