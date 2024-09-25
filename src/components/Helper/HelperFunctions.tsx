export const getStringOfWeekday = (weekDay: number): string => {
  switch (weekDay) {
    case 0:
      return "Monday";
    case 1:
      return "Tuesday";
    case 2:
      return "Wednesday";
    case 3:
      return "Thursday";
    case 4:
      return "Friday";
    case 5:
      return "Saturday";
    case 6:
      return "Sunday";
    default:
      return "Error";
  }
};

export const languageIDToLanguageCode = (id: number) => {
  switch (id) {
    case 0:
      return "de";
    case 1:
      return "en";
    case 2:
      return "ch";
    case 3:
      return "sq"; // albanian
  }
};
