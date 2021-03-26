import React from "react";

import SubmenuCard from "./SubmenuCard";

// The menu for the restaurant. Splits the menu into sections.
function MenuCard({ menu }) {
  return (
    <ul className="menuList">
      {menu.map((subMenu) => (
        <li key={subMenu.category}>
          <SubmenuCard subMenu={subMenu} />
        </li>
      ))}
    </ul>
  );
}

export default MenuCard;
