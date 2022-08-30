import React from "react";
import "./index.scss";
import LoadImage from "../../../../components/LoadImage";

const HomeProduct = (props) => {
  const { img, name, description, price } = props;

  return (
    <div className="homeProduct">
      <div className="homeProduct__wrapper">
        <img src={LoadImage(img)} alt="product" />
        <button className="btn">
          <span>Best Deal</span>
        </button>
      </div>
      <div className="homeProduct__content">
        <h3 className="homeProduct__content-name">{name}</h3>
        <p className="homeProduct__content-description">{description}</p>
        <div className="homeProduct__content-price">${price}</div>
      </div>
    </div>
  );
};

export default HomeProduct;
