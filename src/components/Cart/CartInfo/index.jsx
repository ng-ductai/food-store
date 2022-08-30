import React, { useState } from "react";
import "./index.scss";
import usePrice from "../../../hooks/usePrice";
import { ShoppingCart, StoreMallDirectory } from "@material-ui/icons";
import PrimaryButton from "../../PrimaryButton";

const CartInfo = () => {
  const [isActive, setIsActive] = useState(false);
  const { totalPrice, discount } = usePrice();

  const toggleDropUp = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="cartInfo">
      <div onClick={toggleDropUp} className="cartInfo__dropup" />

      <div
        className={isActive ? "cartInfo__detail active" : "cartInfo__detail"}
      >
        <h3 className="cartInfo__detail-title">Order Info</h3>
        <div className="cartInfo__detail-row">
          <span className="label">Discount</span>
          <span className="content">${discount}</span>
        </div>
        <div className="cartInfo__detail-row">
          <span className="label">Delivery fee</span>
          <span className="content">Free</span>
        </div>
        <div className="cartInfo__detail-row">
          <span className="label">Voucher</span>
          <span className="content">None</span>
        </div>
      </div>

      <div className="cartInfo__total">
        <span className="cartInfo__total-txt">Total</span>
        <span className="cartInfo__total-price">${totalPrice}</span>
      </div>

      <div className="cartInfo__btns">
        <PrimaryButton
          page="checkout"
          subClass="red cartInfo__btn"
          className="cartInfo__btn cartInfo__btn--checkout"
        >
          <ShoppingCart />
          <span>Checkout</span>
        </PrimaryButton>
        <PrimaryButton page="shop" subClass="cartInfo__btn">
          <StoreMallDirectory />
          <span>Buy more</span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CartInfo;
