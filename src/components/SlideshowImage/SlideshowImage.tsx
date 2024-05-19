import { Container, Image, Name } from "./Components";

const SlideshowImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <Container>
      <Image src={image} />
      <Name>{name}</Name>
    </Container>
  );
};

export default SlideshowImage;
