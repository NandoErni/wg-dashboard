import { FlexSpreadList } from "../components/Helper/HelperComponents";
import ImageGallery from "react-image-gallery";
import { GetImages } from "../data/FirebaseConnection";
import { CSSProperties, useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ClipLoader from "react-spinners/ClipLoader";
import { ClimbingBoxLoader, PacmanLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "auto",
  borderColor: "white",
};

const fadeProperties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,

  arrows: false,
  canSwipe: true,
};

const ImagesOfCameraPage = () => {
  const [images, setImages]: any = useState([]);

  useEffect(() => {
    GetImages().then((imgs) => setImages(imgs));
  }, []);

  const getImageData = () => {
    return images.map((img: string, i: number) => ({
      original: img,
      thumbnail: img,
    }));
  };

  return (
    <>
      {images.length == 0 ? (
        <FlexSpreadList>
          <PacmanLoader
            color={"#ffffff"}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </FlexSpreadList>
      ) : (
        <FlexSpreadList key={images.length}>
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            disableSwipe={false}
            items={getImageData()}
          />
        </FlexSpreadList>
      )}
    </>
  );
};

export default ImagesOfCameraPage;
