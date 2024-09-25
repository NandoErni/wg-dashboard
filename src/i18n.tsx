import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import STRINGS from "./data/strings/strings";
import { languageIDToLanguageCode } from "./components/Helper/HelperFunctions";

i18next.use(initReactI18next).init({
  lng: languageIDToLanguageCode(
    parseInt(localStorage.getItem("language") ?? "0")
  ),
  debug: false,
  resources: {
    ...STRINGS,
  },
});
