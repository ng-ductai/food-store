import React, { useEffect } from "react";
import "./styles.scss";
import LoadImage from "../../../components/LoadImage";
import { homeReviews } from "../../../utils/homeData";
import { Container } from "@material-ui/core";
import AOS from "aos";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Autoplay, Pagination]);

const HomeReviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section
      className="reviews"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="1000"
      data-aos-easing="ease-in-sine"
    >
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
              <div className="reviews__img">
                <img src={LoadImage(img)} alt="user" />
              </div>
              <div className="reviews__name">{name}</div>
              <div className="reviews__role">{role}</div>
              <p className="reviews__comment">{comment}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default HomeReviews;
