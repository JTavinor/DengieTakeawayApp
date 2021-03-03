import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/menu/basket.css";
import {
  getSubtotal,
  itemQuantityUpdated,
  itemRemoved,
} from "../../store/basket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const basketContainer = {
  backgroundColor: "whitesmoke",
  border: "1px solid gray",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  padding: "15px 30px",
  position: "sticky",
  textAlign: "center",
  top: 15,
  width: "75%",
};

function Basket() {
  // Removing subtotal from basket
  // const itemBasket = { ...basket };
  // delete itemBasket.subtotal;

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.entities.basket);
  // console.log(basket);

  const basketIsNotEmpty = () => {
    return JSON.stringify(basket) !== "{}";
  };

  const getSubtotal = (basket) => {
    let subTotal = 0;
    if (basket.length === 0) return subTotal;
    for (const item of basket) {
      subTotal += item.price;
    }
    return subTotal;
  };

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
    <div style={basketContainer}>
      <h2 className="basketHeader">Your Order</h2>
      <div>
        {basketIsNotEmpty() && renderBasket()}
        <div className="basketSubtotalContainer">
          <p className="basketSubtotalElement">Subtotal</p>
          <p className="basketSubtotalElement">£{getSubtotal(basket)}</p>
        </div>
        <Link to="/checkout">
          <button
            className="addToBasketButton"
            style={{
              width: "100%",
              textAlign: "center",
              padding: "10px",
              justifyContent: "center",
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
