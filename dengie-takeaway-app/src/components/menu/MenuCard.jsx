import React from "react";
import SubmenuCard from "./SubmenuCard";

function MenuCard({ menu }) {
  return (
    <ul>
      {menu.map((subMenu) => (
        <li key={subMenu.category}>
          <SubmenuCard subMenu={subMenu} />
        </li>
      ))}
    </ul>
  );
}

export default MenuCard;
