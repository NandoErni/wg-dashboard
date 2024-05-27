import { FlexSpreadList } from "../components/Helper/HelperComponents";
import WifiQrCode from "../img/wifi_qr.png";

const WifiPage = () => {
  return (
    <FlexSpreadList>
      <img
        src={WifiQrCode}
        style={{ maxHeight: "40%", maxWidth: "40%", alignSelf: "center" }}
      ></img>
    </FlexSpreadList>
  );
};

export default WifiPage;
