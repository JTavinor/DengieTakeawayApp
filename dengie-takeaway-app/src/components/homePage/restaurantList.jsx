import React from "react";

import RestaurantCard from "./restaurantCard";

import "../../css/restaurantList.css";

const renderRestaurants = (restaurants) => {
  const restaurantList = restaurants.map(
    ({ restaurant, openingHours, menuId }) => (
      <li className="restaurantItem" key={restaurant}>
        <RestaurantCard
          restaurant={restaurant}
          openingHours={openingHours}
          menuId={menuId}
        />
      </li>
    )
  );
  return <ul>{restaurantList}</ul>;
};

function RestaurantList({ restaurants }) {
  return <div>{renderRestaurants(restaurants)}</div>;
}

export default RestaurantList;
