import React from "react";
import "./styles.scss";
import {ChevronRightOutlined} from '@material-ui/icons'
import CommonBanner from "../../../assets/images/Common/banner.jpg";
import { Link } from "react-router-dom";

const CheckoutBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${CommonBanner})` }}
      className="banner"
    >
      <h2 className="banner__title">Checkout</h2>
      <div className="banner__paths">
        <Link to='/home' className="banner__paths-item">Home</Link>
        <ChevronRightOutlined />
        <Link to='/shop/our-foods' className="banner__paths-item">Shop</Link>
         <ChevronRightOutlined />
        <span className="banner__paths-item active">Checkout</span>
      </div>
    </div>
  );
}

export default CheckoutBanner;
