import { Slide } from "react-slideshow-image";
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
      <Slide {...fadeProperties}>
        {DeliveryDrivers.map((driver, index) => (
          <DeliveryDriverSlideshowImage
            image={driver.image}
            companyImage={driver.companyImage}
            name={driver.name}
            date={driver.date}
            orderItems={driver.orderItems}
            rating={driver.rating}
            key={index}
          />
        ))}
      </Slide>
    </FlexSpreadList>
  );
};

export default DeliveryDriverPage;
