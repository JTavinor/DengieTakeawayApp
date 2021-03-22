import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { decrementItem, incrementItem, itemRemoved } from "../../store/order";

import IncrementButton from "./incrementButton";

function BasketItem({ item }) {
  const { itemName, quantity, price } = item;

  return (
    <>
      <div className="flexRowCenter">
        {quantity}x {itemName}
        <div className="counterContainer">
          <IncrementButton
            handler={decrementItem}
            itemName={itemName}
            price={price}
            title="-"
            styles="minus basketButton"
          />
          <IncrementButton
            handler={incrementItem}
            itemName={itemName}
            price={price}
            title="+"
            styles="plus basketButton"
          />
          <IncrementButton
            handler={itemRemoved}
            itemName={itemName}
            title={<FontAwesomeIcon icon={faTrashAlt} size="xs" />}
            styles="minus basketButton"
          />
        </div>
      </div>
      <div>Price: £{price}</div>
    </>
  );
}

export default BasketItem;
