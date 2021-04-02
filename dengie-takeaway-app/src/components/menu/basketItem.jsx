import React from "react";

import { decrementItem, incrementItem } from "../../store/order";

import IncrementButton from "./incrementButton";

// Renders an item in the basket
// Allows you to increment/decrement an item quantity
// If quantity -> 0, removes item from basket
// Gives you quantity, item name, and total price
function BasketItem({ item }) {
  const { itemName, quantity, price } = item;

  return (
    <React.Fragment>
      <div className="flexRowCenter" style={{ textAlign: "left" }}>
        <IncrementButton
          handler={decrementItem}
          itemName={itemName}
          price={price}
          title="-"
          styles="minus basketButton"
        />
        {quantity}{" "}
        <IncrementButton
          handler={incrementItem}
          itemName={itemName}
          price={price}
          title="+"
          styles="plus basketButton"
        />
        {"   "}
        {itemName}
      </div>
      <div>£{price.toFixed(2)}</div>
    </React.Fragment>
  );
}

export default BasketItem;
