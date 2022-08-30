import React from "react";
import "./index.scss";
import { Button } from "@material-ui/core";
import { DeleteOutline, Add, Remove } from "@material-ui/icons";
import LoadImage from "../../../LoadImage";

const CartItem = (props) => {
  const { product, handleAddToFirestore, handleRemoveFromFirestore } = props;
  const { id, name, img, price, qnt } = product;

  const onHandleAddToFirestore = (type) => {
    handleAddToFirestore(product, type);
  };

  const onHandleRemoveFromFirestore = () => {
    handleRemoveFromFirestore(product);
  };

  return (
    <div id={id} className="cartItem">
      <div className="cartItem__img">
        <img src={LoadImage(img)} alt="product" />
      </div>

      <div className="cartItem__content">
        <div className="cartItem__content-name">{name}</div>
        <div className="cartItem__content-price">${price}</div>
        <div className="cartItem__content-handle">
          <Button onClick={() => onHandleAddToFirestore("decrease")}>
            <Remove />
          </Button>
          <span className="cartItem__qnt">{qnt}</span>
          <Button onClick={() => onHandleAddToFirestore("increase")}>
            <Add />
          </Button>
        </div>
      </div>

      <div className="cartItem__right">
        <div className="cartItem__right-total">${price*qnt}</div>
        <Button
          onClick={() => onHandleRemoveFromFirestore()}
          className="cartItem__remove"
        >
          <DeleteOutline />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
