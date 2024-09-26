import { useEffect, useState } from "react";
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
        options={[
          "\u{1F1E9}\u{1F1EA}", // 🇩🇪 Germany
          "\u{1F1EC}\u{1F1E7}", // 🇬🇧 United Kingdom
          "\u{1F1E8}\u{1F1ED}", // 🇨🇭 Switzerland
          "\u{1F1E6}\u{1F1F1}", // 🇦🇱 Albania
        ]}
        selected={selectedLanguage}
        onChangeCallback={(c: number) => setSelectedLanguage(c)}
      />
    </Container>
  );
};

export default Settings;
