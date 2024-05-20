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
} from "./Components";

const DeliveryDriverSlideshowImage = ({
  image,
  name,
  date,
  orderItems,
}: {
  image: string;
  name: string;
  date: Date;
  orderItems: string[];
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
        <OrderTitle>{t("deliveryDrivers.order")}</OrderTitle>
        <ul>
          {orderItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </FactsContainer>
    </Container>
  );
};

export default DeliveryDriverSlideshowImage;
