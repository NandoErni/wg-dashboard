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

export const languageCodeToLocale = (code: string) => {
  switch (code) {
    case "en":
      return "en-GB";
    case "de":
      return "de-DE";
    case "ch":
      return "de-CH";
    case "sq":
      return "sq";
  }
};
