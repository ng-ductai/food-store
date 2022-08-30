import React, { useContext, useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import PRIMARY_RED_COLOR from "../../../../constants";
import { ApiContext } from "../../../../contexts/ApiContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Product from "../../../../components/Product";
import Dialog from "../../../../components/Dialog";
import Empty from "../Empty";

const Products = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const { isLoading } = useContext(ApiContext);
  const { shopProducts } = useSelector((state) => state.shop);

  const openDialog = () => {
    setIsShowDialog(true);
  };

  if (isLoading) {
    return (
      <div className="spinner">
        <CircularProgress thickness={5} style={{ color: PRIMARY_RED_COLOR }} />
      </div>
    );
  }

  return (
    <>
      {shopProducts.length <= 0 && <Empty />}

      <div className="products">
        {shopProducts &&
          shopProducts.map((item) => (
            <Product openDialog={openDialog} key={item.id} {...item} />
          ))}
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
};

export default Products;
