import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { buttonMessage } from "../../helpers/checkout";
import { customerDetailsAdded, submitOrder } from "../../store/order";

// Button for checkout, with various conditions to be able to submit an order
function CheckoutButton({ customerDetails, formIsValid }) {
  const dispatch = useDispatch();

  const subTotal = useSelector((state) => _.round(state.order.subTotal, 2));
  const { minimumDelivery } = useSelector((state) => state.menu.data);
  const { deliveryOption, paymentOption, basket, restaurant, restaurantAddress  } = useSelector((state) => state.order);

  //   !!!IMPORTANT Customer details must be dispatched to store before posting order to DB!!!

  //   !!!IMPORTANT only post order to DB at this point if customer paying with cash!!!
  //   Else card payment must be confirmed on the next page before posting

  //   If no payment option is selected, customer details form is invalid, or order conditions are not met, button is disabled

  //   Button message conditional on  payment/delivery option && valid form

  return (
    <button
      className="addToBasketButton checkoutButton"
      disabled={
        !paymentOption ||
        !formIsValid ||
        (deliveryOption === "delivery" && subTotal < minimumDelivery) ||
        (deliveryOption === "collection" && subTotal === 0)
      }
      onClick={() => {
        dispatch(customerDetailsAdded({ customerDetails: customerDetails }));
        if (paymentOption === "cash") dispatch(submitOrder({ deliveryOption, paymentOption, basket, restaurant, restaurantAddress, subTotal, customerDetails})); // NEED TO UPDATE THIS TO SUBMIT ORDER AS REQUEST BODY
      }}
    >
      {buttonMessage(
        paymentOption,
        formIsValid,
        deliveryOption,
        subTotal,
        minimumDelivery
      )}
    </button>
  );
}

export default CheckoutButton;
