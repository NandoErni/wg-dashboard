import { TFunction } from "i18next";
import {
  WiDaySunny,
  WiNightClear,
  WiDaySunnyOvercast,
  WiNightAltPartlyCloudy,
  WiDayCloudy,
  WiCloudy,
  WiNightAltCloudy,
  WiFog,
  WiNightFog,
  WiDayRain,
  WiNightAltRain,
  WiRain,
  WiNightAltRainMix,
  WiDayRainMix,
  WiSnow,
  WiNightAltSnow,
  WiRainMix,
  WiNightAltSnowThunderstorm,
  WiDaySnowThunderstorm,
  WiNightThunderstorm,
  WiThunderstorm,
} from "weather-icons-react";

type WeatherCode = {
  day: {
    description: (t: TFunction<"translation", undefined>) => string;
    icon: any;
  };
  night: {
    description: (t: TFunction<"translation", undefined>) => string;
    icon: any;
  };
};

export const WMO_WEATHER_CODES: { [id: number]: WeatherCode } = {};

WMO_WEATHER_CODES[0] = {
  day: {
    description: (t) => t("weatherCodes.sunny"),
    icon: WiDaySunny,
  },
  night: {
    description: (t) => t("weatherCodes.clear"),
    icon: WiNightClear,
  },
};
WMO_WEATHER_CODES[1] = {
  day: {
    description: (t) => t("weatherCodes.mainlySunny"),
    icon: WiDaySunnyOvercast,
  },
  night: {
    description: (t) => t("weatherCodes.mainlyClear"),
    icon: WiNightClear,
  },
};
WMO_WEATHER_CODES[2] = {
  day: {
    description: (t) => t("weatherCodes.partlyCloudy"),
    icon: WiDayCloudy,
  },
  night: {
    description: (t) => t("weatherCodes.partlyCloudy"),
    icon: WiNightAltPartlyCloudy,
  },
};
WMO_WEATHER_CODES[3] = {
  day: {
    description: (t) => t("weatherCodes.cloudy"),
    icon: WiCloudy,
  },
  night: {
    description: (t) => t("weatherCodes.cloudy"),
    icon: WiNightAltCloudy,
  },
};
WMO_WEATHER_CODES[45] = {
  day: {
    description: (t) => t("weatherCodes.foggy"),
    icon: WiFog,
  },
  night: {
    description: (t) => t("weatherCodes.foggy"),
    icon: WiNightFog,
  },
};
WMO_WEATHER_CODES[48] = {
  day: {
    description: (t) => t("weatherCodes.rimeFog"),
    icon: WiFog,
  },
  night: {
    description: (t) => t("weatherCodes.rimeFog"),
    icon: WiNightFog,
  },
};
WMO_WEATHER_CODES[51] = {
  day: {
    description: (t) => t("weatherCodes.lightDrizzle"),
    icon: WiDayRain,
  },
  night: {
    description: (t) => t("weatherCodes.lightDrizzle"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[53] = {
  day: {
    description: (t) => t("weatherCodes.drizzle"),
    icon: WiDayRain,
  },
  night: {
    description: (t) => t("weatherCodes.drizzle"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[55] = {
  day: {
    description: (t) => t("weatherCodes.heavyDrizzle"),
    icon: WiRain,
  },
  night: {
    description: (t) => t("weatherCodes.heavyDrizzle"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[56] = {
  day: {
    description: (t) => t("weatherCodes.lightFreezingDrizzle"),
    icon: WiDayRainMix,
  },
  night: {
    description: (t) => t("weatherCodes.lightFreezingDrizzle"),
    icon: WiNightAltRainMix,
  },
};
WMO_WEATHER_CODES[57] = {
  day: {
    description: (t) => t("weatherCodes.freezingDrizzle"),
    icon: WiDayRainMix,
  },
  night: {
    description: (t) => t("weatherCodes.freezingDrizzle"),
    icon: WiNightAltRainMix,
  },
};
WMO_WEATHER_CODES[61] = {
  day: {
    description: (t) => t("weatherCodes.lightRain"),
    icon: WiRain,
  },
  night: {
    description: (t) => t("weatherCodes.lightRain"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[63] = {
  day: {
    description: (t) => t("weatherCodes.rain"),
    icon: WiRain,
  },
  night: {
    description: (t) => t("weatherCodes.rain"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[65] = {
  day: {
    description: (t) => t("weatherCodes.heavyRain"),
    icon: WiRain,
  },
  night: {
    description: (t) => t("weatherCodes.heavyRain"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[66] = {
  day: {
    description: (t) => t("weatherCodes.lightFreezingRain"),
    icon: WiDayRainMix,
  },
  night: {
    description: (t) => t("weatherCodes.lightFreezingRain"),
    icon: WiNightAltRainMix,
  },
};
WMO_WEATHER_CODES[67] = {
  day: {
    description: (t) => t("weatherCodes.freezingRain"),
    icon: WiDayRainMix,
  },
  night: {
    description: (t) => t("weatherCodes.freezingRain"),
    icon: WiNightAltRainMix,
  },
};
WMO_WEATHER_CODES[71] = {
  day: {
    description: (t) => t("weatherCodes.lightSnow"),
    icon: WiSnow,
  },
  night: {
    description: (t) => t("weatherCodes.lightSnow"),
    icon: WiNightAltSnow,
  },
};
WMO_WEATHER_CODES[73] = {
  day: {
    description: (t) => t("weatherCodes.snow"),
    icon: WiSnow,
  },
  night: {
    description: (t) => t("weatherCodes.snow"),
    icon: WiNightAltSnow,
  },
};
WMO_WEATHER_CODES[75] = {
  day: {
    description: (t) => t("weatherCodes.heavySnow"),
    icon: WiSnow,
  },
  night: {
    description: (t) => t("weatherCodes.heavySnow"),
    icon: WiNightAltSnow,
  },
};
WMO_WEATHER_CODES[77] = {
  day: {
    description: (t) => t("weatherCodes.snowGrains"),
    icon: WiSnow,
  },
  night: {
    description: (t) => t("weatherCodes.snowGrains"),
    icon: WiNightAltSnow,
  },
};
WMO_WEATHER_CODES[80] = {
  day: {
    description: (t) => t("weatherCodes.lightShowers"),
    icon: WiRain,
  },
  night: {
    description: (t) => t("weatherCodes.lightShowers"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[81] = {
  day: {
    description: (t) => t("weatherCodes.showers"),
    icon: WiRain,
  },
  night: {
    description: (t) => t("weatherCodes.showers"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[82] = {
  day: {
    description: (t) => t("weatherCodes.heavyShowers"),
    icon: WiRain,
  },
  night: {
    description: (t) => t("weatherCodes.heavyShowers"),
    icon: WiNightAltRain,
  },
};
WMO_WEATHER_CODES[85] = {
  day: {
    description: (t) => t("weatherCodes.lightSnowShowers"),
    icon: WiRainMix,
  },
  night: {
    description: (t) => t("weatherCodes.lightSnowShowers"),
    icon: WiNightAltRainMix,
  },
};
WMO_WEATHER_CODES[86] = {
  day: {
    description: (t) => t("weatherCodes.snowShowers"),
    icon: WiRainMix,
  },
  night: {
    description: (t) => t("weatherCodes.snowShowers"),
    icon: WiNightAltRainMix,
  },
};
WMO_WEATHER_CODES[95] = {
  day: {
    description: (t) => t("weatherCodes.thunderstorm"),
    icon: WiThunderstorm,
  },
  night: {
    description: (t) => t("weatherCodes.thunderstorm"),
    icon: WiNightThunderstorm,
  },
};
WMO_WEATHER_CODES[96] = {
  day: {
    description: (t) => t("weatherCodes.lightThunderstormsWithHail"),
    icon: WiDaySnowThunderstorm,
  },
  night: {
    description: (t) => t("weatherCodes.lightThunderstormsWithHail"),
    icon: WiNightAltSnowThunderstorm,
  },
};
WMO_WEATHER_CODES[99] = {
  day: {
    description: (t) => t("weatherCodes.thunderstormWithHail"),
    icon: WiDaySnowThunderstorm,
  },
  night: {
    description: (t) => t("weatherCodes.thunderstormWithHail"),
    icon: WiNightAltSnowThunderstorm,
  },
};
