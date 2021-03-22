import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import MenuModal from "./menuModal";
import MenuModalOptions from "./menuModalOptions";

function ItemCard({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { itemDescription, itemName, itemOptions, itemPrice } = item;

  return (
    <>
      <button
        className="itemCardContainer flexCol shadow"
        onClick={() => setModalIsOpen(true)}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="itemTitlePrice flexRowCenter">
          <h2 className="itemCardElement">{itemName}</h2>
          <p className="itemPrice">£{itemPrice}</p>
        </div>
        {itemDescription && (
          <p className="itemCardElement">{itemDescription}</p>
        )}
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
