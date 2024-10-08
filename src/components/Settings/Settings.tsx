import { useContext, useEffect, useState } from "react";
import {
  Container,
  LanguageOptionsContainer,
  SettingsLabel,
} from "./Components";
import OptionButtons from "./OptionButtons";
import { useTranslation } from "react-i18next";
import { languageIDToLanguageCode } from "../Helper/HelperFunctions";
import { getSavedThemeId, saveNewTheme } from "../../Theme";
import { AppContext } from "../../App";
import LanguageInputButton from "../Helper/LanguageInputButton";

const Settings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    parseInt(localStorage.getItem("language") ?? "0")
  );
  const [selectedTheme, setSelectedTheme] = useState(getSavedThemeId());
  const { t, i18n } = useTranslation();
  const { setNewTheme } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage + "");
    i18n.changeLanguage(languageIDToLanguageCode(selectedLanguage));
  }, [selectedLanguage]);

  useEffect(() => {
    saveNewTheme(selectedTheme);
    setNewTheme(selectedTheme);
  }, [selectedTheme]);

  return (
    <Container>
      <SettingsLabel>{t("settings.language")}</SettingsLabel>
      <OptionButtons
        options={[
          "\u{1F1E9}\u{1F1EA}", // 🇩🇪 Germany
          "\u{1F1EC}\u{1F1E7}", // 🇬🇧 United Kingdom
          "\u{1F1E8}\u{1F1ED}", // 🇨🇭 Switzerland
          "\u{1F1E6}\u{1F1F1}", // 🇦🇱 Albania
          "\u{1F1EA}\u{1F1EA}", // 🇪🇪 Estonia
        ]}
        selected={selectedLanguage}
        onChangeCallback={(c: number) => setSelectedLanguage(c)}
      />

      <SettingsLabel>{t("settings.theme")}</SettingsLabel>

      <OptionButtons
        options={[
          "\u{1F535}", // blue
          "\u{1F7E2}", // green
          "\u{1F9E0}", // pink
        ]}
        selected={selectedTheme}
        onChangeCallback={(c: number) => setSelectedTheme(c)}
      />

      <SettingsLabel>{t("settings.reload")}</SettingsLabel>
      <LanguageOptionsContainer>
        <LanguageInputButton
          flag={""}
          isSelected={false}
          onClick={() => window.location.reload()}
        />
      </LanguageOptionsContainer>
    </Container>
  );
};

export default Settings;
