import React from "react";
import "../../css/form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function Input({
  className,
  errorChecker,
  errorMessage,
  label,
  name,
  onChange,
  required,
  value,
}) {
  return (
    <div style={{ width: "80%" }}>
      <label htmlFor={name} className="formElement">
        {label}
        {required && <span style={{ color: "#ff4c4c" }}> *</span>}
      </label>
      <br />
      <input
        className={className}
        onChange={onChange}
        value={value}
        autoFocus
        type="text"
        id={name}
        name={name}
        placeholder="Address 1"
      />
      {errorChecker ? (
        <div className="error">
          <FontAwesomeIcon icon={faExclamationCircle} />
          {"   "}
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
}

export default Input;
