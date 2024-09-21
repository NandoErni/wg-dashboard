import { FlexSpreadList } from "../components/Helper/HelperComponents";
import ImageGallery from "react-image-gallery";
import { GetImages } from "../data/FirebaseConnection";
import { CSSProperties, useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { PacmanLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "auto",
  borderColor: "white",
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
    <div style={{ height: "100vh", overflowY: "hidden" }}>
      {images.length == 0 ? (
        <FlexSpreadList>
          <p style={{ textAlign: "center", fontSize: "3em" }}>Loading...</p>
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
    </div>
  );
};

export default ImagesOfCameraPage;
