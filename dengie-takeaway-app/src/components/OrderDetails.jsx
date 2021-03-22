import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paymentToggled, submitOrder } from "../store/order";
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkout from "./Checkout";

function OrderDetails(props) {
  const {
    basket,
    customerDetails,
    delivery,
    restaurant,
    subTotal,
    payment,
    restaurantAddress,
  } = useSelector((state) => state.order);
  // const restaurantAddress = useSelector(
  //   (state) => state.menu.restaurantAddress
  // );

  const dispatch = useDispatch();
  const [paymentNotSelected, setPaymentNotSelected] = useState(false);

  return (
    <div>
      <div
        style={{
          margin: "auto",
          backgroundColor: "white",
          width: "60%",
          borderRadius: "10px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Order from {restaurant}</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <h3>Order Items</h3>
            <ul>
              {basket.map((item) => (
                <li
                  className="basketListItem"
                  key={item.itemName}
                  style={{ width: "120%" }}
                >
                  <div className="flexRow">
                    {item.quantity}x {item.itemName}
                  </div>
                  {/* <div className="flexRow"> */}
                  <div>£{item.price}</div>
                  {/* </div> */}
                </li>
              ))}
            </ul>
            <h4>Subtotal: £{subTotal}</h4>
          </div>
          <div>
            {delivery === "delivery" && customerDetails ? (
              <>
                <h3>Delivery To:</h3>
                <ul>
                  {Object.values(customerDetails).map((addressItem) => (
                    <li>{addressItem}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                {" "}
                <h3>Collection From:</h3>
                {restaurantAddress && (
                  <ul>
                    {Object.values(restaurantAddress).map((addressItem) => (
                      <li>{addressItem}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          backgroundColor: "white",
          width: "60%",
          borderRadius: "10px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <h3>Please select a payment option</h3>
        <div
          className="flexRowCenter"
          onChange={(e) => {
            setPaymentNotSelected(false);
            dispatch(paymentToggled({ payment: e.target.value }));
          }}
        >
          <input
            name="paymentToggle"
            type="radio"
            id="cash"
            value="cash"
            defaultChecked={payment === "cash"}
          />
          <label htmlFor="cash" style={{ marginRight: "5px" }}>
            Cash
          </label>
          <input
            name="paymentToggle"
            type="radio"
            id="card"
            value="card"
            defaultChecked={payment === "card"}
            style={{ marginLeft: "5px" }}
          />
          <label htmlFor="card">Card</label>
        </div>
        {paymentNotSelected && (
          <p style={{ color: "red" }}>
            Please choose a payment option to continue
          </p>
        )}
      </div>
      <Link
        to={
          (payment === "cash" && "/order-confirmed") ||
          (payment === "card" && "/card-payment") ||
          "order-details"
        }
        // className={!payment && "disabled-link"}
      >
        <button
          className="addToBasketButton"
          style={{
            width: "150px",
            textAlign: "center",
            padding: "10px",
            justifyContent: "center",
            margin: "auto",
          }}
          onClick={() => {
            if (!payment) return setPaymentNotSelected(true);
            dispatch(submitOrder({ hello: "Moto" }));
          }}
        >
          Submit Order
        </button>
      </Link>
    </div>
  );
}

export default OrderDetails;
