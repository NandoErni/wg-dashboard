import { Container, Image } from "./Components";

const SlideshowImage = ({ image }: { image: string }) => {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
};

export default SlideshowImage;
