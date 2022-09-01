import React, { useContext } from "react";
import "./index.scss";
import { useHistory, useParams } from "react-router-dom";
import { ApiContext } from "../../contexts/ApiContext";
import { Container } from "@material-ui/core";
import Banner from "../../components/Banner";
import ShopFilters from "./ShopFilters";
import ShopContent from "./ShopContent";

const Shop = () => {
  const { name } = useParams();
  const history = useHistory();
  const { getProducts } = useContext(ApiContext);

  window.addEventListener("load", () => {
    const params = history.location.search;

    if (params) {
      const paramsObj = JSON.parse(
        '{"' +
          decodeURI(
            params.substr(1).replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      );

      getProducts(name, paramsObj);
    } else {
      getProducts(name);
    }
  });

  return (
    <section className="shop">
      <Banner />
      <Container>
        <div className="shop__container">
          <ShopFilters />
          <ShopContent />
        </div>
      </Container>
    </section>
  );
};

export default Shop;
