import React, { useContext } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ApiContext } from "../../contexts/ApiContext";
import { setIsAtCheckout, setIsShowCart } from "../../reducers/headerSlice";
import { setIsShowWishlist } from "../../reducers/wishlistSlice";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { moveToTop } from "../ScrollButton";

const useStyles = makeStyles({
  root: {
    border: 0,
  },
});

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

    if (page === "shop") {
      const action = setIsAtCheckout(false);
      history.push("/shop/best-foods");
      getProducts("best-foods");
      dispatch(action);
      moveToTop();
    } else if (page === "checkout") {
      const action = setIsAtCheckout(true);
      history.push("/checkout");
      dispatch(action);
      moveToTop();
    } else if (page === "login") {
      const action = setIsAtCheckout(false);
      history.push("/login");
      dispatch(action);
      moveToTop();
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        color="primary"
        variant="contained"
        onClick={handleMovePage}
        className={`primary-btn ${subClass || ""}`}
      >
        {children}
      </Button>
    </div>
  );
};

export default PrimaryButton;
