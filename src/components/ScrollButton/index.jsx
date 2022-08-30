import React, { useState } from "react";
import "./index.scss";
import { ExpandLess } from "@material-ui/icons";

const moveToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export { moveToTop };

const ScrollButton = () => {
  const [isShow, setIsShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });

  return (
    <div
      onClick={moveToTop}
      className={isShow ? "scroll show" : "scroll"}
    >
      <div className="scroll__icon">
        <ExpandLess />
      </div>
    </div>
  );
};

export default ScrollButton;
