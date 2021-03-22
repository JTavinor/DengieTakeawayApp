import React from "react";
import ItemCard from "./itemCard";

function SubmenuCard({ subMenu }) {
  const { category, description, items } = subMenu;
  return (
    <div className="subMenuCardContainer" id={category}>
      <h1 className="subMenuCardHeader">{category}</h1>
      <p>{description}</p>
      <ul className="subMenuList">
        {items.map((item) => (
          <li key={item.itemName}>
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubmenuCard;
