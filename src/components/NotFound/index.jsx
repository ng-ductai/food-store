import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ChevronLeft } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { setIsAtCheckout } from "../../reducers/headerSlice";

const NotFound = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const returnToHome = () => {
    const action = setIsAtCheckout(false);
    dispatch(action);
    history.push("/home");
  };

  return (
    <Container className="notfound">
      <div onClick={returnToHome} className="notfound__return">
        <ChevronLeft />
        <span>Return to home</span>
      </div>
      <div className="notfound__container">
        <span className="notfound__container-caption">404</span>
        <h2 className="notfound__container-heading">Page not found</h2>
      </div>
    </Container>
  );
};

export default NotFound;
