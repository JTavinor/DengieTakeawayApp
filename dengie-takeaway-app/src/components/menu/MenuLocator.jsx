import React, { useState } from "react";
import "../../css/menu/menuLocator.css";

const stickyContainer = {
  position: "sticky",
  top: 15,
  margin: "auto",
  paddingLeft: "10px",
  marginRight: "30px",
};

function MenuLocator({ menu }) {
  const [category, setCategory] = useState("");

  const renderMenu = (menu) => {
    const categoryList = menu.map((subMenu) => (
      <li
        className={
          category === subMenu.category
            ? "active categoryListItem"
            : "categoryListItem"
        }
        key={subMenu.category}
      >
        <a
          href={`#${subMenu.category}`}
          className={
            category === subMenu.category
              ? "active locatorButton"
              : "locatorButton"
          }
          onClick={(e) => setCategory(subMenu.category)}
        >
          {subMenu.category}
        </a>
      </li>
    ));
    return <ul className="categoryList">{categoryList}</ul>;
  };

  return (
    <div style={stickyContainer}>
      <h3 className="menuLocatorHeader">Categories</h3>
      {renderMenu(menu)}
    </div>
  );
}

export default MenuLocator;
