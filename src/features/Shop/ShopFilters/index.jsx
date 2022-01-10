import React, { useContext } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../../contexts/ApiContext";
import { PrevFilterContext } from "../../../contexts/PrevFilterContext";
import Checkbox from "../../../components/Checkbox";
import { Star, StarBorder } from "@material-ui/icons";
import {
  Beef,
  Bread,
  Burger,
  Dessert,
  Drink,
  Pizza,
  Sandwich,
} from "../../../utils/categories";

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

const priceOptions = [
  { content: "Under $50", range: { price_lte: 50 } },
  { content: "$50 to $100", range: { price_gte: 50, price_lte: 100 } },
  { content: "$100 to $200", range: { price_gte: 100, price_lte: 200 } },
  { content: "Above $200", range: { price_gte: 200 } },
];

const ShopFilters = () => {
  const { name } = useParams();
  const { handlePrevious } = useContext(PrevFilterContext);
  const { selectedRadio, nameActive } = handlePrevious();
  const { getProducts } = useContext(ApiContext);

  const onFilterByName = (params) => {
    const { prevName, setPrevName, setSelectedRadio, setNameActive } =
      handlePrevious("name", params);

    if (params !== prevName) {
      getProducts(params);
      setSelectedRadio(null);
    }

    setNameActive(params);
    setPrevName(params);
  };

  const onFilterByPrice = (params) => {
    const { prevPrice, setPrevPrice } = handlePrevious("price", params);

    if (prevPrice !== params) {
      getProducts(name, params);
    }
    setPrevPrice(params);
  };

  const handleOptionChange = (e) => {
    const { setSelectedRadio } = handlePrevious();
    setSelectedRadio(e.target.value);
  };

  const onFilterByRate = (params) => {
    const stringParams = JSON.stringify(params); // covert to string to compare
    const { prevRate, setPrevRate } = handlePrevious("rate", params);

    if (prevRate !== stringParams) {
      getProducts(name, params);
    }
    setPrevRate(stringParams);
  };

  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        {typeOptions.map(({ img, name, type }) => (
          <li
            key={name}
            onClick={() => onFilterByName(type)}
            className={
              type === nameActive
                ? "shop-filters__item active"
                : "shop-filters__item"
            }
          >
            <img src={img} alt="Shop icons" />
            <span className="shop-filters__item-name">{name}</span>
          </li>
        ))}
      </ul>

      <h2 className="shop-filters__title">Price</h2>
      <form className="shop-filters__form">
        {priceOptions.map(({ content, range }) => (
          <Checkbox
            key={content}
            handleOptionClick={() => onFilterByPrice(range)}
            checked={selectedRadio === content}
            handleOptionChange={handleOptionChange}
            value={content}
            content={content}
          />
        ))}
      </form>

      <h2 className="shop-filters__title">Rate</h2>
      <div
        onClick={() => onFilterByRate({ rate_like: 5 })}
        className="shop-filters__stars"
      >
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <span>& up</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 4 })}
        className="shop-filters__stars"
      >
        <Star />
        <Star />
        <Star />
        <Star />
        <StarBorder />
        <span>& up</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 3 })}
        className="shop-filters__stars"
      >
        <Star />
        <Star />
        <Star />
        <StarBorder />
        <StarBorder />
        <span>& up</span>
      </div>
    </div>
  );
};

export default ShopFilters;
