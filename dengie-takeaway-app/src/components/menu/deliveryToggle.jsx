import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliveryToggled } from "../../store/order";

function DeliveryToggle() {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.entities.order.delivery);

  return (
    <div
      className="flexRowCenter"
      onChange={(e) => dispatch(deliveryToggled({ delivery: e.target.value }))}
    >
      <input
        name="deliveryToggle"
        type="radio"
        id="delivery"
        value="delivery"
        checked={delivery === "delivery"}
      />
      <label htmlFor="delivery">Delivery</label>
      <input
        name="deliveryToggle"
        type="radio"
        id="collection"
        value="collection"
        checked={delivery === "collection"}
      />
      <label htmlFor="collection">Collection</label>
    </div>
  );
}

export default DeliveryToggle;
