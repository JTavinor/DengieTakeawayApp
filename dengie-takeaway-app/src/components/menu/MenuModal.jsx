import React, { useState } from "react";
import _ from "lodash";
import { itemAdded } from "../../store/basket";

import "../../css/menu/menuModals.css";
import { useDispatch } from "react-redux";

function MenuModal({ itemDescription, itemName, itemPrice, onClose }) {
  let [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

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
        onClick={() => {
          dispatch(
            itemAdded({
              itemName: itemName,
              quantity: quantity,
              price: quantity * itemPrice,
            })
          );
          onClose();
        }}
      >
        <div className="addToBasketButtonInfo">Add to order</div>
        <div className="addToBasketButtonInfo">£{itemPrice * quantity}</div>
      </button>
    </div>
  );
}

export default MenuModal;
