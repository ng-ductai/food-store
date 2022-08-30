import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import usePrice from "../../../../hooks/usePrice";
import PrimaryButton from "../../../../components/PrimaryButton";
import Empty from "../../../../components/Empty";
import EmptyImg from "../../../../assets/svgs/Checkout/empty-cart.svg";

const CheckoutAside = () => {
  const cartProducts = useSelector((state) => state.cart);
  const { totalPrice, discount } = usePrice();

  return (
    <aside className="aside">
      {cartProducts.length > 0 ? (
        <ul className="aside__top">
          {cartProducts.map(({ id, name, img, qnt, country, price }) => (
            <li key={id} className="aside__top-list">
              <div className="img">
                <img src={img} alt="checkout" />
                <span className="qnt">{qnt}</span>
              </div>
              <div className="content">
                <span className="content-name">{name}</span>
              </div>
              <div className="price">
                <span>${price}</span>

                <span>${price*qnt}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Empty src={EmptyImg} type="checkout" />
      )}

      <div className="aside__discount">
        <input
          type="text"
          className="aside__discount-input"
          placeholder="Enter the discount code"
        />
        <PrimaryButton subClass="red">Apply</PrimaryButton>
      </div>

      <div className="aside__detail">
        <div className="aside__detail-row">
          <span className="aside__detail-label">Discount</span>
          <span className="aside__detail-content">${discount}</span>
        </div>
        <div className="aside__detail-row">
          <span className="aside__detail-label">Delivery fee</span>
          <span className="aside__detail-content">Free</span>
        </div>
      </div>

      <div className="aside__total">
        <span className="aside__total-label">Total</span>
        <span className="aside__total-price">${totalPrice}</span>
      </div>
    </aside>
  );
};

export default CheckoutAside;
