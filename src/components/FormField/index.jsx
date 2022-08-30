import React from "react";
import "./index.scss";

const FormField = (props) => {
  const { label, name, errors, register } = props;

  return (
    <div className="form-field">
      <div className="form-field__wrapper">
        <input
          className="form-field__input"
          placeholder=" "
          type="text"
          {...register(name)}
        />
        <span className="form-field__label">{label}</span>
      </div>
      <span className="form-field__error">
        {errors[name]?.message}
      </span>
    </div>
  );
}

export default FormField;
