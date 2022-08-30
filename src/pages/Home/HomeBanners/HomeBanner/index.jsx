import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container } from "@material-ui/core";
import PrimaryButton from "../../../../components/PrimaryButton";
import LoadImage from "../../../../components/LoadImage";

const HomeBanner = (props) => {
  const { title, description, background } = props;

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div
      className="homeBanner"
      style={{
        backgroundImage: `url(${LoadImage(background)})`,
      }}
    >
      <Container className="container-ui">
        <div className="homeBanner__container">
          <div
            className="homeBanner__container-title"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-easing="ease-in-sine"
          >
            {title}
          </div>
          <div
            className="homeBanner__container-description"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
          >
            {description}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
          >
            <PrimaryButton subClass="red" page="shop">
              <AddShoppingCartIcon className="homeBanner__container-icon" />
              Order now
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
