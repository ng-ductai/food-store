import React, { useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import SearchHandle from "./Search";
import ShopProducts from "./Products";
import Pagination from "./Pagination";

const ShopContent = () => {
  const [isFlex, setIsFlex] = useState(false);
  const products = useSelector((state) => state.shop.shopProducts);

  return (
    <div className="shop-content">
      <SearchHandle isFlex={isFlex} setIsFlex={setIsFlex} />
      <ShopProducts isFlex={isFlex} />
      {products.length > 0 && <Pagination />}
    </div>
  );
};

export default ShopContent;
