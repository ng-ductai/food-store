import React from "react";
import "./index.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  DoneOutlined,
  BookmarkBorderOutlined,
  PriorityHighOutlined,
  ExitToApp,
  Settings,
} from "@material-ui/icons";
import {
  SUCCESS_COLOR,
  FAVOURITE_COLOR,
  WARNING_COLOR,
  CLOSED_COLOR,
} from "../../constants";

const toastTypes = {
  success: {
    title: "Success",
    desc: "The product has been added to cart!",
    color: SUCCESS_COLOR,
    setIcon: () => <DoneOutlined style={{ fill: SUCCESS_COLOR }} />,
  },
  wishlist: {
    title: "Success",
    desc: "The product has been added to your favourites!",
    color: FAVOURITE_COLOR,
    setIcon: () => <BookmarkBorderOutlined style={{ fill: FAVOURITE_COLOR }} />,
  },
  warning: {
    title: "Warning",
    desc: "Your cart is empty!",
    color: WARNING_COLOR,
    setIcon: () => <PriorityHighOutlined style={{ fill: WARNING_COLOR }} />,
  },
  closed: {
    title: "Closed",
    desc: "This feature is currently developing. Please try to log in with Google!",
    color: CLOSED_COLOR,
    setIcon: () => <Settings style={{ fill: CLOSED_COLOR }} />,
  },
};

const ToastMessage = (type) => {
  const toastType = toastTypes[type];

  const CloseButton = () => (
    <div className="toast-msg__close">
      <ExitToApp />
    </div>
  );

  const ToastBody = () => (
    <div
      className="toast-msg"
      style={{ backgroundColor: `${toastType.color}` }}
    >
      <div className="toast-msg__icon">{toastType.setIcon()}</div>
      <div className="toast-msg__content">
        <h4 className="toast-msg__title">{toastType.title}!</h4>
        <div className="toast-msg__description">{toastType.desc}</div>
      </div>
    </div>
  );

  return toast(ToastBody(), {
    closeButton: CloseButton(),
    autoClose: 2000,
    hideProgressBar: true,
    pauseOnHover: false,
  });
};

export default ToastMessage;
