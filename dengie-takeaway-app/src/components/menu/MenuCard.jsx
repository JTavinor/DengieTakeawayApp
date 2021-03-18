import React from "react";
import SubmenuCard from "./SubmenuCard";

function MenuCard({ menu, restaurantName }) {
  return (
    <React.Fragment>
      <ul>
        {menu.map((subMenu) => (
          <li key={subMenu.category}>
            <SubmenuCard subMenu={subMenu} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default MenuCard;
