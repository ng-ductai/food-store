import React from "react";
import HomeBanners from "./HomeBanners";
import HomeStep from "./HomeStep";
import HomeCategory from "./HomeCategory";
import HomeDelivery from "./HomeDelivery";
import HomeProducts from "./HomeProducts";
import HomeReviews from "./HomeReviews";

const Home = () => {
  return (
    <>
      <HomeBanners />
      <HomeStep />
      <HomeCategory />
      <HomeDelivery />
      <HomeProducts />
      <HomeReviews />
    </>
  );
};

export default Home;
