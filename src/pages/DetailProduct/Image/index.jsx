import React, { useEffect, useState } from "react";
import "./index.scss";
import { TABLET_BREAKPOINT } from "../../../constants";
// react content loader
import ContentLoader from "react-content-loader";
// react img zoom
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const DetailImage = (props) => {
  const { product } = props;
  const { img } = product ? product : "";
  const [isAtDesktop, setIsAtDesktop] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleResizeWindow = () => {
    if (window.innerWidth > TABLET_BREAKPOINT) {
      setIsAtDesktop(true);
    } else {
      setIsAtDesktop(false);
    }
  };

  window.addEventListener("resize", handleResizeWindow);

  // reset img when window is resized
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return window.removeEventListener("resize", handleResizeWindow);
  }, []);

  const contentLoader = () => (
    <ContentLoader viewBox="0 0 100 100">
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );

  return (
    <div className="img">
      {isAtDesktop ? (
        img ? (
          <InnerImageZoom
            className={isLast ? "img__main last" : "img__main"}
            src={img}
            width={540}
            height={500}
          />
        ) : (
          contentLoader()
        )
      ) : img ? (
        <div className={isLast ? "img__main last" : "img__main"}>
          <img className="img__main-mobile" src={img} alt="Foods" />
        </div>
      ) : (
        contentLoader()
      )}

      <div className="img__slides">
        {img ? (
          <>
            <div
              onClick={() => setIsLast(false)}
              className={isLast ? "img__slides-item last" : "img__slides-item"}
            >
              <img src={img} alt="Slide" />
            </div>
            <div
              onClick={() => setIsLast(true)}
              className={isLast ? "img__slides-item" : "img__slides-item last"}
            >
              <img src={img} alt="slide" />
            </div>
          </>
        ) : (
          <>
            {contentLoader()}
            {contentLoader()}
          </>
        )}
      </div>
    </div>
  );
};

export default DetailImage;
