import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import DeliveryDriverSlideshowImage from "../components/SlideshowImage/DeliveryDriverSlideshowImage";
import { DeliveryDrivers } from "../data/DeliveryDrivers";

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
        {DeliveryDrivers.map((driver, index) => (
          <DeliveryDriverSlideshowImage
            image={driver.image}
            name={driver.name}
            date={driver.date}
            orderItems={driver.orderItems}
            key={index}
          />
        ))}
      </Fade>
    </FlexSpreadList>
  );
};

export default DeliveryDriverPage;
