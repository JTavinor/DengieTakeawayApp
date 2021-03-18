import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { decrementItem, incrementItem, itemRemoved } from "../../store/order";

import IncrementButton from "./incrementButton";

function BasketItem({ item }) {
  const { itemName, quantity, price } = item;

  return (
    <li className="basketListItem" key={itemName}>
      <div className="flexRow">
        {quantity}x {itemName}
        <div className="counterContainer">
          <IncrementButton
            handler={decrementItem}
            itemName={itemName}
            price={price}
            title="-"
            styles="minus smallButton"
          />
          <IncrementButton
            handler={incrementItem}
            itemName={itemName}
            price={price}
            title="+"
            styles="plus smallButton"
          />
        </div>
      </div>
      <div className="flexRow">
        <div>Price: £{price}</div>
        <IncrementButton
          handler={itemRemoved}
          itemName={itemName}
          title={<FontAwesomeIcon icon={faTrashAlt} size="xs" />}
          styles="minus smallButton"
        />
      </div>
    </li>
  );
}

export default BasketItem;
