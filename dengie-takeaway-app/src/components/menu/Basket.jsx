import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import BasketItem from "./basketItem";

import DeliveryToggle from "./deliveryToggle";
import { restaurantAddressAdded } from "../../store/order";

// Sticks basket to top of the page
// Does not work when put in css file - Don't know why!
const basketContainer = {
  position: "sticky",
  top: 90,
};

// Basket displaying list of items user has added
// Shows Subtotal of order
// Allows user to increment/decrement an items quantity
// Is used in the menu panel and checkout and is styled different accordingly
// Contains a DeliveryToggle component for the user to select a delivery option
// If user is on a menu, contains a button to proceed to checkout
// Button is disabled and a relevant message is displayed if:
//  - User selects delivery and the order is below the minimum delivery
//  - User selects collection and basket is empty
// On the menu, if the screen is narrow (phone), Basket is replaced by BasketModal
function Basket({ checkout, sticky }) {
  const dispatch = useDispatch();

  const { basket, deliveryOption } = useSelector((state) => state.order);
  const subTotal = useSelector((state) => _.round(state.order.subTotal, 2));
  const { minimumDelivery, restaurantAddress } = useSelector(
    (state) => state.menu.data
  );

  // Takes the items in the basket and renders them as a list
  const basketItems = () => (
    <ul className="bBGray">
      {basket.map((item) => (
        <li className="basketListItem flexRow" key={item.itemName}>
          <BasketItem checkout={checkout} item={item} />
        </li>
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      {/* If the user is not in the checkout renders a sticky DeliveryToggle above the basket */}
      {!checkout && <DeliveryToggle sticky={sticky} />}
      <div
        style={sticky ? basketContainer : null}
        className="basketContainer flexCcheckoutBasketol shadow"
      >
        <h2 className="basketHeader bBGray">Your Order</h2>
        <div className={checkout && "checkoutBasket"}>
          {basketItems()}
          {deliveryOption === "collection" && subTotal === 0 && (
            <p
              className="mb-0"
              style={{ borderBottom: "1px solid gray", paddingBottom: "15px" }}
            >
              Basket cannot be empty.{" "}
              {checkout && "Please return to the menu to add items"}
            </p>
          )}
          <div className="subtotalContainer flexRow bBGray">
            <p className="subtotalElement">Subtotal</p>
            <p className="subtotalElement">£{subTotal}</p>
          </div>
          {deliveryOption === "delivery" && (
            <p>Minimum Order: £{minimumDelivery}</p>
          )}

          {/* If the user is on the menu, renders the button to route to the checkout. Disabled if conditions are not met */}
          {/* On click adds the restaurant address to the order. Wanted to do this on menu data fetch, 
          but this passed an empty string as the address due to the initial value in redux being an empty string */}
          {!checkout && (
            <Link to="/checkout">
              <button
                className="goToCheckoutButton"
                disabled={
                  (subTotal < minimumDelivery &&
                    deliveryOption === "delivery") ||
                  (subTotal === 0 && deliveryOption === "collection")
                }
                onClick={() =>
                  dispatch(restaurantAddressAdded(restaurantAddress))
                }
              >
                {subTotal >= minimumDelivery || deliveryOption === "collection"
                  ? "Go to Checkout"
                  : `Delivery Minimum £${minimumDelivery}`}
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* If user in the checkout, Delivery toggle is rendered below the basket and is not sticky */}
      {checkout && <DeliveryToggle sticky={sticky} checkout={checkout} />}
    </React.Fragment>
  );
}

export default Basket;
