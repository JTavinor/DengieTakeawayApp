import React from "react";
import RestaurantCard from "./restaurantCard";
import "../../css/restaurantList.css";

function RestaurantList({ restaurants }) {
  const renderRestaurants = (restaurants) => {
    const list = restaurants.map((restaurant) => (
      <li className="restaurantItem">
        <RestaurantCard
          name={restaurant.name}
          openingTimes={restaurant.open}
          start={restaurant.start}
          close={restaurant.close}
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
