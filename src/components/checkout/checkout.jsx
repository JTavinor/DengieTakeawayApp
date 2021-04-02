import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AddressForm from "./addressForm";
import Basket from "../menu/basket";
import CheckoutButton from "./checkoutButton";
import CollectionForm from "./collectionForm";
import PaymentToggle from "./paymentToggle";

import { checkoutButtonRoute } from "../../helpers/checkout";

// Checkout, Allows users to view their order and confirm delivery option
// If selecting delivery, renders a form for user to enter their details
// Allows user to select a payment option
// Either routes the user to card payment or submits their order depending on payment option
function Checkout() {
  const { deliveryOption, paymentOption } = useSelector((state) => state.order);

  // Setting if the address form is valid and setting customer details form the form
  const [formIsValid, setFormIsValid] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({});

  // Retrieves the address form details from the child (Address Form)
  function updateFormDetails(isValid, customerDetails) {
    setFormIsValid(isValid);
    setCustomerDetails(customerDetails);
  }

  return (
    <div className="checkoutContainer">
      {/* Modified version of the Menu Basket */}
      <Basket sticky={false} checkout={true} />

      {/* Renders the address form only if user has chosen delivery as delivery option */}
      {deliveryOption === "delivery" && (
        <AddressForm onFormChange={updateFormDetails} />
      )}
      {deliveryOption === "collection" && (
        <CollectionForm onFormChange={updateFormDetails} />
      )}

      {/* Radio group for choosing payment option */}
      <PaymentToggle />

      {/* Route calculated based on payment option */}
      <Link
        to={checkoutButtonRoute(paymentOption, formIsValid, deliveryOption)}
      >
        {/* Button for checkout, with various conditions to be able to submit an order */}
        <CheckoutButton
          formIsValid={formIsValid}
          customerDetails={customerDetails}
        />
      </Link>
    </div>
  );
}

export default Checkout;
