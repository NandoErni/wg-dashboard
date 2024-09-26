import Webcam from "react-webcam";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import {
  WebcamContainer,
  PhotoButton,
  Circle,
  Ring,
  Countdown,
  DoneModal,
  DoneModalTitle,
  DoneModalImagePreview,
  DoneModalGoToImages,
  DoneModalBody,
  DoneModalProgressbarContainer,
  DoneModalHeader,
} from "../components/Webcam/Components";
import { useRef, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useTranslation } from "react-i18next";
import { AddImage } from "../data/FirebaseConnection";
import { useTheme } from "styled-components";

const COUNTDOWN_TIMER = 5;
const PREVIEW_TIMER = 1000;

const CameraPage = () => {
  const { t } = useTranslation();
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState<any>(null);
  const [countdown, setCountdown] = useState(-1);
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const [previewCountdown, setPreviewCountdown] = useState(0);
  const theme = useTheme();

  const handleCaptureClick = () => {
    setCountdown(COUNTDOWN_TIMER);
    let intervalId = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
      if (!webcamRef.current) return;
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      console.log(imageSrc);
      AddImage(imageSrc);
      startPreview();
    }, (COUNTDOWN_TIMER + 1) * 1000);
  };

  const startPreview = () => {
    setIsPreviewActive(true);
    setPreviewCountdown(PREVIEW_TIMER);
    const intervalId = setInterval(() => {
      setPreviewCountdown((c) => c - 1);
    }, 10);
    setTimeout(() => {
      setIsPreviewActive(false);
      clearInterval(intervalId);
    }, PREVIEW_TIMER * 10);
  };

  return (
    <FlexSpreadList>
      <WebcamContainer className="webcamContainer">
        <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      </WebcamContainer>
      {countdown >= 0 || isPreviewActive ? (
        <></>
      ) : (
        <PhotoButton onClick={handleCaptureClick}>
          <Circle />
          <Ring />
        </PhotoButton>
      )}
      {countdown >= 0 ? <Countdown>{countdown}</Countdown> : <></>}
      {isPreviewActive ? (
        <DoneModal>
          <DoneModalBody>
            <DoneModalHeader>
              <div />
              <DoneModalTitle>{t("camera.done")}</DoneModalTitle>
              <DoneModalProgressbarContainer>
                <CircularProgressbar
                  maxValue={PREVIEW_TIMER}
                  value={previewCountdown}
                  text={""}
                  styles={buildStyles({
                    textColor: theme.colors.font,
                    pathColor: theme.colors.font,
                    trailColor: theme.colors.notFontTransparent,
                  })}
                />
              </DoneModalProgressbarContainer>
            </DoneModalHeader>
            <DoneModalImagePreview src={imgSrc} />
            <DoneModalGoToImages>
              {t("camera.imagePreviewInfoText")}
            </DoneModalGoToImages>
          </DoneModalBody>
        </DoneModal>
      ) : (
        <></>
      )}
    </FlexSpreadList>
  );
};

export default CameraPage;
