import React from "react";
import { useSelector } from "react-redux";

import ApiError from "../common/error";
import LoadingIcon from "../common/loadingIcon";

// Confirms the order has been successful
// If the order cannot be POSTed to the DB user will receive an error message
// Else they will receive confirmation along with an order ID
function OrderConfirmed() {
  const { error, loading, orderId } = useSelector((state) => state.order);

  return (
    <div className="orderConfirmedCont">
      <div className="orderConfirmed shadow">
        {loading && <LoadingIcon />}
        {!loading && !error && (
          <>
            <h1>Order Confirmed</h1>
            <p>Your order has been received by the restaurant</p>
            <p>Order id: {orderId}</p>
            <p>Thank you for ordering from DengieTakeaways</p>
          </>
        )}
        {error && <ApiError error={error} />}
      </div>
    </div>
  );
}

export default OrderConfirmed;
