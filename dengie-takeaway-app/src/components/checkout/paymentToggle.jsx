import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { paymentOptionToggled } from "../../store/order";

// Allows the user to select a payment option and updates the order accordingly
function PaymentToggle() {
  const dispatch = useDispatch();

  const { paymentOption } = useSelector((state) => state.order);

  return (
    <div className="deliveryToggleCont shadow paymentContainer">
      <h4 className="mt-0">Payment option</h4>
      <div
        className="flexRowCenter paymentToggleGroup"
        onChange={(e) =>
          dispatch(paymentOptionToggled({ paymentOption: e.target.value }))
        }
      >
        <div style={{ marginRight: "10px" }}>
          <input
            name="paymentToggle"
            type="radio"
            id="cash"
            value="cash"
            defaultChecked={paymentOption === "cash"}
          />
          <label htmlFor="cash" style={{ marginRight: "5px" }}>
            Cash
          </label>
        </div>
        <div>
          <input
            name="paymentToggle"
            type="radio"
            id="card"
            value="card"
            defaultChecked={paymentOption === "card"}
            style={{ marginLeft: "5px" }}
          />
          <label htmlFor="card">Card</label>
        </div>
      </div>
    </div>
  );
}

export default PaymentToggle;
