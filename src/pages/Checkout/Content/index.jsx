import React, { useState } from "react";
import "./styles.scss";
import CheckoutProgress from "./Progress";
import CheckoutForm from "./Form";
import CheckoutAside from "./Aside";
import CheckoutSuccess from "../Success";

const CheckoutContent = () => {
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  if (isPurchased) return <CheckoutSuccess />;

  return (
    <div className="content">
      <div className="content__left">
        <CheckoutAside />
      </div>

      <div className="content__right">
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
