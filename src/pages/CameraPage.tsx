import Webcam from "react-webcam";
import { FlexSpreadList } from "../components/Helper/HelperComponents";
import {
  WebcamContainer,
  PhotoButton,
  Circle,
  Ring,
  Countdown,
} from "../components/Webcam/Components";
import { useRef, useState } from "react";

const CameraPage = () => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState<any>(null);
  const [countdown, setCountdown] = useState(-1);

  const handleCaptureClick = () => {
    setCountdown(5);
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
    }, 6020);
  };

  return (
    <FlexSpreadList>
      <WebcamContainer>
        <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      </WebcamContainer>
      <PhotoButton onClick={handleCaptureClick}>
        <Circle />
        <Ring />
      </PhotoButton>
      {countdown >= 0 ? <Countdown>{countdown}</Countdown> : <></>}
    </FlexSpreadList>
  );
};

export default CameraPage;
