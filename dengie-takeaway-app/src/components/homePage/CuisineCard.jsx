import React from "react";
import "../../css/cuisineCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";
import RestaurantList from "./restaurantList";

function CuisineCard({ cuisine, postcode }) {
  const filteredRestaurants = cuisine.restaurants.filter((restaurant) => {
    // if (postcode.length === 0) return restaurant;
    for (let code of restaurant.postcodes) {
      if (code.includes(postcode.toUpperCase())) return restaurant;
    }
    return restaurant.postcodes.includes(postcode.toUpperCase());
  });

  return (
    <div classname="cont">
      <div className="CuisineCard" style={{ color: colors.white }}>
        <h1 className="title">{cuisine.cuisine}</h1>
        {/* <div className="chevron">
          <FontAwesomeIcon icon={faChevronDown} size="5x" />
        </div> */}
        <div
          className="bg"
          style={{
            backgroundImage: `url(http://localhost:5000/${cuisine.bannerImage})`,
          }}
        />
        <div className="tint" />
      </div>
      <RestaurantList restaurants={filteredRestaurants} />
    </div>
  );
}

export default CuisineCard;
