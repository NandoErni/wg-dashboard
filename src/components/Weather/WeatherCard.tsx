import {
  ColumnContainer,
  Icon,
  DegreesText,
  WeatherText,
  WeekdayText,
  RowContainer,
} from "./Components";
import { useTranslation } from "react-i18next";
import { Card } from "../DutyCard/Components";
import { WeatherData } from "../../hooks/useWeatherForecast";
import { getIconAndDescriptionFromWeatherCode } from "../Helper/WeatherFunctions";

const dateFormatOptions: any = {
  weekday: "long",
};

const WeatherCard = ({
  weather,
  currentWeatherIndex,
}: {
  weather: WeatherData[];
  currentWeatherIndex: number;
}) => {
  const { t, i18n } = useTranslation();

  const currentWeather = weather[currentWeatherIndex];

  const isToday = new Date().getDay() === currentWeather.time.getDay();
  const isDay = currentWeather.time.getHours() < 18 || !isToday;

  const weatherCodeDescription = isDay
    ? getIconAndDescriptionFromWeatherCode(currentWeather.weatherCode).day
    : getIconAndDescriptionFromWeatherCode(currentWeather.weatherCode).night;
  return (
    <Card>
      <WeekdayText>
        {currentWeather.time.toLocaleString(i18n.language, dateFormatOptions)}
      </WeekdayText>
      <RowContainer>
        <Icon>
          <weatherCodeDescription.icon
            style={{ color: "white", height: "100%", width: "100%" }}
          />
        </Icon>
        <ColumnContainer>
          {weather.map((w, index) => (
            <DegreesText
              $isHighlighted={isToday && index === currentWeatherIndex}
              key={index}
            >
              {Math.round(w.temperature * 10) / 10}° C
            </DegreesText>
          ))}
        </ColumnContainer>
      </RowContainer>

      <WeatherText>{weatherCodeDescription.description(t)}</WeatherText>
    </Card>
  );
};

export default WeatherCard;
