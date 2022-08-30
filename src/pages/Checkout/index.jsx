import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsAtCheckout } from "../../reducers/headerSlice";
import Banner from "./Banner";
import Content from "./Content";

const Checkout = () => {
  const dispatch = useDispatch();

  // reset header when user refresh page
  useEffect(() => {
    const action = setIsAtCheckout(true);
    dispatch(action);
  }, [dispatch]);

  return (
    <div className="checkout">
      <Banner />
      <Content />
    </div>
  );
};

export default Checkout;
