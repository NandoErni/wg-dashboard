import BusClock from "../components/BusClock/BusClock";
import SmallClock from "../components/Clock/SmallClock";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import Weather from "../components/Weather/Weather";

const DashboardPage = () => {
  return (
    <FlexSpreadList>
      <BusClock />
      <SmallClock />
      <Weather />
    </FlexSpreadList>
  );
};

export default DashboardPage;
