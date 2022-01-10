import React from "react";
import "./CheckoutProgress.scss";
import { PeopleAlt, ListAlt, DoneOutlineOutlined } from "@material-ui/icons";

const CheckoutProgress = (props) => {
  const { isCheckoutSuccess } = props;

  return (
    <div className="checkout-progress">
      <div className="checkout-progress__node active">
        <div className="checkout-progress__icon">
          <PeopleAlt />
        </div>
        <span className="checkout-progress__description">Login</span>
      </div>
      <span className="checkout-progress__line"></span>
      <div className="checkout-progress__node">
        <div className="checkout-progress__icon">
          <ListAlt />
        </div>
        <span className="checkout-progress__description">Confirm</span>
      </div>
      <span
        className={
          isCheckoutSuccess
            ? "checkout-progress__line active"
            : "checkout-progress__line"
        }
      ></span>
      <div className="checkout-progress__node">
        <div
          className={
            isCheckoutSuccess
              ? "checkout-progress__icon active"
              : "checkout-progress__icon"
          }
        >
          <DoneOutlineOutlined />
        </div>
        <span className="checkout-progress__description">Success</span>
      </div>
    </div>
  );
}

export default CheckoutProgress;
