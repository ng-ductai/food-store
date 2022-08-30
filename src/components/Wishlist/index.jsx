import React, { useContext, useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../contexts/AuthContext";
import { db } from "../../configs/firebaseConfig";
import { addToWishlist, setIsShowWishlist } from "../../reducers/wishlistSlice";
import useFirestoreProducts from "../../hooks/useFirestoreProducts";
import { Button } from "@material-ui/core";
import {
  DeleteOutline,
  CloseOutlined,
  PlaylistAddOutlined,
} from "@material-ui/icons";
import Empty from "../Empty";
import EmptyImg from "../../assets/svgs/Common/empty.svg";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const { wishlistProducts, isShowWishlist } = useSelector(
    (state) => state.wishlist
  );

  const { removeFromFirestore } = useFirestoreProducts();

  // get data from firestore
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.data()) {
            const action = addToWishlist(doc.data().wishlist);
            dispatch(action);
          }
        });
    }
  }, [user, dispatch]);

  const handleRemoveFromFirestore = (product) => {
    removeFromFirestore(user.uid, {
      type: "wishlist",
      productInfo: product,
    });
  };

  const closeWishlist = () => {
    const action = setIsShowWishlist(false);
    dispatch(action);
  };

  return (
    <div className={isShowWishlist ? "wishlist active" : "wishlist"}>
      <div className="wishlist__top">
        <div className="wishlist__shop">
          <PlaylistAddOutlined />
          <span>Your wishlist</span>
        </div>

        <Button onClick={closeWishlist}>
          <CloseOutlined />
        </Button>
      </div>

      <div className="wishlist__items">
        {wishlistProducts.length <= 0 && (
          <Empty src={EmptyImg} type="wishlist" />
        )}
        {wishlistProducts.map(
          ({ id, name, img, dsc, price, rate, country }) => (
            <div key={id} className="wishlist__item">
              <div className="wishlist__img">
                <img src={img} alt="Wishlist" />
              </div>
              <div className="wishlist__content">
                <span className="wishlist__name">{name}</span>
                <span className="wishlist__price">${price}</span>
              </div>

              <Button
                onClick={() =>
                  handleRemoveFromFirestore({
                    id,
                    name,
                    img,
                    dsc,
                    price,
                    rate,
                    country,
                  })
                }
                className="wishlist__remove"
              >
                <DeleteOutline />
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Wishlist;
