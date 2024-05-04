import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
`;

export const ColumnContainer = styled.div`
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div`
  height: 50%;
  width: 50%;
`;

export const DegreesText = styled.div<{ isHighlighted: boolean }>`
  font-size: ${(p) => (p.isHighlighted ? 4 : 3)}cqh;
  text-align: center;
  width: 100%;
`;

export const WeatherText = styled.div`
  font-size: 1.3em;
  width: 100%;
`;

export const WeekdayText = styled.div`
  height: 100%;
  font-size: 1.5em;
  text-align: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
