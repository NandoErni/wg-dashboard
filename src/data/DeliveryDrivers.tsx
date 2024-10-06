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
import YennyImage from "../img/driver/14_yenny.jpg";
import JasothanImage from "../img/driver/15_jasothan.jpg";

import McDonalds from "../img/logos/mcdonald.png";
import BurgerKing from "../img/logos/burgerking.png";
import OhMyGreek from "../img/logos/ohmygreek.svg";
import HappyFenster from "../img/logos/happyfenster.png";
import HolyCow from "../img/logos/holycow.png";

export type DeliveryDriver = {
  image: string;
  companyImage: string;
  name: string;
  date: Date;
  orderItems: string[];
  rating: number;
  review: string;
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
    review: "Het sich verfahre",
  },
  {
    name: "Dervish",
    image: DervishImage,
    companyImage: McDonalds,
    date: new Date("2024-05-11"),
    orderItems: ["1 Steakhouse", "1 Cheeseburger"],
    rating: 3,
    review: "Steakhouse isch nöd so guet gsi",
  },
  {
    name: "Nazim",
    image: NazimImage,
    companyImage: McDonalds,
    date: new Date("2024-05-14"),
    orderItems: ["1 Homestyle Crispy Chicken Honey Mustard", "2 Cheeseburger"],
    rating: 4,
    review: "Gueti Burger gsi",
  },
  {
    name: "Avtar",
    image: AvtarImage,
    companyImage: McDonalds,
    date: new Date("2024-05-15"),
    orderItems: ["6 Cheeseburger"],
    rating: 4,
    review: "Schnell und cheesy",
  },
  {
    name: "Serafin",
    image: SerafinImage,
    companyImage: McDonalds,
    date: new Date("2024-05-27"),
    orderItems: ["1 Happy Meal", "2 Big Mac", "McVeggie", "Big Tasty Single"],
    rating: 4,
    review: "Wow..",
  },
  {
    name: "Sarbaz",
    image: SarbazImage,
    companyImage: McDonalds,
    date: new Date("2024-05-27"),
    orderItems: ["2 McFlurry M&M's"],
    rating: 1,
    review: "Lang bruucht + zwei mol verfahre",
  },
  {
    name: "Sarbaz",
    image: SarbazImage,
    companyImage: McDonalds,
    date: new Date("2024-05-28"),
    orderItems: ["3 Cheesburger", "1 Happy Meal"],
    rating: 1,
    review: "Wieder verfahre",
  },
  {
    name: "Jenniffer",
    image: JennifferImage,
    companyImage: OhMyGreek,
    date: new Date("2024-05-31"),
    orderItems: ["2 Pita Gyros (Hähnchen)"],
    rating: 3,
    review: "Ganz okay",
  },
  {
    name: "Romulus",
    image: RomulusImage,
    companyImage: OhMyGreek,
    date: new Date("2024-06-2"),
    orderItems: ["2 Pita Gyros (Hähnchen)"],
    rating: 2,
    review: "het chli länger brucht",
  },
  {
    name: "Ismet",
    image: IsmetImage,
    companyImage: OhMyGreek,
    date: new Date("2024-06-2"),
    orderItems: ["2 Pita Gyros (Halloumi)"],
    rating: 3,
    review: "Joa",
  },
  {
    name: "Vlado Madar",
    image: VladoMadarImage,
    companyImage: HappyFenster,
    date: new Date("2024-06-12"),
    orderItems: ["1 Fenster Ausmessung"],
    rating: 2,
    review:
      "Het sich verspötet und isch recht lang gange bis es zumne Termin cho isch",
  },
  {
    name: "Avtar",
    image: AvtarImage,
    companyImage: BurgerKing,
    date: new Date("2024-06-17"),
    orderItems: [
      "2 BK KING Fries Large Size",
      "2 Whopper",
      "2 Chili Cheese Nuggets (9 Stück)",
    ],
    rating: 1,
    review: "Chili Cheese Nuggets sind nöd guet",
  },
  {
    name: "Apostolos",
    image: ApostolosImage,
    companyImage: BurgerKing,
    date: new Date("2024-06-20"),
    orderItems: ["6 Whopper"],
    rating: 4,
    review: "Top",
  },
  {
    name: "Avtar",
    image: AvtarImage,
    companyImage: BurgerKing,
    date: new Date("2024-06-25"),
    orderItems: [
      "2 VK Nuggets(9 Stück)",
      "1 King Fusion OREO",
      "1 Dreamy Caramel Sundae",
    ],
    rating: 1,
    review: "Glace Maschine isch kaputt gsi und als Ersatz hends es Cola geh.",
  },
  {
    name: "Moktar",
    image: MoktarImage,
    companyImage: HolyCow,
    date: new Date("2024-08-04"),
    orderItems: ["2 Meisterwerk", "2 Goldfritten"],
    rating: 4,
    review: "Top",
  },
  {
    name: "Abdul Samad",
    image: AbdulSamadImage,
    companyImage: BurgerKing,
    date: new Date("2024-08-04"),
    orderItems: ["1 Whopper", "3 Cheeseburger"],
    rating: 2,
    review: "Cheesburger sind schlechter als McDonald's",
  },
  {
    name: "Abdul Samad",
    image: AbdulSamadImage,
    companyImage: BurgerKing,
    date: new Date("2024-09-07"),
    orderItems: [
      "1 Big King Menu",
      "1 Flame Steakhouse",
      "1 BK Nuggets (6 Stück)",
    ],
    rating: 1,
    review: "Het mit de Bstellig no chli bim Archhöfe chillt",
  },
  {
    name: "Apostolos",
    image: ApostolosImage,
    companyImage: BurgerKing,
    date: new Date("2024-09-13"),
    orderItems: [
      "1 The Classic Appenzeller Menu",
      "2 Whopper",
      "1 The classic Appenzeller",
      "1 Chili Cheese Dip",
    ],
    rating: 2,
    review: "Burger sind geil gsi, isch schnell cho aber de Dip het gfehlt.",
  },
  {
    name: "Yenny",
    image: YennyImage,
    companyImage: BurgerKing,
    date: new Date("2024-09-18"),
    orderItems: [
      "1 The Sunkissed Gruyère Double AOP",
      "Menu Sunkissed Gruyère AOP",
      "2 Whopper",
    ],
    rating: 3,
    review: "Biz verfahre",
  },
  {
    name: "Abdul Samad",
    image: AbdulSamadImage,
    companyImage: BurgerKing,
    date: new Date("2024-09-24"),
    orderItems: ["2 Crispy Chicken", "2 Whopper", "1 Flame Dip"],
    rating: 1,
    review: "Kei Bock uf Fast-Food gha",
  },
  {
    name: "Jasothan",
    image: JasothanImage,
    companyImage: OhMyGreek,
    date: new Date("2024-09-28"),
    orderItems: [
      "1 Pita (Spezialangebot)",
      "3 Pita (Spezialangebot)",
      "2 Pita (Spezialangebot)",
    ],
    rating: 4,
    review: "Isch für de Marti Alexander igsprunge",
  },
  {
    name: "Sarbaz",
    image: SarbazImage,
    companyImage: BurgerKing,
    date: new Date("2024-10-6"),
    orderItems: [
      "2 Red Bull",
      "1 King fusion OREO",
      "1 Nutella Sundae",
      "1 Brookie",
      "3 Flame Dip",
    ],
    rating: 2,
    review: "Het Pause gmacht und zwei Zwüschestops",
  },
];
