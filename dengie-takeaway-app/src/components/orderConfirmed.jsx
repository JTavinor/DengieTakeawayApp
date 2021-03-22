import React from "react";
import { useSelector } from "react-redux";
import ApiError from "./common/error";
import LoadingIcon from "./common/loadingIcon";

function OrderConfirmed(props) {
  const loading = useSelector((state) => state.order.loading);
  const orderId = useSelector((state) => state.order.orderId);
  const error = useSelector((state) => state.order.error);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 280px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // margin: "auto",
            backgroundColor: "white",
            width: "60%",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifySelf: "center",
          }}
        >
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
    </>
  );
}

export default OrderConfirmed;
