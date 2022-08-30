import {
  BannerOne,
  BannerSecond,
  BannerThree,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  ProductOne,
  ProductTwo,
  ProductThree,
  ProductFour,
  ReviewOne,
  ReviewTwo,
  ReviewThree,
} from "./homeImages";

import {
  Bread,
  Chicken,
  Sandwich,
  Drink,
  Burger,
  Dessert,
  Ice,
  Pork,
  Pizza,
  Chocolate,
  Bbq,
  Beef,
} from "./categories";

// home
const homeBanners = [
  {
    title: "Enjoy your favourite meals",
    description: "We offer the most delicious and quality meals.",
    background: BannerOne,
  },
  {
    title: "Choose your favourite meals",
    description: "Menu is very deverse, something for everyone",
    background: BannerSecond,
  },
  {
    title: "Fast shipping",
    description: "We will deliver on time and right place.",
    background: BannerThree,
  },
];

const homeStep = [
  {
    img: StepOne,
    step: "1",
    content: "Choose Your Meals",
  },
  {
    img: StepTwo,
    step: "2",
    content: "Deliver Your Meals",
  },
  {
    img: StepThree,
    step: "3",
    content: "Cash on Delivery",
  },
  {
    img: StepFour,
    step: "4",
    content: "Enjoy Meals",
  },
];

const homeCategory = [
  {
    img: Burger,
    name: "burgers",
  },
  {
    img: Bread,
    name: "breads",
  },
  {
    img: Pizza,
    name: "pizzas",
  },
  {
    img: Pork,
    name: "porks",
  },
  {
    img: Bbq,
    name: "bbqs",
  },
  {
    img: Chocolate,
    name: "chocolates",
  },
  {
    img: Dessert,
    name: "desserts",
  },
  {
    img: Drink,
    name: "drinks",
  },
  {
    img: Chicken,
    name: "fried-chicken",
  },
  {
    img: Ice,
    name: "ice-cream",
  },
  {
    img: Sandwich,
    name: "sandwiches",
  },
  {
    img: Beef,
    name: "steaks",
  },
];

const homeProducts = [
  {
    img: ProductOne,
    name: "Emmy Squared",
    description: "Famous French Bread Burger",
    price: "77",
  },
  {
    img: ProductTwo,
    name: "Shake Shack",
    description: "Juicy Lucy Burger Kit - 10 Pack",
    price: "94",
  },
  {
    img: ProductThree,
    name: "Gramercy Tavern",
    description: "Vegan Burger Grill Kit for 4",
    price: "89",
  },
  {
    img: ProductFour,
    name: "Bugout Burgers",
    description: "Classic Shrimp Burgers",
    price: "106",
  },
  {
    img: ProductOne,
    name: "Cochon Butcher",
    description: "Juicy Lucy Burger Kit - 10 Pack",
    price: "88",
  },
  {
    img: ProductTwo,
    name: "Keens Steakhouse",
    description: "Famous French Bread Burger",
    price: "75",
  },
  {
    img: ProductThree,
    name: "Lekka Burger",
    description: "Vegan Burger Grill Kit for 4",
    price: "99",
  },
  {
    img: ProductFour,
    name: "Burgerlords",
    description: "Classic Shrimp Burgers",
    price: "83",
  },
];


const homeReviews = [
  {
    img: ReviewOne,
    name: "Lionel Messi",
    role: "Footballer of Paris Saint-Germain Club ",
    comment:
      "I chose food because of their value, brand. The quality of their service is very good. In particular, the food here is very delicious and reasonable price.",
  },
  {
    img: ReviewTwo,
    name: "Cristiano Ronaldo",
    role: "Footballer of Manchester United Club ",
    comment:
      "I chose food because of their value, brand. The quality of their service is very good. Menu is perfect, something for everyone. In particular, the food here is very delicious and reasonable price. Will be back definitely!",
  },
  {
    img: ReviewThree,
    name: "Tran Thanh",
    role: "People's Artist of Viet Nam",
    comment:
      "I chose food because of their value, brand. In particular, the food here is very delicious and reasonable price. The service was excellent",
  },
];

// detail
const detailTable = [
  {
    title: null,
    description: null,
    ingredients: "Ingredients",
  },
  {
    title: "678",
    description: "Protein",
    ingredients: "Egg",
  },
  {
    title: "633",
    description: "Energy",
    ingredients: "Milk",
  },
  {
    title: "1444",
    description: "Calo",
    ingredients: "Sugar",
  },
  {
    title: "89",
    description: "Fat",
    ingredients: "Vegetable Oil",
  },
  {
    title: "76",
    description: "Gluxit",
    ingredients: "Flour",
  },
];

export {
  homeBanners,
  homeStep,
  homeCategory,
  homeReviews,
  homeProducts,
  detailTable,
};
