import { useTranslation } from "react-i18next";
import { dateFormatOptions } from "../../hooks/useRecurringDate";
import {
  Container,
  Image,
  Name,
  FactsContainer,
  Date,
  OrderTitle,
  ImageContainer,
  OrderItem,
  Rating,
} from "./Components";

const DeliveryDriverSlideshowImage = ({
  image,
  name,
  date,
  orderItems,
  rating,
}: {
  image: string;
  name: string;
  date: Date;
  orderItems: string[];
  rating: number;
}) => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <FactsContainer>
        <Name>{name}</Name>
        <Date>
          {t("deliveryDrivers.orderedOn")}{" "}
          {date.toLocaleString(i18n.language, dateFormatOptions)}
        </Date>
        <Rating>{"⭐".repeat(rating)}</Rating>
        <OrderTitle>{t("deliveryDrivers.order")}</OrderTitle>
        {orderItems.map((item) => (
          <OrderItem>{item}</OrderItem>
        ))}
      </FactsContainer>
    </Container>
  );
};

export default DeliveryDriverSlideshowImage;
