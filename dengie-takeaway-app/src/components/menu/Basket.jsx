import React from "react";
import "../../css/menu/basket.css";

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

function Basket({ basket }) {
  // Removing subtotal from basket
  const itemBasket = { ...basket };
  delete itemBasket.subtotal;

  const basketIsNotEmpty = () => {
    return JSON.stringify(itemBasket) !== "{}";
  };

  const renderBasket = () => {
    const basketList = [];
    for (const item in itemBasket) {
      basketList.push(
        <li className="basketListItem" key={item}>
          <div>
            {itemBasket[item].quantity}x {item}
          </div>
          <div>Price: £{itemBasket[item].price}</div>
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
          <p className="basketSubtotalElement">£{basket.subtotal}</p>
        </div>
      </div>
    </div>
  );
}

export default Basket;
