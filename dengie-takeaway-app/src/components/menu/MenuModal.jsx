import React, { useState } from "react";
import _ from "lodash";

import "../../css/menu/menuModals.css";

function MenuModal({ addItemToBasket, itemDescription, itemName, itemPrice }) {
  let [quantity, setQuantity] = useState(1);

  return (
    <div className="menuModalContainer">
      <h1 className="menuModalInfo">{itemName}</h1>
      <p className="menuModalInfo">{itemDescription}</p>
      <p>£{itemPrice}</p>
      <div className="counterContainer">
        <button
          disabled={quantity <= 1}
          className="counterButton minus"
          onClick={() => setQuantity((quantity -= 1))}
        >
          -
        </button>
        <div className="counter">{quantity}</div>
        <button
          className="counterButton plus"
          onClick={() => setQuantity((quantity += 1))}
        >
          +
        </button>
      </div>
      <button
        className="addToBasketButton"
        onClick={() =>
          addItemToBasket({
            item: itemName,
            quantity,
            price: _.round(quantity * itemPrice, 2),
          })
        }
      >
        <div className="addToBasketButtonInfo">Add to order</div>
        <div className="addToBasketButtonInfo">£{itemPrice * quantity}</div>
      </button>
    </div>
  );
}

export default MenuModal;
