import React from "react";
import "./index.scss";
import { Checkbox } from "@material-ui/core";
import { MailOutline, LockOutlined } from "@material-ui/icons";
// react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// yup
import * as yup from "yup";
import Field from "./Field";
import PrimaryButton from "../../../components/PrimaryButton";
import ToastMessage from "../../../components/ToastMessage";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "This is not valid email format"
    ),
  password: yup
    .string()
    .required("This field is required")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      "Password should be 8 chars minimum and at least 1 number"
    ),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHandleSubmit = () => {
    reset({
      email: "",
      password: "",
    });

    ToastMessage("closed");
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="loginForm">
      <Field
        icon={<MailOutline />}
        name="email"
        label="Email address"
        placeholder="Enter your email..."
        register={register}
        errors={errors}
      />

      <Field
        icon={<LockOutlined />}
        name="password"
        label="Password"
        placeholder="Enter your password..."
        register={register}
        errors={errors}
      />

      <div className="loginForm__commit">
        <Checkbox color="primary" className="loginForm__commit-checkbox" />
        <span className="loginForm__commit-msg">Save your password</span>
      </div>

      <button type="submit" className="loginForm__btn">
        <PrimaryButton subClass="red">Log in</PrimaryButton>
      </button>
    </form>
  );
};

export default LoginForm;
