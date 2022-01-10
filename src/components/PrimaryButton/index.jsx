import React, { useContext } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ApiContext } from "../../contexts/ApiContext";
import {
  setIsAtCheckout,
  setIsShowCart,
} from "../../app/reducers/headerSlice";
import { setIsShowWishlist } from "../../app/reducers/wishlistSlice";
import { Button } from "@material-ui/core";

const PrimaryButton = (props) => {
  const { page, subClass, children } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { getProducts } = useContext(ApiContext);

  const handleMovePage = () => {
    const cartAction = setIsShowCart(false);
    const wishlistAction = setIsShowWishlist(false);
    
    dispatch(cartAction);
    dispatch(wishlistAction);

    const moveToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };  

    if (page === "shop") {
      const action = setIsAtCheckout(false);
      history.push("/shop/best-foods");
      getProducts("best-foods");
      dispatch(action);
      moveToTop()

    } else if (page === "checkout") {
      const action = setIsAtCheckout(true);
      history.push("/checkout");
      dispatch(action);
      moveToTop()

    } else if (page === "login") {
      const action = setIsAtCheckout(false);
      history.push("/login");
      dispatch(action);
      moveToTop()
    }
  };

  return (
    <Button
      onClick={handleMovePage}
      className={`primary-btn ${subClass || ""}`}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
