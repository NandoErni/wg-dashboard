import SmallClock from "../components/Clock/SmallClock";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
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
