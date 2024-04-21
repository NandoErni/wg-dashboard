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
  justify-content: space-between;
  min-height: 100%;
`;
