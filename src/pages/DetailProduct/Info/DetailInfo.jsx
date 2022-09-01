import React, { useContext, useState } from "react";
import "./index.scss";
import useFirestoreComments from "../../../hooks/useFirestoreComments";
import { AuthContext } from "../../../contexts/AuthContext";
// react content loader
import ContentLoader from "react-content-loader";
import { Button } from "@material-ui/core";
import {
  Star,
  Add,
  Remove,
  FavoriteBorder,
  LocalShippingOutlined,
  EventAvailableOutlined,
  LocalOfferOutlined,
  AddShoppingCartOutlined,
  StarBorder,
} from "@material-ui/icons";
import PrimaryButton from "../../../components/PrimaryButton";
import Checkbox from "../../../components/Checkbox";
import Dialog from "../../../components/Dialog";
import ToastMessage from "../../../components/ToastMessage";

const DetailInfo = (props) => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const {
    product,
    paramsName,
    dataOptions,
    handleFuncs,
    selectedRadio,
    qnt,
    handleAddToFirestore,
  } = props;

  const { name, country, dsc, rate, price } = product ? product : "";
  const { handleOptionChange, handleIncreaseQnt, handleDecreaseQnt } =
    handleFuncs;

  const { comments } = useFirestoreComments();
  const { user } = useContext(AuthContext);

  const onHandleOptionChange = (e, percentOff) => {
    handleOptionChange(e, percentOff);
  };

  const onHandleAddToFirestore = (type, product) => {
    if (!user) {
      setIsShowDialog(true);
      return;
    }

    handleAddToFirestore(type, product);
    ToastMessage(type);
  };

  const contentLoader = () => (
    <ContentLoader>
      <rect x="0" y="0" width="100%" height="35" />
    </ContentLoader>
  );

  return (
    <>
      <div className="info">
        <h2 className="info__title">{name ? name : contentLoader()}</h2>

        <div className="info__rate">
          <div className="info__rate-stars">
            <Star />
            <Star />
            <Star />
            <Star />
            {rate === 5 ? <Star /> : <StarBorder />}
          </div>
          <div className="info__rate-reviews">
            <span>{comments.length}</span>
            <span> Customer Reviews</span>
          </div>
        </div>

        <div className="info__price">
          <strong>${price}</strong>
        </div>

        <div className="info__tags">
          <div className="tag">
            <span className="tag-label">Category:</span>
            <span className="tag-detail category">{paramsName}</span>
          </div>
          <div className="tag">
            <span className="tag-label">Country:</span>
            <span className="tag-detail">{country}</span>
          </div>
        </div>

        <div className="info__description">
          <p className="info__description-label">Description:</p>
          <p className="info__description-detail">{dsc}</p>
        </div>

        <form className="info__form">
          <div className="info__form-title">Choose your options</div>
          {dataOptions.map(({ content, percentOff }) => (
            <Checkbox
              key={content}
              checked={selectedRadio === content}
              content={content}
              value={content}
              handleOptionChange={(e) => onHandleOptionChange(e, percentOff)}
            />
          ))}
        </form>

        <div className="info__btn">
          <div className="info__btn-handle ">
            <Button
              onClick={handleDecreaseQnt}
              className="info__btn-inc btn-circle"
            >
              <Remove />
            </Button>

            <span className="info__btn-qnt">{qnt}</span>

            <Button
              onClick={handleIncreaseQnt}
              className="info__btn-dec btn-circle"
            >
              <Add />
            </Button>
          </div>

          <div
            onClick={() => onHandleAddToFirestore("success", product)}
            className="info__add"
          >
            <PrimaryButton subClass="red">
              <AddShoppingCartOutlined />
              <span>Add to cart</span>
            </PrimaryButton>
          </div>

          <Button
            onClick={() => onHandleAddToFirestore("wishlist", product)}
            className="info__btn-like btn-circle"
          >
            <FavoriteBorder />
          </Button>
        </div>

        <div className="info__policy">
          <div className="info__policy-item">
            <LocalShippingOutlined />
            <span>Free global shipping on all orders</span>
          </div>
          <div className="info__policy-item">
            <EventAvailableOutlined />
            <span>2 hours easy returns if you change your mind</span>
          </div>
          <div className="info__policy-item">
            <LocalOfferOutlined />
            <span>
              Order before the afternoon to be shipped on the same day
            </span>
          </div>
        </div>
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
};

export default DetailInfo;
