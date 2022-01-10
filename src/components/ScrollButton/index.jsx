import React, { useState } from "react";
import "./styles.scss";
import {ExpandLess} from "@material-ui/icons";

const ScrollButton = () => {
  const [isShow, setIsShow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });

  return (
    <div
      onClick={handleScrollToTop}
      className={isShow ? "scroll-btn show" : "scroll-btn"}
    >
      <div className="scroll-btn__icon">
        <ExpandLess />
      </div>
    </div>
  );
}

export default ScrollButton;
