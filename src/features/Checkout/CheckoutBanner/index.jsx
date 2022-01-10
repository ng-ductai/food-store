import React from "react";
import "./styles.scss";
import {ChevronRightOutlined} from '@material-ui/icons'
import CommonBanner from "../../../assets/images/Common/banner.jpg";
import { Link } from "react-router-dom";

const CheckoutBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${CommonBanner})` }}
      className="checkout-banner"
    >
      <h2 className="checkout-banner__title">Checkout</h2>
      <div className="checkout-banner__paths">
        <Link to='/home' className="checkout-banner__path">Home</Link>
        <ChevronRightOutlined />
        <Link to='/shop/best-foods' className="checkout-banner__path">Shop</Link>
         <ChevronRightOutlined />
        <span className="checkout-banner__path active">Checkout</span>
      </div>
    </div>
  );
}

export default CheckoutBanner;
