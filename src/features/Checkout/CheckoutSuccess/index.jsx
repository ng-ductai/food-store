import React from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shopApi from "../../../api/shopApi";
import { Container } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { setIsAtCheckout } from "../../../app/reducers/headerSlice";
import { setShopProducts } from "../../../app/reducers/shopSlice";
import { moveToTop } from "../../../components/ScrollButton";

const CheckoutSuccess = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const moveToShop = () => {
    const checkoutAction = setIsAtCheckout(false);

    const getProducts = async (type, query) => {
      const response = await shopApi.getAll(type, query);
      const shopAction = setShopProducts(response);
      dispatch(shopAction);
    };

    dispatch(checkoutAction);
    history.push("/shop/our-foods?_limit=16");
    getProducts("our-foods", { _limit: 16 });
    moveToTop()
  };

  return (
    <Container>
      <div class="checkout-success">
        <div class="checkout-success__container">
          <div class="checkout-success__background">
            <svg
              viewBox="0 0 65 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 25L27.3077 44L58.5 7"
                stroke="white"
                stroke-width="13"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="checkout-success__shadow"></div>
        </div>
        <h2 className="checkout-success__title">
          Your purchase was successfull
        </h2>
        <div onClick={moveToShop} className="checkout-success__btn">
          <ChevronLeftIcon />
          <span>Return to shop</span>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutSuccess;
