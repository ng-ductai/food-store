import React from "react";
import "./CartItem.scss";
import { Button } from "@material-ui/core";
import { DeleteOutline, Add, Remove } from "@material-ui/icons";
import LoadImage from "../../LoadImage";

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
    <div id={id} className="cart-item">
      <div className="cart-item__img">
        <img src={LoadImage(img)} alt="Cart product" />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__price">${price}</div>
        <div className="cart-item__handle">
          <Button onClick={() => onHandleAddToFirestore("decrease")}>
            <Remove />
          </Button>
          <span className="cart-item__qnt">{qnt}</span>
          <Button onClick={() => onHandleAddToFirestore("increase")}>
            <Add />
          </Button>
        </div>
      </div>

      <Button
        onClick={() => onHandleRemoveFromFirestore()}
        className="cart-item__remove"
      >
        <DeleteOutline />
      </Button>
    </div>
  );
}

export default CartItem;
