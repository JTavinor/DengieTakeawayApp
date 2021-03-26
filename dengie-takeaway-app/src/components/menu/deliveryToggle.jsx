import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deliveryToggled } from "../../store/order";

// Sticky does not work when placed in CSS file - don't know why!
const toggleContainer = {
  position: "sticky",
  top: 15,
};

// Radio group for selecting delivery option
// Updates order accordingly
function DeliveryToggle({ checkout, modal, sticky }) {
  const dispatch = useDispatch();
  const deliveryOption = useSelector((state) => state.order.delivery);

  return (
    <div
      style={sticky ? toggleContainer : null}
      className={
        !modal ? "deliveryToggleCont shadow" : "deliveryToggleContModal"
      }
      onChange={(e) => dispatch(deliveryToggled({ delivery: e.target.value }))}
    >
      {checkout && <h4 className="mt-0">Delivery option</h4>}
      <div className="flexRowCenter">
        <div style={{ marginRight: "10px" }}>
          <input
            className="deliveryToggle"
            name={!modal ? "deliveryToggle" : "deliveryToggleModal"}
            type="radio"
            id="delivery"
            value="delivery"
            checked={deliveryOption === "delivery"}
          />
          <label htmlFor="delivery">Delivery</label>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <input
            className="deliveryToggle"
            name={!modal ? "deliveryToggle" : "deliveryToggleModal"}
            type="radio"
            id="collection"
            value="collection"
            checked={deliveryOption === "collection"}
          />
          <label htmlFor="collection">Collection</label>
        </div>
      </div>
    </div>
  );
}

export default DeliveryToggle;
