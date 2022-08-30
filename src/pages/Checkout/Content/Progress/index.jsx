import React from "react";
import "./index.scss";
import { PeopleAlt, ListAlt, DoneOutlineOutlined } from "@material-ui/icons";

const CheckoutProgress = (props) => {
  const { isCheckoutSuccess } = props;

  return (
    <div className="progress">
      <div className="progress__node active">
        <div className="progress__icon">
          <PeopleAlt />
        </div>
        <span className="progress__title">Login</span>
      </div>
      <span className="progress__line"></span>
      <div className="progress__node">
        <div className="progress__icon">
          <ListAlt />
        </div>
        <span className="progress__title">Confirm</span>
      </div>
      <span
        className={
          isCheckoutSuccess ? "progress__line active" : "progress__line"
        }
      />
      <div className="progress__node">
        <div
          className={
            isCheckoutSuccess ? "progress__icon active" : "progress__icon"
          }
        >
          <DoneOutlineOutlined />
        </div>
        <span className="progress__title">Success</span>
      </div>
    </div>
  );
};

export default CheckoutProgress;
