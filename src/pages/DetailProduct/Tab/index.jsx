import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import useFirestoreComments from "../../../hooks/useFirestoreComments";
import { useParams } from "react-router-dom";
import TabComment from "./Commemt";

const DetailTab = () => {
  const [isActive, setIsActive] = useState(true);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [btnElement, setBtnElement] = useState(null);
  let firsBtntRef = useRef(null);
  let secondBtnRef = useRef(null);
  const { name } = useParams();
  const paramsName = name.replace("-", " ");
  const { comments } = useFirestoreComments();

  const handleSelect = (pos) => {
    if (firsBtntRef && secondBtnRef) {
      setOffsetLeft((pos === "first" ? firsBtntRef : secondBtnRef).offsetLeft);
      setOffsetWidth(
        (pos === "first" ? firsBtntRef : secondBtnRef).offsetWidth
      );
      setIsActive(pos === "first" ? true : false);
    }
  };

  // set initial offsetLeft and offsetWidth
  useEffect(() => {
    if (firsBtntRef) {
      setOffsetLeft(firsBtntRef.offsetLeft);
      setOffsetWidth(firsBtntRef.offsetWidth);
      setIsActive(true);
      setBtnElement(firsBtntRef);
    }

    const handleResizeWindow = () => {
      setOffsetLeft(btnElement && btnElement.offsetLeft);
      setOffsetWidth(btnElement && btnElement.offsetWidth);
      setIsActive(true);
    };

    window.addEventListener("resize", handleResizeWindow);
    return window.addEventListener("resize", handleResizeWindow);
  }, [btnElement]);

  return (
    <div className="tab">
      <div className="tab__btns">
        <div
          ref={(el) => (firsBtntRef = el)}
          onClick={() => handleSelect("first")}
          className={isActive ? "tab__btn active" : "tab__btn"}
        >
          <span>Description</span>
        </div>

        <div
          ref={(el) => (secondBtnRef = el)}
          onClick={() => handleSelect("second")}
          className={!isActive ? "tab__btn active" : "tab__btn"}
        >
          <span style={{ marginRight: "5px" }}>Reviews</span>
          <span>({comments.length})</span>
        </div>
        <div
          style={{ left: offsetLeft, width: offsetWidth }}
          className="tab__btn-background"
        />
      </div>

      {isActive ? (
        <div className="tab__description">
          <span className="tab__description-title">{paramsName} </span>is a fast food for all
          ages. Meat can be grilled, fried, smoked or grilled on fire.{" "}
          <span className="tab__description-title">{paramsName} </span> often serve with cheese,
          lettuce, tomatoes, onions, pickled cucumbers, bacon or chili. In
          addition, spices such as tomato sauce, mustard,... can also sprinkle
          them.
        </div>
      ) : (
        <TabComment />
      )}
    </div>
  );
};

export default DetailTab;
