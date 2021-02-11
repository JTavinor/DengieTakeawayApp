import React, { useState } from "react";
import MenuCard from "./MenuCard";
import MenuLocator from "./MenuLocator";
import Basket from "./Basket";
import _ from "lodash";
import "../../css/menu/menu.css";

function Menu({ menu }) {
  const [basket, setBasket] = useState({ subtotal: 0 });

  const addItemToBasket = ({ item, quantity, price }) => {
    const oldTotal = basket.subtotal;

    // If basket does not contain the item
    if (!basket[item])
      return setBasket({
        ...basket,
        [item]: { quantity: quantity, price: _.round(price, 2) },
        subtotal: _.round(oldTotal + price, 2),
      });

    const oldQuantity = basket[item].quantity;
    const oldPrice = basket[item].price;
    // If basket already contains the item
    return setBasket({
      ...basket,
      [item]: {
        quantity: oldQuantity + quantity,
        price: _.round(oldPrice + price, 2),
      },
      subtotal: _.round(oldTotal + price, 2),
    });
  };

  return (
    <div className="menuPageContainer">
      <div className="menuContainer">
        <div style={{ width: "15%" }}>
          <MenuLocator menu={menu} />
        </div>
        <div className="menuCardContainer">
          <MenuCard menu={menu} addItemToBasket={addItemToBasket} />
        </div>

        <div className="menuBasketContainer">
          <Basket basket={basket} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
