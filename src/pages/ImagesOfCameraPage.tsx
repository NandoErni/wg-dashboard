import { Slide } from "react-slideshow-image";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import { Image, ImageContainer } from "../components/Webcam/Components";
import ImageGallery from "react-image-gallery";
import { GetImages } from "../data/FirebaseConnection";
import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

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

  const getImageData = () => {
    return images.map((img: string, i: number) => ({
      original: img,
      thumbnail: img,
    }));
  };

  return (
    <FlexSpreadList key={images.length}>
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        disableSwipe={false}
        items={getImageData()}
      />
      {/* <Slide {...fadeProperties}>
        {images.map((img: string, i: number) => (
          <ImageContainer key={i}>
            <Image src={img} />
          </ImageContainer>
        ))}
      </Slide> */}
    </FlexSpreadList>
  );
};

export default ImagesOfCameraPage;
