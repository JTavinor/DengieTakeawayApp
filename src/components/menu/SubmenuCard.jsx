import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import ItemCard from "./itemCard";

// A section of the menu. Contains a section title and renders a list of item in that section
// On mid/narrow screens each section becomes collapsable
function SubmenuCard({ subMenu }) {
  const { category, description, items } = subMenu;
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="subMenuCardContainer" id={category}>
      <button
        className={`dropDownButton ${isCollapsed && "dropDownButtonCollapsed"}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flexRow" style={{ justifyContent: "space-between" }}>
          <div>
            <h1 className="subMenuCardHeader">{category}</h1>
            <p>{description}</p>
          </div>
          <div className="downChevron">
            {isCollapsed && <FontAwesomeIcon icon={faChevronDown} size="3x" />}
            {!isCollapsed && <FontAwesomeIcon icon={faChevronUp} size="3x" />}
          </div>
        </div>
      </button>
      <ul className={`subMenuList ${isCollapsed && "collapsedSubMenu"}`}>
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
