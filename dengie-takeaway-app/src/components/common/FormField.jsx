import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

// Generic form input field to be used in conjunction with a Formik form
// Validated by Formik - If field is touched + invalid, error message is rendered
function FormField({
  className,
  disabled,
  errorMessage,
  fieldError,
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
        autoFocus={false}
        className={className}
        disabled={disabled}
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
