import { useEffect } from "react";
import "./styles.scss";
import { homeCategory } from "../../../utils/homeData";
import { Button, Container } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import LoadedImage from "../../../components/LoadImage";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
SwiperCore.use([Autoplay, Navigation]);

const HomeCategory = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section
      className="category"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <Container>
        <div className="category__container">
          <div className="primary-yellow-text">Food category</div>
          <div className="category__cards">
            <Swiper
              slidesPerView={2}
              loop
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 4000,
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
                  <div className="card">
                    <div className="card-img">
                      <img src={LoadedImage(img)} alt="card" />
                    </div>
                    <div className="card-description">{name}</div>
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
};

export default HomeCategory;
