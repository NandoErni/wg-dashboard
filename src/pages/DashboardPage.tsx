import { useTranslation } from "react-i18next";
import SmallClock from "../components/Clock/SmallClock";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import ReactWeather, { useWeatherBit } from "react-open-weather";
import Weather from "../components/Weather/Weather";

const DashboardPage = () => {
  return (
    <FlexSpreadList>
      <SmallClock />
      <Weather />
    </FlexSpreadList>
  );
};

export default DashboardPage;
