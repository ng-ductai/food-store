import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../../../contexts/ApiContext";
import { PrevFilterContext } from "../../../../contexts/PrevFilterContext";
import shopApi from "../../../../api/shopApi";
import ReactPaginate from "react-paginate";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { moveToTop } from "../../../../components/ScrollButton";

const ShopPagination = () => {
  const [productsLength, setProductsLength] = useState(0);
  const { name } = useParams();
  const { handlePrevious } = useContext(PrevFilterContext);
  const { getProducts, totalRows, paginationActive } = useContext(ApiContext);

  const { prevPrice, prevRate, prevSearch } = handlePrevious();
  const maxPage =
    prevPrice || prevRate || prevSearch
      ? Math.ceil(productsLength / 16)
      : Math.ceil(totalRows[name] / 16);

  useEffect(() => {
    const getProductsLength = async () => {
      if (prevPrice || prevRate || prevSearch) {
        const response = await shopApi.getAll(
          name,
          prevPrice || JSON.parse(prevRate) || prevSearch
        );

        setProductsLength(response.length);
      }
    };

    getProductsLength();
  }, [name, prevPrice, prevRate, prevSearch]);

  const handlePagination = (page) => {
    const { selected } = page;
    const params = {
      _page: selected + 1,
    };

    handlePrevious("pagination");
    getProducts(name, params);
    moveToTop();
  };

  return (
    <ReactPaginate
      previousLabel={<NavigateBefore />}
      nextLabel={<NavigateNext />}
      pageCount={maxPage}
      pageRangeDisplayed={3}
      onPageChange={handlePagination}
      marginPagesDisplayed={1}
      containerClassName={"pagination"}
      forcePage={paginationActive}
    />
  );
};

export default ShopPagination;
