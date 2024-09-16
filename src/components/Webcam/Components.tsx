import styled from "styled-components";

export const WebcamContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

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
  max-width: 90vw;
  max-height: 90vh;
  margin: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
`;
