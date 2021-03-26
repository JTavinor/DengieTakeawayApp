import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import FormField from "../common/formField";

import { validPhoneNumber } from "../../helpers/checkout";

import { submitOrder } from "../../store/order";

// Dummy card payment form, not implemented yet due to security
function CardPayment() {
  const dispatch = useDispatch();

  // Initialising a Formik forms values and implementing Yup validation
  const formik = useFormik({
    initialValues: {
      name: "",
      cardNumber: "",
      sortCode: "",
      expiryDate: "",
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

  return (
    <div className="formContainer cardPaymentContainer shadow">
      <h3 className="textCenter mt-0">
        Note: App in development, Card payment not yet enabled
      </h3>
      <h3 className="textCenter">Please enter your card details</h3>
      <form className="form flexCol">
        <FormField
          className={errors.name ? "inputError" : "input"}
          disabled
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
          className={errors.cardNumber ? "inputError" : "input"}
          disabled
          fieldError={touched.cardNumber && errors.cardNumber}
          errorMessage={errors.cardNumber}
          label="Card Number"
          name="cardNumber"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.cardNumber}
        />
        <FormField
          className={errors.sortCode ? "inputError" : "input"}
          disabled
          fieldError={touched.sortCode && errors.sortCode}
          errorMessage={errors.sortCode}
          label="Sort Code"
          name="sortCode"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.sortCode}
        />
        <FormField
          className={errors.expiryDate ? "inputError" : "input"}
          disabled
          fieldError={touched.expiryDate && errors.expiryDate}
          errorMessage={errors.expiryDate}
          label="Expiry Date"
          name="expiryDate"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          value={values.expiryDate}
        />
      </form>
      {/* Post order to DB */}
      <Link to="/order-confirmed">
        <button
          className="addToBasketButton checkoutButton "
          onClick={() => dispatch(submitOrder({ hello: "Moto" }))}
        >
          Pay and submit order
        </button>
      </Link>
    </div>
  );
}

export default CardPayment;
