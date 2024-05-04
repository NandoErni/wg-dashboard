import { Container } from "./Components";
import WeatherCard from "./WeatherCard";
import useWeatherForecast from "../../hooks/useWeatherForecast";
import { useState } from "react";

const NUM_OF_DAYS_IN_ADVANCE = 4;

const Weather = () => {
  const [weatherCards, setWeatherCards] = useState<JSX.Element[]>();
  let [getWeatherForDay, getCurrentWeatherIndex] = useWeatherForecast();

  const updateWeatherCards = async () => {
    let listOfWheaters = [];
    for (let i = 0; i < NUM_OF_DAYS_IN_ADVANCE; i++) {
      const weather = await getWeatherForDay(i);
      listOfWheaters.push(
        <WeatherCard
          key={i}
          weather={weather}
          currentWeatherIndex={getCurrentWeatherIndex()}
        />
      );
    }
    setWeatherCards(listOfWheaters);
  };

  updateWeatherCards();
  return <Container>{weatherCards}</Container>;
};

export default Weather;
