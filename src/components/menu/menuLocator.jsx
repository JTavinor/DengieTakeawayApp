import React, { useState } from "react";

// Sticky does not work when put in CSS filee - dont' know why!
const stickyContainer = {
  position: "sticky",
  top: 15,
  margin: "auto",
  paddingLeft: "10px",
  marginRight: "30px",
  width: "100%",
};

// A list of sections of the menu.
// Clicking on a section will scroll the page to that section
function MenuLocator({ menu }) {
  const [category, setCategory] = useState("");

  const renderLocatorList = (menu) => {
    const categoryList = menu.map((subMenu) => (
      <li key={subMenu.category}>
        <a
          href={`#${subMenu.category}`}
          className={`locatorButton ${
            category === subMenu.category && "active"
          }`}
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
      {renderLocatorList(menu)}
    </div>
  );
}

export default MenuLocator;
