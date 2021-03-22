import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { itemAdded } from "../../store/order";

function MenuModalOptions({ item, onClose }) {
  const { itemDescription, itemName, itemOptions } = item;
  const dispatch = useDispatch();

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
              selectedOption === option
                ? "button optionPlus  "
                : "button option"
            }
          >
            <p style={{ margin: 0 }}>{option}</p>{" "}
            <p style={{ margin: 0 }}> £{options[option]}</p>
          </button>
        </li>
      );
    }
    return <ul className="optionsList">{optionsList}</ul>;
  };

  return (
    <div className="menuModalContainer flexCol">
      <h1 className="menuModalInfo">{itemName}</h1>
      <p className="menuModalInfo">{itemDescription}</p>
      <h3 style={{ marginTop: 0 }}>Choose one</h3>
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
          £{selectedOption ? itemOptions[selectedOption] * quantity : 0}
        </div>
      </button>
    </div>
  );
}

export default MenuModalOptions;
