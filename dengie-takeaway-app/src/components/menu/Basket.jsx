import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import BasketItem from "./basketItem";

import DeliveryToggle from "./deliveryToggle";
import { restaurantAddressAdded } from "../../store/order";

const basketContainer = {
  position: "sticky",
  top: 90,
};

function Basket() {
  const dispatch = useDispatch();

  const basket = useSelector((state) => state.order.basket);
  const deliveryOption = useSelector((state) => state.order.delivery);
  const subTotal = useSelector((state) => _.round(state.order.subTotal, 2));
  const { minimumDelivery, restaurantAddress } = useSelector(
    (state) => state.menu
  );

  const basketItems = () => (
    <ul className="bBGray">
      {basket.map((item) => (
        <li className="basketListItem flexRow" key={item.itemName}>
          <BasketItem item={item} />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <DeliveryToggle />
      <div style={basketContainer} className="basketContainer flexCol shadow">
        <h2 className="basketHeader bBGray">Your Order</h2>
        <div>
          {basketItems()}
          {deliveryOption === "collection" && subTotal === 0 && (
            <p>Basket cannot be empty</p>
          )}
          <div className="subtotalContainer flexRow bBGray">
            <p className="subtotalElement">Subtotal</p>
            <p className="subtotalElement">£{subTotal}</p>
          </div>
          {deliveryOption === "delivery" && (
            <p>Minimum Order: £{minimumDelivery}</p>
          )}

          <Link
            to={
              (deliveryOption === "delivery" &&
                subTotal >= minimumDelivery &&
                "/checkout") ||
              (deliveryOption === "collection" && "/order-details")
            }
          >
            <button
              className="checkoutButton"
              disabled={
                (subTotal < minimumDelivery && deliveryOption === "delivery") ||
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
        </div>
      </div>
    </>
  );
}

export default Basket;
