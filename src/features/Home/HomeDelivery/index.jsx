import React, { useEffect, useRef } from "react";
import "./styles.scss";
import gsap from "gsap";
import { Container } from "@material-ui/core";
import PrimaryButton from "../../../components/PrimaryButton";
import LoadImage from "../../../components/LoadImage";
import BigDeliverySvg from "../../../assets/svgs/Home/big-delivery.svg";

const HomeDelivery = () => {
  let containerRef = useRef(null);
  let captionRef = useRef(null);
  let descRef = useRef(null);
  let contactRef = useRef(null);
  let thumbRef = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "80% bottom",
      },
    });

    tl.from(captionRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(descRef, { y: 20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(contactRef, { y: 15, opacity: 0, duration: 0.65 }, "+=0.3")
      .from(thumbRef, { x: 50, opacity: 0, duration: 0.8 }, "-=1.0");
  }, []);

  return (
    <section ref={(el) => (containerRef = el)} className="home-delivery">
      <Container>
        <div className="home-delivery__container">
          <div className="home-delivery__col">
            <div
              ref={(el) => (captionRef = el)}
              className="primary-yellow-text"
            >
              Delivery
            </div>

            <p
              ref={(el) => (descRef = el)}
              className="home-delivery__description"
            >
              F is a online food site. You can search and order many different
              foods quickly and easily. We will deliver on time and right place.
              Free global shipping on all orders. Open the check box before
              receiving the goods. Pay within 2 hours if the product is
              defective or delivered orders. Order before the afternoon to be
              shipped on the same day. You can also go directly to the store to
              enjoy delicious and quality dishes.
            </p>

            <div
              ref={(el) => (contactRef = el)}
              className="home-delivery__contact"
            >
              <div className="home-delivery__contact-phone">
                Hotline: <strong>1800 0000</strong>
              </div>
              <PrimaryButton subClass="red" page="shop">
                Order Now
              </PrimaryButton>
            </div>
          </div>
          <img
            ref={(el) => (thumbRef = el)}
            src={LoadImage(BigDeliverySvg)}
            className="home-delivery__img"
            alt="Delivery"
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeDelivery;
