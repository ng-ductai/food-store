import React, { useEffect } from "react";
import "./styles.scss";
import AOS from "aos";
import { Container } from "@material-ui/core";
import PrimaryButton from "../../../components/PrimaryButton";
import LoadImage from "../../../components/LoadImage";
import BigDeliverySvg from "../../../assets/svgs/Home/big-delivery.svg";

const HomeDelivery = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section className="delivery">
      <Container>
        <div className="delivery__container">
          <div
            className="delivery__left"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <div className="primary-yellow-text">Delivery</div>

            <p className="delivery__description">
              F is a online food site. You can search and order many different
              foods quickly and easily. We will deliver on time and right place.
              Free global shipping on all orders. Open the check box before
              receiving the goods. Pay within 2 hours if the product is
              defective or delivered orders. Order before the afternoon to be
              shipped on the same day. You can also go directly to the store to
              enjoy delicious and quality dishes.
            </p>

            <div className="delivery__contact">
              <div className="delivery__contact-phone">
                Hotline: <strong>1800 0000</strong>
              </div>
              <PrimaryButton subClass="red" page="shop">
                Order Now
              </PrimaryButton>
            </div>
          </div>
          <img
            src={LoadImage(BigDeliverySvg)}
            className="delivery__right"
            alt="Delivery"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeDelivery;
