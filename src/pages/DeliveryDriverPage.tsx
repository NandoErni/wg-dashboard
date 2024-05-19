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
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,

    arrows: false,
    canSwipe: true,
  };
  return (
    <FlexSpreadList>
      <Fade {...fadeProperties}>
        <SlideshowImage
          image={Eduardo}
          date="16.04.2024"
          orderItems={[
            "1 Homestyle Crispy Chicken Teriyaki",
            "1 Cheeseburger",
            "1 Happymeal",
          ]}
          name="Eduardo"
        />
        <SlideshowImage
          image={Dervish}
          date="11.05.2024"
          orderItems={["1 Steakhouse", "1 Cheeseburger"]}
          name="Dervish"
        />
        <SlideshowImage
          image={Nazim}
          date="14.05.2024"
          orderItems={[
            "1 Homestyle Crispy Chicken Honey Mustard",
            "2 Cheeseburger",
          ]}
          name="Nazim"
        />
        <SlideshowImage
          image={Avtar}
          date="15.05.2024"
          orderItems={["6 Cheeseburger"]}
          name="Avtar"
        />
      </Fade>
    </FlexSpreadList>
  );
};

export default DeliveryDriverPage;
