import { useTranslation } from "react-i18next";
import { dateFormatOptions } from "../../hooks/useRecurringDate";
import {
  Container,
  Image,
  LogoImage,
  Name,
  FactsContainer,
  Date,
  Review,
  OrderTitle,
  ImageContainer,
  OrderItem,
  Rating,
} from "./Components";
import { languageCodeToLocale } from "../Helper/HelperFunctions";

const DeliveryDriverSlideshowImage = ({
  image,
  companyImage,
  name,
  date,
  orderItems,
  rating,
  review,
}: {
  image: string;
  companyImage: string;
  name: string;
  date: Date;
  orderItems: string[];
  rating: number;
  review: string;
}) => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
        <LogoImage src={companyImage} />
      </ImageContainer>
      <FactsContainer>
        <Name>{name}</Name>
        <Date>
          {t("deliveryDrivers.orderedOn")}{" "}
          {date.toLocaleString(
            languageCodeToLocale(i18n.language),
            dateFormatOptions
          )}
        </Date>
        <Rating>{"⭐".repeat(rating)}</Rating>
        <Review>{review}</Review>
        <OrderTitle>{t("deliveryDrivers.order")}</OrderTitle>
        {orderItems.map((item) => (
          <OrderItem>{item}</OrderItem>
        ))}
      </FactsContainer>
    </Container>
  );
};

export default DeliveryDriverSlideshowImage;
