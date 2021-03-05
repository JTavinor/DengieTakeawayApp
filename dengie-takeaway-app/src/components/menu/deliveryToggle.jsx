import React from "react";
import { useDispatch } from "react-redux";
import { deliveryToggled } from "../../store/order";

function DeliveryToggle() {
  const dispatch = useDispatch();

  return (
    <div
      className="flexRowCenter"
      onChange={(e) => dispatch(deliveryToggled({ delivery: e.target.value }))}
    >
      <input type="radio" id="delivery" value="delivery" defaultChecked />
      <label htmlFor="delivery">Delivery</label>
      <input type="radio" id="collection" value="collection" />
      <label htmlFor="collection">Collection</label>
    </div>
  );
}

export default DeliveryToggle;
