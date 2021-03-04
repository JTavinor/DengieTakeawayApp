import React from "react";

import RestaurantList from "./restaurantList";

import "../../css/cuisineCard.css";

// Filters restaurants to those that deliver to the given postcode
// const filteredRestaurants = (cuisine, postcode) =>
//   cuisine.restaurants.filter((restaurant) => {
//     for (let deliversTo of restaurant.postcodes) {
//       if (deliversTo.includes(postcode.slice(0, 3).toUpperCase()))
//         return restaurant;
//     }
//     return null;
//   });

function CuisineCard({ cuisine }) {
  return (
    <React.Fragment>
      <div className="cuisineCard">
        <h1 className="title">{cuisine.cuisine}</h1>
        <div
          className="cuisineBanner cBImage"
          style={{
            backgroundImage: `url(http://localhost:5000/${cuisine.bannerImage})`,
          }}
        />
        <div className="cuisineBanner cBTint" />
      </div>
      <RestaurantList restaurants={cuisine.restaurants} />
    </React.Fragment>
  );
}

export default CuisineCard;
