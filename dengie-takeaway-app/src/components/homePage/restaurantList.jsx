import React from "react";

import RestaurantCard from "./restaurantCard";

import "../../css/homePage/restaurantList.css";

function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ restaurant, openingHours, menuId }) => (
        <li className="restaurantItem" key={restaurant}>
          <RestaurantCard
            restaurant={restaurant}
            openingHours={openingHours}
            menuId={menuId}
          />
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
