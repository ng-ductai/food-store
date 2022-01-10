import { useEffect, useRef } from "react";
import "./styles.scss";
import { homeCategory } from "../../../utils/homeData";
import { Button, Container } from "@material-ui/core";
import {ArrowForwardIos} from "@material-ui/icons";
import LoadedImage from "../../../components/LoadImage";
import gsap from "gsap";

import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Autoplay, Navigation]);

const HomeCategory = () => {
  let containerRef = useRef(null);
  let captionRef = useRef(null);
  let headingRef = useRef(null);
  let cardsRef = useRef(null);

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "20% bottom",
      },
    });

    tl.from(captionRef, {
      x: 20,
      opacity: 0,
      duration: 0.8,
    })
      .from(headingRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(cardsRef, { y: -20, opacity: 0, duration: 0.6 }, "-=0.2");
  }, []);

  return (
    <section className="home-category">
      <Container>
        <div
          ref={(el) => (containerRef = el)}
          className="home-category__container"
        >
          <div ref={(el) => (captionRef = el)} className="primary-yellow-text">
            What we have?
          </div>
          <h2 ref={(el) => (headingRef = el)} className="primary-heading-text">
            Browse food category
          </h2>
          <div ref={(el) => (cardsRef = el)} className="home-category__cards">
            <Swiper
              slidesPerView={2}
              loop
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 4,
                },
                960: {
                  slidesPerView: 7,
                },
              }}
            >
              {homeCategory.map(({ img, name }, index) => (
                <SwiperSlide key={index}>
                  <div className="home-category__card">
                    <div className="home-category__card-img-wrapper">
                      <img
                        className="home-category__card-img"
                        src={LoadedImage(img)}
                        alt="Category card"
                      />
                    </div>
                    <div className="home-category__card-description">
                      {name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Button className="prev-btn">
              <ArrowForwardIos style={{ transform: "rotate(180deg)" }} />
            </Button>
            <Button className="next-btn">
              <ArrowForwardIos />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeCategory;
