import React, { useContext } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../../contexts/ApiContext";
import { PrevFilterContext } from "../../../contexts/PrevFilterContext";
import Checkbox from "../../../components/Checkbox";
import { Star, StarBorder } from "@material-ui/icons";
import { priceOptions, typeOptions } from "../../../constants";

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
    const stringParams = JSON.stringify(params);
    const { prevRate, setPrevRate } = handlePrevious("rate", params);

    if (prevRate !== stringParams) {
      getProducts(name, params);
    }
    setPrevRate(stringParams);
  };

  return (
    <div className="filters">
      <h2 className="filters__title">Popular</h2>
      <ul className="filters__list">
        {typeOptions.map(({ img, name, type }) => (
          <li
            key={name}
            onClick={() => onFilterByName(type)}
            className={
              type === nameActive ? "filters__item active" : "filters__item"
            }
          >
            <img src={img} alt="icons" />
            <span className="filters__item-name">{name}</span>
          </li>
        ))}
      </ul>

      <h2 className="filters__title">Price</h2>
      <form className="filters__form">
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

      <h2 className="filters__title">Rate</h2>
      <div
        onClick={() => onFilterByRate({ rate_like: 5 })}
        className="filters__stars"
      >
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <span>From 5 stars</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 4 })}
        className="filters__stars"
      >
        <Star />
        <Star />
        <Star />
        <Star />
        <StarBorder />
        <span>From 4 stars</span>
      </div>
      <div
        onClick={() => onFilterByRate({ rate_like: 3 })}
        className="filters__stars"
      >
        <Star />
        <Star />
        <Star />
        <StarBorder />
        <StarBorder />
        <span>From 3 stars</span>
      </div>
    </div>
  );
};

export default ShopFilters;
