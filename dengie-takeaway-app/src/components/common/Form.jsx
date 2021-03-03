import React from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "../../css/form.css";
import * as Yup from "yup";

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a valid email"),
      message: Yup.string()
        // .min(10, "Must be 20 characters or more")
        .required("Please enter a message"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={formik.handleSubmit} className="form">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          placeholder="Name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          style={(formik.errors.name && inputError) || input}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={error}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            {"   "}
            {formik.errors.name}
          </div>
        ) : null}
        <label htmlFor="email" style={formElement}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          style={
            (formik.errors.email && { ...inputError, ...formElement }) || {
              ...input,
              ...formElement,
            }
          }
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={error}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            {"   "}
            {formik.errors.email}
          </div>
        ) : null}
        <label htmlFor="message" style={formElement}>
          Your Message
        </label>
        <textarea
          style={{ ...input, ...formElement, resize: "vertical" }}
          style={
            (formik.errors.message && {
              ...inputError,
              ...formElement,
              resize: "vertical",
            }) || {
              ...input,
              ...formElement,
              resize: "vertical",
            }
          }
          id="message"
          placeholder="Message"
          name="message"
          type="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div style={error}>
            <FontAwesomeIcon icon={faExclamationCircle} />
            {"   "}
            {formik.errors.message}
          </div>
        ) : null}

        <button type="submit" style={{ ...input, ...formElement }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
