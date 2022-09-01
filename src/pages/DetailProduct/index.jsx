import { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import shopApi from "../../api/shopApi";
import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Banner from "../../components/Banner";
import DetailImage from "./Image";
import DetailInfo from "./Info";
import DetailTab from "./Tab";
import RelateProducts from "./Relate";
import { moveToTop } from "../../components/ScrollButton";

const DetailProduct = () => {
  const { name, id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await shopApi.getAll(name, { id: id });
      setSelectedProduct(response[0]);
    };

    getProducts();
    moveToTop();
  }, [name, id]);

  return (
    <div className="detail">
      <Banner />
      <Container>
        <section className="detail__container">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <DetailImage product={selectedProduct} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DetailInfo product={selectedProduct} />
            </Grid>
          </Grid>
        </section>
        <DetailTab />
        <RelateProducts />
      </Container>
    </div>
  );
};

export default DetailProduct;
