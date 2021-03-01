import React from "react";
import RestaurantCard from "./restaurantCard";
import "../../css/restaurantList.css";

function RestaurantList({ restaurants }) {
  const renderRestaurants = (restaurants) => {
    const list = restaurants.map((restaurant) => (
      <li className="restaurantItem">
        <RestaurantCard
          restaurant={restaurant.restaurant}
          openingHours={restaurant.openingHours}
          menuId={restaurant.menuId}
        />
      </li>
    ));
    return <ul className="restaurantList">{list}</ul>;
  };

  return (
    <div className="restaurantContainer">{renderRestaurants(restaurants)}</div>
  );
}

export default RestaurantList;
