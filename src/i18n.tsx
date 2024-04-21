import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import STRINGS from "./data/strings/strings";

i18next.use(initReactI18next).init({
  lng: "de",
  debug: false,
  resources: {
    ...STRINGS,
  },
});
