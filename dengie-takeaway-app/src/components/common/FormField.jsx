import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function FormField({
  autoFocus,
  className,
  fieldError,
  errorMessage,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  required,
  value,
}) {
  return (
    <div className="formField">
      <label className="formLabel" htmlFor={name}>
        {label}
        {required && <span className="required"> *</span>}
      </label>
      <input
        autoFocus={autoFocus}
        className={className}
        id={name}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder || label}
        type="text"
        value={value}
      />
      {fieldError ? (
        <div className="formFieldError">
          <FontAwesomeIcon icon={faExclamationCircle} />
          {"   "}
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
}

export default FormField;
