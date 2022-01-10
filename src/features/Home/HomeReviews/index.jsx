import React from "react";
import "./styles.scss";
import LoadImage from "../../../components/LoadImage";
import { homeReviews } from "../../../utils/homeData";
import { Container } from "@material-ui/core";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Autoplay, Pagination]);

const HomeReviews = () => {
  
  return (
    <section className="home-reviews">
      <Container>
        <Swiper
          speed={500}
          spaceBetween={20}
          loop
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {homeReviews.map(({ img, name, role, comment }, index) => (
            <SwiperSlide key={index}>
              <div className="home-reviews__content">
                <div className="home-reviews__img-wrapper">
                  <img
                    src={LoadImage(img)}
                    alt="user-review"
                    className="home-reviews__img"
                  ></img>
                </div>
                <div className="home-reviews__name">{name}</div>
                <div className="home-reviews__role">{role}</div>
                <p className="home-reviews__comment">{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default HomeReviews;
