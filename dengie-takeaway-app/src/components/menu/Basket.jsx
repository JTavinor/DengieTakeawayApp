import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { itemQuantityUpdated, itemRemoved } from "../../store/basket";
import { basketAdded, deliveryToggled } from "../../store/order";

import "../../css/menu/basket.css";

const basketContainer = {
  position: "sticky",
  top: 15,
};

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.entities.basket);
  const order = useSelector((state) => state.entities.order);
  const delivery = useSelector((state) => state.entities.order.delivery);

  // Get from order slice
  const getSubtotal = (basket) => {
    let subTotal = 0;
    if (basket.length === 0) return subTotal;
    for (const item of basket) {
      subTotal += item.price;
    }
    return subTotal;
  };

  // Absract to orderSlice action
  const decrementItem = (item) => {
    if (basket[item].quantity > 1) {
      return dispatch(
        itemQuantityUpdated({
          itemName: basket[item].itemName,
          quantity: -1,
          price: basket[item].price,
        })
      );
    } else {
      dispatch(itemRemoved({ itemName: basket[item].itemName }));
    }
  };

  // Absract to orderSlice action
  const incrementItem = (item) => {
    dispatch(
      itemQuantityUpdated({
        itemName: basket[item].itemName,
        quantity: 1,
        price: basket[item].price,
      })
    );
  };

  const renderBasket = () => {
    const basketList = [];
    for (const item in basket) {
      basketList.push(
        <li className="basketListItem" key={item}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {basket[item].quantity}x {basket[item].itemName}
            <div className="counterContainer">
              <button
                className="counterButton minus smallButton"
                onClick={() => decrementItem(item)}
              >
                -
              </button>
              <button
                className="counterButton plus smallButton"
                onClick={() => incrementItem(item)}
              >
                +
              </button>
            </div>
          </div>
          <div>Price: £{basket[item].price}</div>
          <button
            className="counterButton minus smallButton"
            onClick={() =>
              dispatch(itemRemoved({ itemName: basket[item].itemName }))
            }
          >
            <FontAwesomeIcon icon={faTrashAlt} size="xs" />
          </button>
        </li>
      );
    }
    return <ul className="basketList">{basketList}</ul>;
  };

  return (
    <div style={basketContainer} className="basketContainer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        onChange={(e) =>
          dispatch(deliveryToggled({ delivery: e.target.value }))
        }
      >
        <br />
        <input
          type="radio"
          id="delivery"
          name="gender"
          value="delivery"
          defaultChecked
        />
        <label for="delivery">Delivery</label>
        <input type="radio" id="collection" name="gender" value="collection" />
        <label for="collection">Collection</label>
        <br />
      </div>
      <h2 className="basketHeader">Your Order</h2>
      <div>
        {renderBasket()}
        <div className="basketSubtotalContainer">
          <p className="basketSubtotalElement">Subtotal</p>
          <p className="basketSubtotalElement">£{getSubtotal(basket)}</p>
        </div>
        <Link to={delivery === "delivery" ? "/checkout" : "/order-details"}>
          <button
            className="addToBasketButton"
            style={{
              width: "100%",
              textAlign: "center",
              padding: "10px",
              justifyContent: "center",
            }}
            onClick={() => {
              dispatch(basketAdded({ basket: basket }));
            }}
          >
            <p style={{ margin: 0 }}>Go to Checkout</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Basket;
