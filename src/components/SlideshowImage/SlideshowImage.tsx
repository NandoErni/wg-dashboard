import {
  Container,
  Image,
  Name,
  FactsContainer,
  Date,
  Order,
} from "./Components";

const SlideshowImage = ({
  image,
  name,
  date,
  order,
}: {
  image: string;
  name: string;
  date: string;
  order: string;
}) => {
  return (
    <Container>
      <Image src={image} />
      <FactsContainer>
        <Name>{name}</Name>
        <Date>Bestellt am {date}</Date>
        <Order>{order}</Order>
      </FactsContainer>
    </Container>
  );
};

export default SlideshowImage;
