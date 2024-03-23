import styled from "styled-components";

export const Card = styled.div`
  height: min(30vh, 30vw);
  width: min(30vh, 30vw);
  margin: 20px;
  padding: 20px;

  text-align: center;
  border: 1px solid #282c34;
  border-radius: 20px;
  background-color: #383c44;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Icon = styled.div`
  font-size: 11em;
  color: #ffffff20;
`;

export const Title = styled.div`
  font-size: 0.9em;
  color: #ffffffa0;
`;

export const Name = styled.div`
  font-size: 2em;
`;
