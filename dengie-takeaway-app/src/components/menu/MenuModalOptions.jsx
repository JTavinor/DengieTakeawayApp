import React, { useState } from "react";
import "../../css/menu/menuModals.css";

function MenuModalOptions({
  addItemToBasket,
  itemDescription,
  itemName,
  itemOptions,
}) {
  let [quantity, setQuantity] = useState(1);
  let [selectedOption, setSelectedOption] = useState("");

  const renderOptions = (options) => {
    var optionsList = [];
    for (const option in options) {
      optionsList.push(
        <li className="optionsListItem" key={option}>
          <button
            onClick={() => setSelectedOption(option)}
            className={
              selectedOption === option ? "activeButton " : "optionButton"
            }
          >
            {option} {options[option]}
          </button>
        </li>
      );
    }
    return <ul className="optionsList">{optionsList}</ul>;
  };

  return (
    <div className="menuModalContainer">
      <h1 className="menuModalInfo">{itemName}</h1>
      <p className="menuModalInfo">{itemDescription}</p>
      <h3>Choose one</h3>
      {renderOptions(itemOptions)}
      {selectedOption && (
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
      )}
      <button
        className="addToBasketButton"
        onClick={() =>
          addItemToBasket({
            item: `${itemName}: ${selectedOption}`,
            quantity: quantity,
            price: quantity * itemOptions[selectedOption],
          })
        }
      >
        <div className="addToBasketButtonInfo">Add to order</div>
        <div className="addToBasketButtonInfo">
          £{selectedOption ? itemOptions[selectedOption] * quantity : 0}
        </div>
      </button>
    </div>
  );
}

export default MenuModalOptions;
