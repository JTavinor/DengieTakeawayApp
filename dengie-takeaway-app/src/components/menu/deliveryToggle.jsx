import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliveryToggled } from "../../store/order";

const toggleContainer = {
  position: "sticky",
  top: 15,
};

function DeliveryToggle() {
  const dispatch = useDispatch();
  const deliveryOption = useSelector((state) => state.order.delivery);

  return (
    <div
      style={toggleContainer}
      className="flexRowCenter deliveryToggleCont shadow"
      onChange={(e) => dispatch(deliveryToggled({ delivery: e.target.value }))}
    >
      <div>
        <input
          className="deliveryToggle"
          name="deliveryToggle"
          type="radio"
          id="delivery"
          value="delivery"
          checked={deliveryOption === "delivery"}
        />
        <label htmlFor="delivery">Delivery</label>
      </div>
      <div>
        <input
          className="deliveryToggle"
          name="deliveryToggle"
          type="radio"
          id="collection"
          value="collection"
          checked={deliveryOption === "collection"}
        />
        <label htmlFor="collection">Collection</label>
      </div>
    </div>
  );
}

export default DeliveryToggle;
