import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormField from "../common/formField";
import { validPhoneNumber } from "../../helpers/checkout";

function CollectionForm({ onFormChange }) {
  // Updates the state in the parent (Checkout) with the form values and validation
  // This is so the customer details can be submitted with the order, and ensures the submit button in the parent is disabled on invalid form
  useEffect(() => {
    onFormChange(formik.isValid && formik.dirty, formik.values);
  });

  // Initialising a Formik forms values and implementing Yup validation
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Name is required"),
      phone: Yup.string()
        .matches(validPhoneNumber, "Phone number is not valid")
        .required("Phone number is required"),
    }),
  });
  const { errors, touched, values, handleBlur, handleChange } = formik;

  // Note: Form submission is handled by parent (Checkout)
  return (
    <div className="formContainer shadow">
      <h3 className="textCenter mb-0 mt-0">Please enter your details</h3>
      <form className="form flexCol">
        <FormField
          className={errors.name ? "inputError" : "input"}
          fieldError={touched.name && errors.name}
          errorMessage={errors.name}
          label="Name"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.name}
        />
        <FormField
          className={errors.phone ? "inputError" : "input"}
          fieldError={touched.phone && errors.phone}
          errorMessage={errors.phone}
          label="Phone Number"
          name="phone"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.phone}
        />
      </form>
    </div>
  );
}

export default CollectionForm;
