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

const COUNTDOWN_TIMER = 5;
const PREVIEW_TIMER = 1000;

const CameraPage = () => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState<any>(null);
  const [countdown, setCountdown] = useState(-1);
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const [previewCountdown, setPreviewCountdown] = useState(0);

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
      localStorage.setItem(crypto.randomUUID(), imageSrc);
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
      <WebcamContainer>
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
              <DoneModalTitle>Done!</DoneModalTitle>
              <DoneModalProgressbarContainer>
                <CircularProgressbar
                  maxValue={PREVIEW_TIMER}
                  value={previewCountdown}
                  text={""}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "white",
                    trailColor: "#00000025",
                  })}
                />
              </DoneModalProgressbarContainer>
            </DoneModalHeader>
            <DoneModalImagePreview src={imgSrc} />
            <DoneModalGoToImages>
              This image can be viewed on the Image page
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
