import {
  Container,
  Image,
  Name,
  FactsContainer,
  Date,
  OrderItem,
  OrderTitle,
} from "./Components";

const SlideshowImage = ({
  image,
  name,
  date,
  orderItems,
}: {
  image: string;
  name: string;
  date: string;
  orderItems: string[];
}) => {
  return (
    <Container>
      <Image src={image} />
      <FactsContainer>
        <Name>{name}</Name>
        <Date>Bestellt am {date}</Date>
        <OrderTitle>Bestellung:</OrderTitle>
        <ul>
          {orderItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </FactsContainer>
    </Container>
  );
};

export default SlideshowImage;
