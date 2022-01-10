import React, { useEffect, useState } from "react";
import "./styles.scss";
import { homeBanners } from "../../../utils/homeData";
import HomeBanner from "./HomeBanner";

const HomeBanners = () => {
  const [slideNum, setSlideNum] = useState(0);

  // handle auto slide
  useEffect(() => {
    setTimeout(() => {
      if (slideNum < homeBanners.length - 1) {
        setSlideNum(slideNum + 1);
      } else {
        setSlideNum(0);
      }
    }, 8000);
  });

  const moveDot = (idx) => {
    setSlideNum(idx);
  };

  return (
    <section className="home-banners">
      <div
        className="slides"
        style={{ transform: `translateX(${-100 * slideNum}%)` }}
      >
        {homeBanners.map((data, index) => (
          <HomeBanner key={index} {...data} />
        ))}
      </div>
      <div className="dots">
        {Array(homeBanners.length)
          .fill()
          .map((_, index) => {
            return (
              <span
                onClick={() => moveDot(index)}
                key={index}
                className={slideNum === index ? "dot active" : "dot"}
              ></span>
            );
          })}
      </div>
    </section>
  );
}

export default HomeBanners;
