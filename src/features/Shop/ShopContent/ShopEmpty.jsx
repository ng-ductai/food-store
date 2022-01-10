import React from "react";
import "./ShopEmpty.scss";
import LoadedImage from "../../../components/LoadImage";
import EmptyShopImg from "../../../assets/svgs/Shop/empty-shop.svg";

const ShopEmpty = () => {
  return (
    <div className="shop-empty">
      <img src={LoadedImage(EmptyShopImg)} alt="" />
      <h2 className="shop-empty__title">
        Sorry! No result is found...
      </h2>
    </div>
  );
};

export default ShopEmpty;
