import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import shopApi from "../../../api/shopApi";
import ShopProduct from "../../../components/ShopProduct";
import Dialog from "../../../components/Dialog";
import { setDetailProducts } from "../../../app/reducers/detailSlice";
import { moveToTop } from "../../../components/ScrollButton";

const DetailProducts = () => {
  const { name, id } = useParams();
  const [products, setProducts] = useState([]);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.detail);

  // get or reset products when id is changed
  useEffect(() => {
    const getProducts = async (type) => {
      const response = await shopApi.getAll(type);
      const action = setDetailProducts(response);
      dispatch(action);
    };

    getProducts(name);
  }, [name, dispatch]);

  // get products from store to render
  useEffect(() => {
    if (productData.length <= 0) return;
    
    const products = productData.filter((product) => product.id !== id);
    const randomProducts = [];

    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * products.length);
      randomProducts.push(products[num]);
      products.splice(num, 1);
    }

    setProducts(randomProducts);
  }, [productData, id]);

  const toggleDialog = () => {
    setIsShowDialog(true);
  };

  return (
    <div className="detail-products">
      <h2 className="primary-heading-text">Related Products</h2>
      <div className="detail-products__wrapper">
        {products &&
          products.map((item) => (
            <ShopProduct
              moveToTop={moveToTop}
              toggleDialog={toggleDialog}
              key={item.id}
              {...item}
            />
          ))}
      </div>
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </div>
  );
};

export default DetailProducts;
