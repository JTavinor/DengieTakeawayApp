import React from "react";

import RestaurantCard from "./restaurantCard";

// Receives a list of restaurants for the current Cuisine from the parent CusineCard and renders a list of restaurants for that cuisine
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
