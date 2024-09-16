import styled from "styled-components";

export const WebcamContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 99vw;
  height: 99vh;

  > video {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 12%;
  left: 12%;
  bottom: 12%;
  right: 12%;
  border-radius: 100%;
  background-color: #ffffff;
  opacity: 0;
  transition: all 0.25s;
`;
export const Ring = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  border-radius: 100%;
  border: 0.5em solid #ffffff;
  opacity: 0.8;
  transition: all 0.25s;
`;

export const PhotoButton = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  &:hover ${Circle} {
    opacity: 1;
  }

  &:active ${Ring} {
    opacity: 1;
  }

  &:active ${Circle} {
    opacity: 0.5;
  }
`;

export const Countdown = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20em;
`;

export const Image = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  margin: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

export const DoneModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #000000a0;
  display: flex;
`;

export const DoneModalBody = styled.div`
  background-color: #1a5e79;
  min-height: 80%;
  min-width: 80%;
  max-width: 90%;
  margin: auto;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DoneModalTitle = styled.h1`
  margin: auto;
`;

export const DoneModalImagePreview = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;
`;
export const DoneModalGoToImages = styled.div`
  font-size: 2em;
  padding: 10px;
  margin: 10px;
`;

export const DoneModalProgressbarContainer = styled.div`
  max-width: 70px;
`;

export const DoneModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
