import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Eduardo from "../img/1_eduardo.jpg";
import Dervish from "../img/2_dervish.jpg";
import Nazim from "../img/3_nazim.jpg";
import Avtar from "../img/4_avtar.jpg";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import SlideshowImage from "../components/SlideshowImage/SlideshowImage";

const DeliveryDriverPage = () => {
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,

    arrows: true,
    canSwipe: true,
  };
  return (
    <FlexSpreadList>
      <Fade {...fadeProperties}>
        <SlideshowImage image={Eduardo} name="Eduardo" />
        <SlideshowImage image={Dervish} name="Dervish" />
        <SlideshowImage image={Nazim} name="Nazim" />
        <SlideshowImage image={Avtar} name="Avtar" />
      </Fade>
    </FlexSpreadList>
  );
};

export default DeliveryDriverPage;
