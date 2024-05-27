import EduardoImage from "../img/1_eduardo.jpg";
import DervishImage from "../img/2_dervish.jpg";
import NazimImage from "../img/3_nazim.jpg";
import AvtarImage from "../img/4_avtar.jpg";
import SerafinImage from "../img/5_serafin.jpg";
import SarbazImage from "../img/6_sarbaz.jpg";

export type DeliveryDriver = {
  image: string;
  name: string;
  date: Date;
  orderItems: string[];
  rating: number;
};

export const DeliveryDrivers: DeliveryDriver[] = [
  {
    name: "Eduardo",
    image: EduardoImage,
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
    date: new Date("2024-05-11"),
    orderItems: ["1 Steakhouse", "1 Cheeseburger"],
    rating: 3,
  },
  {
    name: "Nazim",
    image: NazimImage,
    date: new Date("2024-05-14"),
    orderItems: ["1 Homestyle Crispy Chicken Honey Mustard", "2 Cheeseburger"],
    rating: 4,
  },
  {
    name: "Avtar",
    image: AvtarImage,
    date: new Date("2024-05-15"),
    orderItems: ["6 Cheeseburger"],
    rating: 4,
  },
  {
    name: "Serafin",
    image: SerafinImage,
    date: new Date("2024-05-27"),
    orderItems: ["1 Happy Meal", "2 Big Mac", "McVeggie", "Big Tasty Single"],
    rating: 4,
  },
  {
    name: "Sarbaz",
    image: SarbazImage,
    date: new Date("2024-05-27"),
    orderItems: ["2 McFlurry M&M's"],
    rating: 1,
  },
];
