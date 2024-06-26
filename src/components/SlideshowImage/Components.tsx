import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 50px;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export const Name = styled.div`
  font-size: 9em;
  font-weight: bold;
  inline-size: 100%;
  overflow-wrap: break-word;
  text-align: center;
  width: 100%;
`;

export const FactsContainer = styled.div`
  width: 50%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const Date = styled.div`
  text-align: center;
`;

export const OrderTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

export const OrderItem = styled.div`
  font-size: 1.2em;
  font-weight: light;
  text-align: center;
`;

export const Rating = styled.div`
  font-size: 3em;
  text-align: center;
  margin-bottom: 100px;
`;
