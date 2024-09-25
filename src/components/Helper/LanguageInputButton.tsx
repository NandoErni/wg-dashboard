import { LanguageInputButtonContainer } from "./HelperComponents";

const LanguageInputButton = ({
  flag,
  isSelected,
  onClick,
}: {
  flag: string;
  isSelected: boolean;
  onClick: any;
}) => {
  return (
    <LanguageInputButtonContainer onClick={onClick} $isSelected={isSelected}>
      {flag}
    </LanguageInputButtonContainer>
  );
};

export default LanguageInputButton;
