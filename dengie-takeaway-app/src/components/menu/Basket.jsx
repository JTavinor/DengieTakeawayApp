import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";

import BasketItem from "./basketItem";

import "../../css/menu/basket.css";
import DeliveryToggle from "./deliveryToggle";

const basketContainer = {
  position: "sticky",
  top: 15,
};

function Basket() {
  const basket = useSelector((state) => state.entities.order.basket);
  const delivery = useSelector((state) => state.entities.order.delivery);
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
        <div className="subtotalContainer">
          <p className="subtotalElement">Subtotal</p>
          <p className="subtotalElement">£{subTotal}</p>
        </div>
        <Link to={delivery === "delivery" ? "/checkout" : "/order-details"}>
          <button className="addToBasketButton checkoutBtn">
            <p className="m-0">Go to Checkout</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Basket;
