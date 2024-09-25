import LanguageInputButton from "../Helper/LanguageInputButton";
import { LanguageOptionsContainer } from "./Components";

const OptionButtons = ({
  options,
  selected,
  onChangeCallback,
}: {
  options: string[];
  selected: number;
  onChangeCallback: Function;
}) => {
  return (
    <LanguageOptionsContainer>
      {options.map((option, index) => (
        <LanguageInputButton
          flag={option}
          key={index}
          isSelected={index == selected}
          onClick={() => onChangeCallback(index)}
        />
      ))}
    </LanguageOptionsContainer>
  );
};

export default OptionButtons;
