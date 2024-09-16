import { Slide } from "react-slideshow-image";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import { Image, ImageContainer } from "../components/Webcam/Components";

const ImagesOfCameraPage = () => {
  const items = Object.entries({ ...localStorage });

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
        {items.map((img: [string, any]) => (
          <ImageContainer>
            <Image src={img[1]} key={img[0]} />
          </ImageContainer>
        ))}
      </Slide>
    </FlexSpreadList>
  );
};

export default ImagesOfCameraPage;
