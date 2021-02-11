import React from "react";
import SubmenuCard from "./SubmenuCard";

function MenuCard({ addItemToBasket, menu }) {
  const renderMenu = (menu) => {
    const list = menu.map((subMenu) => (
      <li key={subMenu.category}>
        <SubmenuCard addItemToBasket={addItemToBasket} subMenu={subMenu} />
      </li>
    ));
    return <ul>{list}</ul>;
  };

  return renderMenu(menu);
}

export default MenuCard;
