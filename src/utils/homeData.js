// banners
import BannerOne from "../assets/images/Home/banner1.jpg";
import BannerSecond from "../assets/images/Home/banner2.jpg";
import BannerThree from "../assets/images/Home/banner3.jpg";

// steps
import StepOne from "../assets/images/Home/step1.jpg";
import StepTwo from "../assets/images/Home/step2.jpg";
import StepThree from "../assets/images/Home/step3.jpg";
import StepFour from "../assets/images/Home/step4.jpg";

// products
import ProductOne from "../assets/images/Home/product1.png";
import ProductTwo from "../assets/images/Home/product2.png";
import ProductThree from "../assets/images/Home/product3.png";
import ProductFour from "../assets/images/Home/product4.png";

// reviews
import ReviewOne from "../assets/images/Home/review1.jpg";
import ReviewTwo from "../assets/images/Home/review2.jpg";
import ReviewThree from "../assets/images/Home/review3.jpg";

// categories
import Beef from "../assets/svgs/Home/beef.svg";
import Pork from "../assets/svgs/Home/pork.svg";
import Bbq from "../assets/svgs/Home/bbq.svg";
import Bread from "../assets/svgs/Home/bread.svg";
import Burger from "../assets/svgs/Home/burger.svg";
import Ice from "../assets/svgs/Home/ice-cream.svg";
import Dessert from "../assets/svgs/Home/dessert.svg";
import Pizza from "../assets/svgs/Home/pizza.svg";
import Drink from "../assets/svgs/Home/drink.svg";
import Sandwich from "../assets/svgs/Home/sandwich.svg";

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
    img: Dessert,
    name: "desserts",
  },
  {
    img: Drink,
    name: "drinks",
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

export { homeBanners, homeStep, homeCategory, homeReviews, homeProducts };
