import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import MenuModal from "./menuModal";
import MenuModalOptions from "./menuModalOptions";

// Card containing the item name, price, and description
// On clicking the card, opens a modal for the user pick the quantity before adding to the basket
// If the item has multiple options (i.e chicken, beef etc.) a different modal is opened
function ItemCard({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { itemDescription, itemName, itemOptions, itemPrice } = item;

  return (
    <React.Fragment>
      <button
        className="itemCardContainer  shadow"
        onClick={() => setModalIsOpen(true)}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="itemTitlePrice flexRowCenter">
          <h2 className="itemCardElement">{itemName}</h2>
          <p className="itemPrice">£{itemPrice.toFixed(2)}</p>
        </div>
        {itemDescription && (
          <p className="itemCardElement">{itemDescription}</p>
        )}
      </button>

      {/* Modal to be opened on card click
          Modal to be opened is dependent on item having different options or not */}
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} center>
        {!itemOptions && (
          <MenuModal item={item} onClose={() => setModalIsOpen(false)} />
        )}
        {itemOptions && (
          <MenuModalOptions item={item} onClose={() => setModalIsOpen(false)} />
        )}
      </Modal>
    </React.Fragment>
  );
}

export default ItemCard;
