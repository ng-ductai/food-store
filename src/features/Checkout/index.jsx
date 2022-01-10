import React, {useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAtCheckout } from "../../app/reducers/headerSlice";
import CheckoutBanner from "./CheckoutBanner";
import CheckoutContent from "./CheckoutContent";

const Checkout = () => {
  const dispatch = useDispatch();

  // reset header when user refresh page
  useEffect(() => {
    const action = setIsAtCheckout(true);
    dispatch(action);
  }, [dispatch]);

  return (
    <div className="checkout">
      <CheckoutBanner />
      <CheckoutContent /> 
    </div>
  );
}

export default Checkout;
