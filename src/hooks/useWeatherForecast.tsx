import { fetchWeatherApi } from "openmeteo";
import { useState } from "react";

export type WeatherData = {
  time: Date;
  temperature: number;
  weatherCode: number;
};

const params = {
  latitude: 47.49995,
  longitude: 8.737565,
  hourly: ["temperature_2m", "weather_code"],
};
const url = "https://api.open-meteo.com/v1/forecast";

const targetHours = [7, 13, 19];

const getWeatherData = async () => {
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();

  const hourly = response.hourly()!;

  const rawWeatherData = {
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      weatherCode: hourly.variables(1)!.valuesArray()!,
    },
  };
  const weatherData: WeatherData[] = [];

  for (let i = 0; i < rawWeatherData.hourly.time.length; i++) {
    weatherData.push({
      time: rawWeatherData.hourly.time[i],
      temperature: rawWeatherData.hourly.temperature2m[i],
      weatherCode: rawWeatherData.hourly.weatherCode[i],
    });
  }

  return weatherData;
};

const getRelevantWeatherData = (
  weatherData: WeatherData[],
  daysAfterToday: number
): WeatherData[] => {
  const targetDay = (new Date().getDay() + daysAfterToday) % 7;

  const relevantHours = weatherData.filter(
    (d) => d.time.getDay() === targetDay
  );

  return targetHours.map(
    (hour, i) =>
      relevantHours.find((d) => d.time.getHours() === hour) ??
      ({} as WeatherData)
  );
};

const getCurrentWeatherIndex = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 10) return 0;
  if (currentHour < 17) return 1;
  return 2;
};

const useWeatherForecast = (): [
  (daysAfterToday: number) => Promise<WeatherData[]>,
  () => number
] => {
  const [weather, setWeather] = useState<WeatherData[]>([] as WeatherData[]);

  const isWheatherUpdated = () => {
    return (
      weather.length > 0 && weather[0].time.getDate() === new Date().getDate()
    );
  };

  const updateWeatherIfNeeded = async () => {
    if (isWheatherUpdated()) {
      return weather;
    }

    const data = await getWeatherData();
    setWeather(data);
    return data;
  };

  const getWeatherForDay = async (daysAfterToday: number) => {
    let weatherData = await updateWeatherIfNeeded();

    return getRelevantWeatherData(weatherData, daysAfterToday);
  };

  return [getWeatherForDay, getCurrentWeatherIndex];
};

export default useWeatherForecast;
