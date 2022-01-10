import React from "react";
import "./HomeProduct.scss";
import LoadImage from "../../../components/LoadImage";

const HomeProduct = (props) => {
  const { img, name, description, price } = props;

  return (
    <div className="home-product">
      <div className="home-product__wrapper">
        <img
          className="home-product__img"
          src={LoadImage(img)}
          alt="Home product"
        />
        <button className="btn">
          <span>Best Deal</span>
        </button>
      </div>
      <div className="home-product__content">
        <h3 className="home-product__name">{name}</h3>
        <p className="home-product__description">{description}</p>
        <div className="home-product__price">${price}</div>
      </div>
    </div>
  );
}

export default HomeProduct;
