import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { itemAdded } from "../../store/order";

function MenuModal({ item, onClose }) {
  const { itemDescription, itemName, itemPrice } = item;
  let [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className="menuModalContainer flexCol">
      <h1 className="menuModalInfo">{itemName}</h1>
      <p className="menuModalInfo">{itemDescription}</p>
      <p className="modalPrice">£{itemPrice}</p>
      <div className="flexRowCenter">
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
        className="addToBasketButton flexRow"
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
