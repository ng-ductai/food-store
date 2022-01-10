import React from "react";
import "./CheckoutAside.scss";
import { useSelector } from "react-redux";
import usePrice from "../../../hooks/usePrice";
import PrimaryButton from "../../../components/PrimaryButton";
import Empty from "../../../components/Empty";
import EmptyImg from "../../../assets/svgs/Checkout/empty-cart.svg";

const CheckoutAside = () => {
  const cartProducts = useSelector((state) => state.cart);
  const { totalPrice, discount } = usePrice();

  return (
    <aside>
      {cartProducts.length > 0 ? (
        <ul className="checkout-products">
          {cartProducts.map(({ id, name, img, qnt, country, price }) => (
            <li key={id} className="checkout-product">
              <div className="checkout-product__img">
                <img src={img} alt="Checkout" />
                <span className="checkout-product__qnt">{qnt}</span>
              </div>
              <div className="checkout-product__content">
                <h3 className="checkout-product__name">{name}</h3>
                <span className="checkout-product__country">{country}</span>
              </div>
              <span className="checkout-product__price">${price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <Empty src={EmptyImg} type="checkout" />
      )}

      <div className="checkout-discount">
        <input
          type="text"
          className="checkout-discount__input"
          placeholder="Enter the discount code"
        />
        <PrimaryButton subClass="red">Apply</PrimaryButton>
      </div>

      <div className="checkout-detail">
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Discount</span>
          <span className="checkout-detail__content">${discount}</span>
        </div>
        <div className="checkout-detail__row">
          <span className="checkout-detail__label">Shipping Cost</span>
          <span className="checkout-detail__content">Free</span>
        </div>
      </div>

      <div className="checkout-total">
        <span className="checkout-total__label">Total</span>
        <span className="checkout-total__price">${totalPrice}</span>
      </div>
    </aside>
  );
};

export default CheckoutAside;
