import React, { useContext, useState } from "react";
import "./DetailContent.scss";
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

const DetailContent = (props) => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const {
    product,
    paramsName,
    dataOptions,
    handleFuncs,
    selectedRadio,
    price,
    qnt,
    handleAddToFirestore,
  } = props;

  const { name, country, dsc, rate } = product ? product : "";
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
      <div className="detail-content">
        <h2 className="detail-content__title">
          {name ? name : contentLoader()}
        </h2>

        <div className="detail-content__rate">
          <div className="detail-content__stars">
            <Star />
            <Star />
            <Star />
            <Star />
            {rate === 5 ? <Star /> : <StarBorder />}
          </div>
          <div className="detail-content__reviews">
            <span className="detail-content__reviews-qnt">
              {comments.length}
            </span>
            <span> Customer Reviews</span>
          </div>
        </div>

        <div className="detail-content__price">
          <strong>${price}</strong>
        </div>

        <div className="detail-content__tags">
          <div className="detail-content__tag">
            <span className="detail-content__tag-label">Category:</span>
            <span className="detail-content__tag-detail category">
              {paramsName}
            </span>
          </div>
          <div className="detail-content__tag">
            <span className="detail-content__tag-label">Country:</span>
            <span className="detail-content__tag-detail">{country}</span>
          </div>
        </div>

        <div className="detail-content__description">
          <p className="detail-content__description-label">Description:</p>
          <p className="detail-content__description-detail">{dsc}</p>
        </div>

        <form className="detail-content__form">
          <div className="detail-content__form-title">Choose your options</div>
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

        <div className="detail-content__btns">
          <div className="detail-content__btn-handle ">
            <Button
              onClick={handleDecreaseQnt}
              className="detail-content__btn-inc btn-circle"
            >
              <Remove />
            </Button>

            <span className="detail-content__btn-qnt">{qnt}</span>

            <Button
              onClick={handleIncreaseQnt}
              className="detail-content__btn-dec btn-circle"
            >
              <Add />
            </Button>
          </div>

          <div
            onClick={() => onHandleAddToFirestore("success", product)}
            className="detail-content__add"
          >
            <PrimaryButton subClass="red">
              <AddShoppingCartOutlined />
              <span>Add to cart</span>
            </PrimaryButton>
          </div>

          <Button
            onClick={() => onHandleAddToFirestore("wishlist", product)}
            className="detail-content__btn-like btn-circle"
          >
            <FavoriteBorder />
          </Button>
        </div>

        <div className="detail-content__commits">
          <div className="detail-content__commit">
            <LocalShippingOutlined />
            <span>Free global shipping on all orders</span>
          </div>
          <div className="detail-content__commit">
            <EventAvailableOutlined />
            <span>2 hours easy returns if you change your mind</span>
          </div>
          <div className="detail-content__commit">
            <LocalOfferOutlined />
            <span>Order before the afternoon to be shipped on the same day</span>
          </div>
        </div>
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
};

export default DetailContent;
