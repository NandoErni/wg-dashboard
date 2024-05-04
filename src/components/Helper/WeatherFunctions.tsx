import { TFunction } from "i18next";
import { WMO_WEATHER_CODES } from "../../data/WMOWheaterCodes";
import { WiDaySunny, WiNightClear } from "weather-icons-react";

export const getIconAndDescriptionFromWeatherCode = (weatherCode: number) => {
  if (weatherCode in WMO_WEATHER_CODES) {
    return WMO_WEATHER_CODES[weatherCode];
  }

  return {
    day: {
      description: (t: TFunction<"translation", undefined>) =>
        "code: " + weatherCode,
      icon: WiDaySunny,
    },
    night: {
      description: (t: TFunction<"translation", undefined>) =>
        "code: " + weatherCode,
      icon: WiNightClear,
    },
  };
};
