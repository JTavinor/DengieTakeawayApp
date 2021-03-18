import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import BasketItem from "./basketItem";

import "../../css/menu/basket.css";
import DeliveryToggle from "./deliveryToggle";
import { restaurantAdded, restaurantAddressAdded } from "../../store/order";

const basketContainer = {
  position: "sticky",
  top: 15,
};

function Basket() {
  const basket = useSelector((state) => state.entities.order.basket);
  const delivery = useSelector((state) => state.entities.order.delivery);
  const minimumOrder = useSelector(
    (state) => state.entities.menu.minimumDelivery
  );
  const subTotal = useSelector((state) =>
    _.round(state.entities.order.subTotal, 2)
  );

  const basketItems = () => {
    const basketList = [];
    for (const item of basket) {
      basketList.push(<BasketItem item={item} />);
    }
    return <ul className="bBGray">{basketList}</ul>;
  };

  return (
    <div style={basketContainer} className="basketContainer">
      <DeliveryToggle />
      <h2 className="basketHeader bBGray">Your Order</h2>
      <div>
        {basketItems()}
        {delivery === "collection" && subTotal === 0 && (
          <p>Basket cannot be empty</p>
        )}
        <div className="subtotalContainer">
          <p className="subtotalElement">Subtotal</p>
          <p className="subtotalElement">£{subTotal}</p>
        </div>
        {delivery === "delivery" && <p>Minimum Order: £{minimumOrder}</p>}

        <Link
          to={
            (delivery === "delivery" &&
              subTotal >= minimumOrder &&
              "/checkout") ||
            (delivery === "collection" && "/order-details")
          }
        >
          <button
            className="addToBasketButton checkoutBtn"
            disabled={
              (subTotal < minimumOrder && delivery === "delivery") ||
              (subTotal === 0 && delivery === "collection")
            }
          >
            <p className="m-0">
              {subTotal >= minimumOrder || delivery === "collection"
                ? "Go to Checkout"
                : `Delivery Minimum £${minimumOrder}`}
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Basket;
