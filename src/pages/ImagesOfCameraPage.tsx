import { FlexSpreadList } from "../components/Helper/HelperComponents";
import ImageGallery from "react-image-gallery";
import { GetImages } from "../data/FirebaseConnection";
import { CSSProperties, useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import { HashLoader } from "react-spinners";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

const override: CSSProperties = {
  display: "block",
  margin: "auto",
};

const ImagesOfCameraPage = () => {
  const [images, setImages]: any = useState([]);
  const theme = useTheme();

  const { t } = useTranslation();

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
      {images.length === 0 ? (
        <FlexSpreadList>
          <p style={{ textAlign: "center", fontSize: "3em" }}>
            {t("general.loading")}
          </p>
          <HashLoader
            color={theme.colors.font}
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
            autoPlay={true}
            slideInterval={20_000}
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
