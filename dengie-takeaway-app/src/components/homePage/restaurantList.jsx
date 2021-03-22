import React from "react";

import RestaurantCard from "./restaurantCard";

function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ restaurant, openingHours }) => (
        <li className="restaurantItem borderRound" key={restaurant}>
          <RestaurantCard restaurant={restaurant} openingHours={openingHours} />
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
