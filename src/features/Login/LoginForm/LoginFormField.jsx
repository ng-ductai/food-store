import React from "react";
import "./LoginFormField.scss";

const LoginFormField = (props) => {
  const { name, label, icon, placeholder, errors, register } = props;

  return (
    <div className="login-form-field">
      <label htmlFor={label}>{label}</label>
      <div className="login-form-field__wrapper">
        {icon}
        <input
          {...register(name)}
          id={label}
          name={name}
          placeholder={placeholder}
          type={name}
        />
      </div>
      <span className="login-form-field__error">{errors[name]?.message}</span>
    </div>
  );
}

export default LoginFormField;
