import React, { useContext, useEffect, useRef, useState } from "react";
import "./ShopHandle.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  filterShopByOrder,
  setShopProductsView,
} from "../../../app/reducers/shopSlice";
import { ApiContext } from "../../../contexts/ApiContext";
import { PrevFilterContext } from "../../../contexts/PrevFilterContext";
import { Search, ViewList, ViewModule, ExpandMore } from "@material-ui/icons";

const dataTypes = [
  {
    value: "Price: Low to High",
    sort: "price_lth",
  },
  {
    value: "Price: High to Low",
    sort: "price_htl",
  },
  {
    value: "Rate: Low to High",
    sort: "rate_lth",
  },
  {
    value: "Rate: High to Low",
    sort: "rate_htl",
  },
];

const ShopHandle = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  const { getProducts } = useContext(ApiContext);
  const { handlePrevious } = useContext(PrevFilterContext);
  const { selectedDrop, setSelectedDrop, setPrevSearch } = handlePrevious();
  const { shopProductsView } = useSelector((state) => state.shop);

  // close sort when user clicks outside
  useEffect(() => {
    const handleClickDrop = (e) => {
      const el = ref.current;

      if (el && el.contains(e.target)) {
        setIsDrop(!isDrop);
      } else {
        setIsDrop(false);
      }
    };

    window.addEventListener("click", handleClickDrop);

    return window.addEventListener("click", handleClickDrop);
  }, [isDrop]);

  const handleSearch = (e) => {
    handlePrevious("search");
    e.preventDefault();

    if (!inputValue) return;
    const query = { name_like: inputValue };
    getProducts("our-foods", query);
    setInputValue("");
    setPrevSearch(query);
  };

  const onFilterBySort = (sort, value) => {
    handlePrevious("sort");
    const action = filterShopByOrder(sort);
    dispatch(action);
    setSelectedDrop(value);
  };

  const handleSetShopProductsView = (type) => {
    const action = setShopProductsView(type);
    dispatch(action);
  };

  return (
    <div className="shop-handle">
      <form onSubmit={handleSearch} className="shop-handle__search">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search your product"
        />
        <button className="shop-handle__search-btn">
          <Search />
        </button>
      </form>

      <div className="shop-handle__drop">
        <div ref={ref} className="shop-handle__drop-current">
          <span>{selectedDrop}</span>
          <ExpandMore />
        </div>
        <ul
          className={
            isDrop ? "shop-handle__drop-list drop" : "shop-handle__drop-list"
          }
        >
          {dataTypes.map(({ value, sort }, index) => (
            <li
              onClick={() => onFilterBySort(sort, value)}
              key={index}
              className="shop-handle__drop-item"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="shop-handle__display-types">
        <ViewList
          onClick={() => handleSetShopProductsView("list")}
          className={`shop-handle__display-type ${
            shopProductsView === "list" && "active"
          }`}
        />
        <ViewModule 
          onClick={() => handleSetShopProductsView("grid")}
          className={`shop-handle__display-type ${
            shopProductsView === "grid" && "active"
          }`}
        />
      </div>
    </div>
  );
}

export default ShopHandle;
