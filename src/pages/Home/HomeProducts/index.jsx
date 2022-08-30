import { useEffect } from "react";
import "./styles.scss";
import { homeProducts } from "../../../utils/homeData";
import { Container } from "@material-ui/core";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import HomeProduct from "./HomeProduct";
SwiperCore.use([Autoplay, Pagination]);

const HomeProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section
      className="homeProducts"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="700"
      data-aos-easing="ease-in-sine"
    >
      <Container>
        <div className="primary-yellow-text">Quality Products</div>
        <div className="homeProducts__container">
          <Swiper
            loop
            speed={2000}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                pagination: false,
              },
              // >= tablet
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
                pagination: false,
              },
              // >= desktop
              960: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
                speed: 2500,
              },
            }}
          >
            {homeProducts.map(({ img, name, description, price }, index) => (
              <SwiperSlide key={index}>
                <HomeProduct
                  img={img}
                  name={name}
                  description={description}
                  price={price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default HomeProducts;
