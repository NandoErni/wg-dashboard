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

export const Title = styled.div`
  font-size: 5em;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

export const TempElement = styled.div`
  font-size: 2em;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
