import { FlexSpreadList } from "../components/Helper/HelperComponents";
import Scavengerhunt from "../img/scavengerhunt_qr.jpg";

const ScavengerHuntPage = () => {
  return (
    <FlexSpreadList>
      <img
        src={Scavengerhunt}
        style={{ maxHeight: "60%", maxWidth: "60%", alignSelf: "center" }}
      ></img>
    </FlexSpreadList>
  );
};

export default ScavengerHuntPage;
