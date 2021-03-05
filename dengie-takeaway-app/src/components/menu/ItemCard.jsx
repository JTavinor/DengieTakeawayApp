import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import MenuModal from "./MenuModal";
import MenuModalOptions from "./MenuModalOptions";

import "../../css/menu/itemCard.css";

function ItemCard({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { itemDescription, itemName, itemOptions, itemPrice } = item;

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
          <MenuModal item={item} onClose={() => setModalIsOpen(false)} />
        )}
        {itemOptions && (
          <MenuModalOptions item={item} onClose={() => setModalIsOpen(false)} />
        )}
      </Modal>
    </>
  );
}

export default ItemCard;
