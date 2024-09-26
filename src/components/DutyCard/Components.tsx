import styled from "styled-components";

export const Card = styled.div`
  width: 18vw;
  min-width: 200px;
  margin: 20px;
  padding: 20px;

  text-align: center;
  border: 0px solid #282c34;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Icon = styled.div`
  font-size: 11em;
  color: ${(props) => props.theme.colors.fontTransparent};
`;

export const SubTitle = styled.div`
  font-size: 1.1em;
  font-weight: lighter;
  color: ${(props) => props.theme.colors.font};
`;

export const Title = styled.div`
  margin-top: 1em;
  font-size: 2em;
  text-align: center;
  color: ${(props) => props.theme.colors.font};
`;

export const Name = styled.div`
  font-size: 2em;
`;

export const DutyModalContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.modalBackground};
`;

export const DutyModalTitle = styled.div`
  text-align: center;
  font-size: 2em;
  margin: 0.8em;
`;

export const Quote = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.fontTransparent};
`;

export const Seperator = styled.hr`
  margin: 3em;
`;

export const TasksList = styled.ul``;
