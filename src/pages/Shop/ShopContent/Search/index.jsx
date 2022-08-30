import React, { useContext, useEffect, useRef, useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { filterShopByOrder } from "../../../../reducers/shopSlice";
import { ApiContext } from "../../../../contexts/ApiContext";
import { PrevFilterContext } from "../../../../contexts/PrevFilterContext";
import { Search, ExpandMore } from "@material-ui/icons";
import { dataTypes } from "../../../../constants";

const SearchHandle = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  const { getProducts } = useContext(ApiContext);
  const { handlePrevious } = useContext(PrevFilterContext);
  const { selectedDrop, setSelectedDrop, setPrevSearch } = handlePrevious();

  // close sort when clicks outside
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

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="search__input">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search your product"
        />
        <button className="search__input-btn">
          <Search />
        </button>
      </form>

      <div className="search__drop">
        <div ref={ref} className="search__drop-current">
          <span>{selectedDrop}</span>
          <ExpandMore />
        </div>
        <ul className={isDrop ? "search__drop-list drop" : "search__drop-list"}>
          {dataTypes.map(({ value, sort }, index) => (
            <li
              onClick={() => onFilterBySort(sort, value)}
              key={index}
              className="search__drop-item"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchHandle;
