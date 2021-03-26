// UK phone number and postcode in Regex for form validation
export const validPhoneNumber = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/;
export const validPostcode = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

// Computes the route for the checkout button depending on cash/card payment and delivery/collection
export const checkoutButtonRoute = (
  paymentOption,
  formIsValid,
  deliveryOption
) => {
  if (
    (deliveryOption === "delivery" && formIsValid) ||
    deliveryOption === "collection"
  ) {
    return paymentOption === "cash" ? "/order-confirmed" : "/card-payment";
  } else return null;
};

// Sets the message for the continue button based on payment option and form validation
export const buttonMessage = (
  paymentOption,
  formIsValid,
  deliveryOption,
  subTotal,
  minimumDelivery
) => {
  if (!formIsValid) return "Please fill out your details";
  if (!paymentOption) return "Select a payment option";
  if (deliveryOption === "delivery" && subTotal < minimumDelivery)
    return `Minimum order £${minimumDelivery}`;
  if (deliveryOption === "collection" && subTotal === 0)
    return "Basket cannot be empty";
  if (paymentOption === "cash") return "Submit order";
  if (paymentOption === "card") return "Continue to payment";
};
