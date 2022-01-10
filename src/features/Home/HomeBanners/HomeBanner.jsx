import React, { useEffect, useRef } from "react";
import "./HomeBanner.scss";
import gsap from "gsap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container } from "@material-ui/core";
import PrimaryButton from "../../../components/PrimaryButton";
import LoadImage from "../../../components/LoadImage";

const HomeBanner = (props) => {
  const { title, description, background } = props;
  let containerRef = useRef(null);
  let titleRef = useRef(null);
  let descRef = useRef(null);
  let btnRef = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "-20% top",
      },
    });

    tl.from(titleRef, { x: -20, opacity: 0, duration: 0.8 })
      .from(descRef, { x: 20, opacity: 0, duration: 0.7 }, "-=0.2")
      .from(btnRef, { y: 20, opacity: 0, duration: 0.8 }, "-=0.2");
  }, []);

  return (
    <div
      ref={(el) => (containerRef = el)}
      className="home-banner"
      style={{
        backgroundImage: `url(${LoadImage(background)})`,
      }}
    >
      <Container className="container-ui">
        <div className="home-banner__container">
          <div ref={(el) => (titleRef = el)} className="home-banner__title">
            {title}
          </div>
          <div
            ref={(el) => (descRef = el)}
            className="home-banner__description"
          >
            {description}
          </div>
          <div ref={(el) => (btnRef = el)}>
            <PrimaryButton subClass="red" page="shop">
              <AddShoppingCartIcon className="home-banner__icon" />
              Order now
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
