import { Slide } from "react-slideshow-image";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import { Image, ImageContainer } from "../components/Webcam/Components";
import { GetImages } from "../data/FirebaseConnection";
import { useEffect, useState } from "react";
const ImagesOfCameraPage = () => {
  const [images, setImages]: any = useState([]);

  useEffect(() => {
    GetImages().then((imgs) => setImages(imgs));
  }, []);

  const fadeProperties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,

    arrows: false,
    canSwipe: true,
  };

  return (
    <FlexSpreadList key={images.length}>
      <Slide {...fadeProperties}>
        {images.map((img: string, i: number) => (
          <ImageContainer key={i}>
            <Image src={img} />
          </ImageContainer>
        ))}
      </Slide>
    </FlexSpreadList>
  );
};

export default ImagesOfCameraPage;
