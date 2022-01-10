import React, { useState } from "react";
import "./styles.scss";
import CheckoutProgress from "./CheckoutProgress";
import CheckoutForm from "./CheckoutForm";
import CheckoutAside from "./CheckoutAside";
import CheckoutSuccess from "../CheckoutSuccess";

const CheckoutContent = () => {
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  if (isPurchased) return <CheckoutSuccess />;

  return (
    <div className="checkout-content">
      <div className="checkout-content__left">
        <CheckoutAside />
      </div>

      <div className="checkout-content__right">
        <CheckoutProgress isCheckoutSuccess={isCheckoutSuccess} />
        <CheckoutForm
          setIsCheckoutSuccess={setIsCheckoutSuccess}
          setIsPurchased={setIsPurchased}
        />
      </div>
    </div>
  );
};

export default CheckoutContent;
