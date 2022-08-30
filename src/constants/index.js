import {
  Beef,
  Bread,
  Burger,
  Dessert,
  Drink,
  Pizza,
  Sandwich,
} from "../utils/categories";

//route
const PATH_NAMES = {
  ROOT: "/",
  HOME: "/home",
  LOGIN: "/login",
  SHOP: "/shop/:name",
  DETAIL: "/shop/:name/:id",
  CHECKOUT: "/checkout",
};

// color
const PRIMARY_RED_COLOR = "#E84C51";
const PRIMARY_YELLOW_COLOR = "#fbb403";
const PRIMARY_WHITE_COLOR = "#fff";
const SUCCESS_COLOR = "#43d787";
const FAVOURITE_COLOR = "#ff0066";
const WARNING_COLOR = "#ffbb00";
const CLOSED_COLOR = "#3598DB";

// breakpoint
const PHONE_BREAKPOINT = 600;
const TABLET_BREAKPOINT = 960;

//type options
const typeOptions = [
  {
    img: Burger,
    name: "Burgers",
    type: "burgers",
  },
  {
    img: Bread,
    name: "Breads",
    type: "breads",
  },
  {
    img: Sandwich,
    name: "Sandwiches",
    type: "sandwiches",
  },
  {
    img: Beef,
    name: "Steaks",
    type: "steaks",
  },
  {
    img: Pizza,
    name: "Pizzas",
    type: "pizzas",
  },
  {
    img: Drink,
    name: "Drinks",
    type: "drinks",
  },
  {
    img: Dessert,
    name: "Desserts",
    type: "desserts",
  },
];

// price option
const priceOptions = [
  { content: "Under $50", range: { price_lte: 50 } },
  { content: "$50 to $100", range: { price_gte: 50, price_lte: 100 } },
  { content: "$100 to $200", range: { price_gte: 100, price_lte: 200 } },
  { content: "Above $200", range: { price_gte: 200 } },
];

//data types
const dataTypes = [
  {
    value: "Price: Low to High",
    sort: "price_lth",
  },
  {
    value: "Price: High to Low",
    sort: "price_htl",
  },
  {
    value: "Rate: Low to High",
    sort: "rate_lth",
  },
  {
    value: "Rate: High to Low",
    sort: "rate_htl",
  },
];

//price options
const dataOptions = [
  {
    content: "Buy 2 get 5% off",
    percentOff: 5,
  },
  {
    content: "Buy 5 get 10% off",
    percentOff: 10,
  },
  {
    content: "Buy 10 get 20% off",
    percentOff: 20,
  },
];

export {
  PATH_NAMES,
  PRIMARY_YELLOW_COLOR,
  PRIMARY_WHITE_COLOR,
  SUCCESS_COLOR,
  FAVOURITE_COLOR,
  WARNING_COLOR,
  CLOSED_COLOR,
  PHONE_BREAKPOINT,
  TABLET_BREAKPOINT,
  typeOptions,
  priceOptions,
  dataTypes,
  dataOptions,
};

export default PRIMARY_RED_COLOR;
