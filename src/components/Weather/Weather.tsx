import { Container } from "./Components";
import ReactWeather, { useWeatherBit } from "react-open-weather";
import { useTranslation } from "react-i18next";

const Weather = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: process.env.REACT_APP_WEATHER_BIT_API_KEY,
    lat: "48.137154",
    lon: "11.576124",
    lang: i18n.language,
    unit: "metric",
  });
  return (
    <Container>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang={i18n.language}
        locationLabel="Winterthur"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </Container>
  );
};

export default Weather;
