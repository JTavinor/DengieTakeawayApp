import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import "../../css/menu/itemCard.css";

import MenuModal from "./MenuModal";
import MenuModalOptions from "./MenuModalOptions";

function ItemCard({
  addItemToBasket,
  itemDescription,
  itemName,
  itemOptions,
  itemPrice,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        className="itemCardWrapperButton"
        onClick={() => setModalIsOpen(true)}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="itemCardContainer">
          <h2 className="itemCardElement">{itemName}</h2>
          {itemDescription && (
            <p className="itemCardElement">{itemDescription}</p>
          )}
          <p>£{itemPrice}</p>
        </div>
      </button>

      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} center>
        {!itemOptions && (
          <MenuModal
            addItemToBasket={addItemToBasket}
            itemDescription={itemDescription}
            itemPrice={itemPrice}
            itemName={itemName}
            onClose={() => setModalIsOpen(false)}
          />
        )}
        {itemOptions && (
          <MenuModalOptions
            addItemToBasket={addItemToBasket}
            itemDescription={itemDescription}
            itemOptions={itemOptions}
            itemName={itemName}
            onClose={() => setModalIsOpen(false)}
          />
        )}
      </Modal>
    </>
  );
}

export default ItemCard;
