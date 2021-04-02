import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { itemAdded } from "../../store/order";

import { renderOptions } from "../../helpers/menu";

// Modal for when an menu item has options (i.e. chicken, beef etc.)
// Allows you to choose an option, quantity, and add item to basket
function MenuModalOptions({ item, onClose }) {
  const { itemDescription, itemName, itemOptions } = item;
  const dispatch = useDispatch();

  let [quantity, setQuantity] = useState(1);
  let [selectedOption, setSelectedOption] = useState("");

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="menuModalContainer flexCol">
      <h1 className="menuModalInfo mb-0">{itemName}</h1>
      <p className="menuModalInfo">{itemDescription}</p>
      <h3 style={{ marginTop: 0 }}>Choose one</h3>
      {renderOptions(itemOptions, selectedOption, selectOption)}
      {selectedOption && (
        <div className="counterContainer">
          <button
            disabled={quantity <= 1}
            className="counterButton minusModal"
            onClick={() => setQuantity((quantity -= 1))}
          >
            -
          </button>
          <div className="counter">{quantity}</div>
          <button
            className="counterButton plusModal"
            onClick={() => setQuantity((quantity += 1))}
          >
            +
          </button>
        </div>
      )}
      <button
        className="addToBasketButton flexRow"
        disabled={!selectedOption}
        onClick={() => {
          dispatch(
            itemAdded({
              itemName: `${itemName}: ${selectedOption}`,
              quantity: quantity,
              price: quantity * itemOptions[selectedOption],
            })
          );
          onClose();
        }}
      >
        <div className="addToBasketButtonInfo">Add to order</div>
        <div className="addToBasketButtonInfo">
          £
          {selectedOption
            ? (itemOptions[selectedOption] * quantity).toFixed(2)
            : 0}
        </div>
      </button>
    </div>
  );
}

export default MenuModalOptions;
