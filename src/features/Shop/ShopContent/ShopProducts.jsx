import React, { useContext, useEffect, useState } from "react";
import "./ShopProducts.scss";
import { useDispatch, useSelector } from "react-redux";
import PRIMARY_RED_COLOR from "../../../constants/colors";
import { ApiContext } from "../../../contexts/ApiContext";
import { SHOP_PRODUCTS_VIEW } from "../../../constants/localStorage";
import { TABLET_BREAKPOINT } from "../../../constants/breakpoints";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShopProduct from "../../../components/ShopProduct";
import Dialog from "../../../components/Dialog";
import ShopEmpty from "./ShopEmpty";
import { setShopProductsView } from "../../../app/reducers/shopSlice";

const ShopProducts = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useContext(ApiContext);
  const { shopProducts, shopProductsView } = useSelector((state) => state.shop);

  const openDialog = () => {
    setIsShowDialog(true);
  };

  // get shop view type when user refresh page
  useEffect(() => {
    const view = localStorage.getItem(SHOP_PRODUCTS_VIEW);

    if (window.innerWidth > TABLET_BREAKPOINT) {
      const action = setShopProductsView(view);
      dispatch(action);
      
    } else {
      const action = setShopProductsView("grid");
      dispatch(action);
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="spinner">
        <CircularProgress thickness={5} style={{ color: PRIMARY_RED_COLOR }} />
      </div>
    );
  }

  return (
    <>
      {shopProducts.length <= 0 && <ShopEmpty />}

      <div
        className={
          shopProductsView === "list"
            ? "shop-products display-flex"
            : "shop-products"
        }
      >
        {shopProducts &&
          shopProducts.map((item) => (
            <ShopProduct openDialog={openDialog} key={item.id} {...item} />
          ))}
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
}

export default ShopProducts;
