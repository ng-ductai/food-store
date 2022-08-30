import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { db } from "../../configs/firebaseConfig";
import CartItems from "./CartItems";
import CartInfo from "./CartInfo";
import Empty from "../Empty"
import EmptyImg from "../../assets/svgs/Common/empty.svg";
import { setIsShowCart } from "../../reducers/headerSlice";
import { addToCart } from "../../reducers/cartSlice";
import { CloseOutlined } from "@material-ui/icons";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { isShowCart } = useSelector((state) => state.header);
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    const action = setIsShowCart(false);
    dispatch(action);
  };

  // get data from firestore
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.data()) {
            const action = addToCart(doc.data().cart);
            dispatch(action);
          }
        });
    }
  }, [user, dispatch]);

  return (
    <div className={isShowCart ? "cart active" : "cart"}>
      <div onClick={closeCart} className="cart__overlay"></div>
      <div className="cart__container">
        <div className="cart__heading">
          <h2 className="cart__title">Shopping Cart</h2>
          <CloseOutlined
            onClick={closeCart}
            className={!isShowCart ? "cart__close active" : "cart__close"}
          />
        </div>

        {cartProducts.length <= 0 && (
          <Empty src={EmptyImg} type="shop" />
        )}
        <CartItems />
        <CartInfo />
      </div>
    </div>
  );
};

export default Cart;
