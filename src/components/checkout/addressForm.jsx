import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormField from "../common/formField";

import { validPhoneNumber, validPostcode } from "../../helpers/checkout";

// An Address form with validation used in the checkout when delivery is selected
function AddressForm({ onFormChange }) {
  // Updates the state in the parent (Order Details) with the form values and validation
  // This is so the address details can be submitted with the order, and ensures the submit button in the parent is disabled on invalid form
  useEffect(() => {
    onFormChange(formik.isValid && formik.dirty, formik.values);
  });

  // Initialising a Formik forms values and implementing Yup validation
  const formik = useFormik({
    initialValues: {
      address1: "",
      address2: "",
      town: "",
      postcode: "",
      phone: "",
    },
    validationSchema: Yup.object({
      address1: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Address Line 1 is required"),
      town: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Town/City is required"),
      postcode: Yup.string()
        .matches(validPostcode, "Postcode is not valid")
        .required("Postcode is required"),
      phone: Yup.string()
        .matches(validPhoneNumber, "Phone number is not valid")
        .required("Phone number is required"),
    }),
  });

  const { errors, touched, values, handleBlur, handleChange } = formik;
  // Note: Form submission is handled by parent (Checkout)
  return (
    <div className="formContainer shadow">
      <h3 className="mb-0 mt-0 textCenter">Address details</h3>
      <form className="form flexCol">
        <FormField
          className={errors.address1 ? "inputError" : "input"}
          fieldError={touched.address1 && errors.address1}
          errorMessage={errors.address1}
          label="Address 1"
          name="address1"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.address1}
        />
        <FormField
          className={errors.address2 ? "inputError" : "input"}
          fieldError={touched.address2 && errors.address2}
          errorMessage={errors.address2}
          label="Address 2"
          name="address2"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.address2}
        />
        <FormField
          className={errors.town ? "inputError" : "input"}
          fieldError={touched.town && errors.town}
          errorMessage={errors.town}
          label="Town/City"
          name="town"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.town}
        />
        <FormField
          className={errors.postcode ? "inputError" : "input"}
          fieldError={touched.postcode && errors.postcode}
          errorMessage={errors.postcode}
          label="Postcode"
          name="postcode"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.postcode}
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

export default AddressForm;
