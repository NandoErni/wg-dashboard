import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: row;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const FlexSpreadList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
`;

export const LanguageInputButtonContainer = styled.div<{
  $isSelected: boolean;
}>`
  font-size: 10em;
  border: 10px solid ${(p) => (p.$isSelected ? "#ffffff" : "#202020")};
  border-radius: 200px;
  width: 200px;
  height: 200px;

  background-color: "#5cc0e4";

  &:hover {
    border-color: white;
  }
`;
