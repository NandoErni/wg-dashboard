import { useEffect, useState } from "react";
import LanguageInputButton from "../Helper/LanguageInputButton";
import { Container, SettingsLabel } from "./Components";
import OptionButtons from "./OptionButtons";
import { useTranslation } from "react-i18next";
import { languageIDToLanguageCode } from "../Helper/HelperFunctions";

const Settings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    parseInt(localStorage.getItem("language") ?? "0")
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage + "");
    i18n.changeLanguage(languageIDToLanguageCode(selectedLanguage));
  }, [selectedLanguage]);
  return (
    <Container>
      <SettingsLabel>{t("settings.language")}</SettingsLabel>
      <OptionButtons
        options={["🇩🇪", "🇬🇧", "🇨🇭", "🇦🇱"]}
        selected={selectedLanguage}
        onChangeCallback={(c: number) => setSelectedLanguage(c)}
      />
    </Container>
  );
};

export default Settings;
