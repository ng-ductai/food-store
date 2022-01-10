import React, { useContext } from "react";
import "./styles.scss";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import useFirestoreProducts from "../../hooks/useFirestoreProducts";
// lazy load img 
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Star,
  ShoppingCartOutlined,
  FavoriteBorder,
  Room,
} from "@material-ui/icons";
import ToastMessage from "../../components/ToastMessage";

const ShopProduct = (props) => {
  const { id, name, img, dsc, price, rate, country, openDialog, moveToTop } = props;
  const params = useParams();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { addToFirestore } = useFirestoreProducts();

  const handleAddToFirestore = (type) => {
    const productInfo = { id, name, img, dsc, price, rate, country };

    if (!user) {
      openDialog();
      return;
    }

    addToFirestore(user.uid, {
      type,
      productInfo,
      action: "increase",
    });
    ToastMessage(type);
  };

  const handleToDetail = (id) => {
    history.push(`/shop/${params.name}/${id}`);
    moveToTop();
  };

  return (
    <div id={id} className="shop-product">
      <div
        onClick={() => handleToDetail(id)}
        className="shop-product__img-wrapper"
      >
        <LazyLoadImage
          effect="blur"
          src={img}
          className="shop-product__img"
          alt={name}
          width="100%"
          height="100%"
        />
        <div className="shop-product__rate">
          <Star />
          <span>{rate}</span>
        </div>
      </div>

      <div onClick={() => handleToDetail(id)} className="shop-product__content">
        <div className="shop-product__name">{name}</div>
        <div className="shop-product__row">
          <div className="shop-product__location">
            <Room />
            <span>{country}</span>
          </div>
          <div className="shop-product__price">${price}</div>
        </div>
      </div>

      <div className="shop-product__btns">
        <div
          onClick={() => handleAddToFirestore("wishlist")}
          className="shop-product__btn"
        >
          <FavoriteBorder />
        </div>
        <div
          onClick={() => handleAddToFirestore("success")}
          className="shop-product__btn"
        >
          <ShoppingCartOutlined />
        </div>
      </div>
      <div className="shop-product__label">Favourite</div>
    </div>
  );
}

export default ShopProduct;
