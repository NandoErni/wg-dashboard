import EduardoImage from "../img/driver/1_eduardo.jpg";
import DervishImage from "../img/driver/2_dervish.jpg";
import NazimImage from "../img/driver/3_nazim.jpg";
import AvtarImage from "../img/driver/4_avtar.jpg";
import SerafinImage from "../img/driver/5_serafin.jpg";
import SarbazImage from "../img/driver/6_sarbaz.jpg";
import JennifferImage from "../img/driver/7_jenniffer.jpg";
import RomulusImage from "../img/driver/8_romulus.jpg";
import IsmetImage from "../img/driver/9_ismet.jpg";
import ApostolosImage from "../img/driver/10_apostolos.jpg";
import MoktarImage from "../img/driver/11_moktar.jpg";
import AbdulSamadImage from "../img/driver/12_abdulsamad.jpg";
import VladoMadarImage from "../img/driver/13_vladomadar.jpg";

import McDonalds from "../img/logos/mcdonald.png";
import BurgerKing from "../img/logos/burgerking.png";

export type DeliveryDriver = {
  image: string;
  companyImage: string;
  name: string;
  date: Date;
  orderItems: string[];
  rating: number;
};

export const DeliveryDrivers: DeliveryDriver[] = [
  {
    name: "Eduardo",
    image: EduardoImage,
    companyImage: McDonalds,
    date: new Date("2024-04-16"),
    orderItems: [
      "1 Homestyle Crispy Chicken Teriyaki",
      "1 Cheeseburger",
      "1 Happy Meal",
    ],
    rating: 2,
  },
  {
    name: "Dervish",
    image: DervishImage,
    companyImage: McDonalds,
    date: new Date("2024-05-11"),
    orderItems: ["1 Steakhouse", "1 Cheeseburger"],
    rating: 3,
  },
  {
    name: "Nazim",
    image: NazimImage,
    companyImage: McDonalds,
    date: new Date("2024-05-14"),
    orderItems: ["1 Homestyle Crispy Chicken Honey Mustard", "2 Cheeseburger"],
    rating: 4,
  },
  {
    name: "Avtar",
    image: AvtarImage,
    companyImage: McDonalds,
    date: new Date("2024-05-15"),
    orderItems: ["6 Cheeseburger"],
    rating: 4,
  },
  {
    name: "Serafin",
    image: SerafinImage,
    companyImage: McDonalds,
    date: new Date("2024-05-27"),
    orderItems: ["1 Happy Meal", "2 Big Mac", "McVeggie", "Big Tasty Single"],
    rating: 4,
  },
  {
    name: "Sarbaz",
    image: SarbazImage,
    companyImage: McDonalds,
    date: new Date("2024-05-27"),
    orderItems: ["2 McFlurry M&M's"],
    rating: 1,
  },
  {
    name: "Sarbaz",
    image: SarbazImage,
    companyImage: McDonalds,
    date: new Date("2024-05-28"),
    orderItems: ["3 Cheesburger", "1 Happy Meal"],
    rating: 1,
  },
  {
    name: "Jenniffer",
    image: JennifferImage,
    companyImage: McDonalds,
    date: new Date("2024-05-31"),
    orderItems: ["2 Pita Gyros (Hähnchen)"],
    rating: 3,
  },
  {
    name: "Romulus",
    image: RomulusImage,
    companyImage: McDonalds,
    date: new Date("2024-06-2"),
    orderItems: ["2 Pita Gyros (Hähnchen)"],
    rating: 2,
  },
  {
    name: "Ismet",
    image: IsmetImage,
    companyImage: McDonalds,
    date: new Date("2024-06-2"),
    orderItems: ["2 Pita Gyros (Halloumi)"],
    rating: 3,
  },
  {
    name: "Vlado Madar",
    image: VladoMadarImage,
    companyImage: McDonalds,
    date: new Date("2024-06-12"),
    orderItems: ["1 Fenster Ausmessung"],
    rating: 3,
  },
  {
    name: "Avtar",
    image: AvtarImage,
    companyImage: McDonalds,
    date: new Date("2024-06-17"),
    orderItems: [
      "2 BK KING Fries Large Size",
      "2 Whopper",
      "2 Chili Cheese Nuggets (9 Stück)",
    ],
    rating: 1,
  },
  {
    name: "Apostolos",
    image: ApostolosImage,
    companyImage: McDonalds,
    date: new Date("2024-06-20"),
    orderItems: ["6 Whopper"],
    rating: 4,
  },
  {
    name: "Avtar",
    image: AvtarImage,
    companyImage: McDonalds,
    date: new Date("2024-06-25"),
    orderItems: [
      "2 VK Nuggets(9 Stück)",
      "1 King Fusion OREO",
      "1 Dreamy Caramel Sundae",
    ],
    rating: 1,
  },
  {
    name: "Moktar",
    image: MoktarImage,
    companyImage: McDonalds,
    date: new Date("2024-08-04"),
    orderItems: ["2 Meisterwerk", "2 Goldfritten"],
    rating: 4,
  },
  {
    name: "Abdul Samad",
    image: AbdulSamadImage,
    companyImage: McDonalds,
    date: new Date("2024-08-04"),
    orderItems: ["1 Whopper", "3 Cheeseburger"],
    rating: 2,
  },
];
