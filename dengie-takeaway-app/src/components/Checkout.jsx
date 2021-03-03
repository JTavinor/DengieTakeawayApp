import React, { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "../css/form.css";
import * as Yup from "yup";
import Input from "./common/Input";
import { Link } from "react-router-dom";

function Checkout(props) {
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
        .max(20, "Must be 15 characters or less")
        .required("Address 1 is required"),

      town: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Town/City is required"),
      postcode: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Postcode is required"),
      phone: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Phone number is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      window.location = "/order-details";
    },
  });

  return (
    <div className="cuisineContainer">
      <form onSubmit={formik.handleSubmit} className="form">
        <Input
          className={formik.errors.address1 ? "inputError" : "input"}
          errorChecker={formik.errors.address1}
          errorMessage={formik.errors.address1}
          label="Address 1"
          name="address1"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          required
          value={formik.values.address1}
        />
        <Input
          className={formik.errors.address2 ? "inputError" : "input"}
          errorChecker={formik.touched.address2 && formik.errors.address2}
          errorMessage={formik.errors.address2}
          label="Address 2"
          name="address2"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.address2}
        />
        <Input
          className={formik.errors.town ? "inputError" : "input"}
          errorChecker={formik.touched.town && formik.errors.town}
          errorMessage={formik.errors.town}
          label="Town/City"
          name="town"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          required
          value={formik.values.town}
        />
        <Input
          className={formik.errors.postcode ? "inputError" : "input"}
          errorChecker={formik.touched.postcode && formik.errors.postcode}
          errorMessage={formik.errors.postcode}
          label="Postcode"
          name="postcode"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          required
          value={formik.values.postcode}
        />
        <Input
          className={formik.errors.phone ? "inputError" : "input"}
          errorChecker={formik.touched.phone && formik.errors.phone}
          errorMessage={formik.errors.phone}
          label="Phone Number"
          name="phone"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          required
          value={formik.values.phone}
        />
        <button
          type="submit"
          className="addToBasketButton"
          style={{
            width: "80%",
            textAlign: "center",
            padding: "10px",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Checkout;

// const [address, setAddress] = useState({
//   address1: "",
//   address2: "",
//   town: "",
//   postcode: "",
// });

// const [errors, setErrors] = useState({});

// const validateForm = () => {
//   const errors = {};

//   if (account.address1.trim() === "")
//     errors.address1 = "Address 1 is required";
//   if (account.town.trim() === "") errors.town = "Town/City is required";
//   if (account.postcode.trim() === "")
//     errors.postcode = "Postcode is required";

//   return { address1: "Address 1 is required" };
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const errors = validateForm();
//   setErrors(errors);
//   if (errors) return;

//   console.log("Submitted");
// };

// const handleChange = ({ currentTarget: input }) => {
//   const newAddress = { ...address };
//   newAddress[input.name] = input.value;
//   setAddress(newAddress);
// };

// <div className="cuisineContainer">
//   <h1>Checkout</h1>
//   <form onSubmit={handleSubmit}>
//     <Input
// label="Address 1"
// name="address1"
// onChange={handleChange}
// value={address.address1}
//     />
//     <Input
//       label="Address 2"
//       name="address2"
//       onChange={handleChange}
//       value={address.address2}
//     />
//     <Input
//       label="Town/City"
//       name="town"
//       onChange={handleChange}
//       value={address.town}
//     />
//     <Input
//       label="Postcode"
//       name="postcode"
//       onChange={handleChange}
//       value={address.postcode}
//     />
//     <button className="addToBasketButton" style={{ width: "50%" }}>
//       Continue
//     </button>
//   </form>
// </div>
