import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import {
  googleProvider,
  auth,
  facebookProvider,
} from "../../configs/firebaseConfig";
import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LoginForm from "./LoginForm";
import ToastMessage from "../../components/ToastMessage";
import GoogleSvg from "../../assets/svgs/Login/google.svg";

const Login = () => {
  const history = useHistory();

  const handleGoogleLogIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        history.goBack();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFacebookLogIn = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then(() => {
        history.goBack();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFeatureClosed = () => {
    ToastMessage("closed");
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>
          Welcom to <span className="login__container-label">F</span>{" "}
        </h2>

        <LoginForm />

        <div className="login__separate">
          <span className="login__separate-text">OR</span>
        </div>

        <div className="login__options">
          <Button
            onClick={handleGoogleLogIn}
            variant="contained"
            className="login__option login__option--gg"
          >
            <img src={GoogleSvg} alt="google icon" />
            Log in with Google
          </Button>

          <Button
            onClick={handleFacebookLogIn}
            variant="contained"
            className="login__option login__option--fb"
          >
            <FacebookIcon />
            Log in with Facebook
          </Button>
        </div>

        <div className="login__msg">
          <span>Don't have an account? </span>
          <span onClick={handleFeatureClosed} className="login__msg-btn">
            <strong>Create an account</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
