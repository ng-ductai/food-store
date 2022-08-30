import React from "react";
import "./index.scss";

const Field = (props) => {
  const { name, label, icon, placeholder, errors, register } = props;

  return (
    <div className="field">
      <label htmlFor={label}>{label}</label>
      <div className="field__container">
        {icon}
        <input
          {...register(name)}
          id={label}
          name={name}
          placeholder={placeholder}
          type={name}
        />
      </div>
      <span className="field__error">{errors[name]?.message}</span>
    </div>
  );
};

export default Field;
