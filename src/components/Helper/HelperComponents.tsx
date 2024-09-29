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
  font-size: 9em;
  border: 10px solid
    ${(p) => (p.$isSelected ? p.theme.colors.font : p.theme.colors.notFont)};
  border-radius: 200px;
  width: 200px;
  height: 200px;

  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    border-color: ${(props) => props.theme.colors.font};
  }
`;
