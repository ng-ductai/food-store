import React from "react";
import "./index.scss";
import LoadedImage from "../../../../components/LoadImage";
import EmptyShopImg from "../../../../assets/svgs/Shop/empty-shop.svg";

const Empty = () => {
  return (
    <div className="empty">
      <img src={LoadedImage(EmptyShopImg)} alt="img" />
      <h2 className="empty__title">Sorry! No result is found...</h2>
    </div>
  );
};

export default Empty;
