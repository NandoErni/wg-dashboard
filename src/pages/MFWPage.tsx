import { FlexSpreadList } from "../components/Helper/HelperComponents";
import MFW from "../img/mfw.png";

const MFWPage = () => {
  return (
    <FlexSpreadList>
      <img
        src={MFW}
        style={{ maxHeight: "100vh", maxWidth: "100vw", alignSelf: "center" }}
      ></img>
    </FlexSpreadList>
  );
};

export default MFWPage;
