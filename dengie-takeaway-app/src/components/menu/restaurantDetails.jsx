import React from "react";
import { useSelector } from "react-redux";
import { upperFirst, lowerCase } from "lodash";

import { formatOpenTimes } from "../../helpers/homePage";

// Card with details of the restaurant
function RestaurantDetails() {
  const {
    restaurant,
    cuisine,
    openingHours,
    restaurantAddress,
    minimumDelivery,
  } = useSelector((state) => state.menu);

  return (
    <div className="restaurantDetails shadow">
      <h1>{upperFirst(lowerCase(restaurant.replace("-", " ")))}</h1>
      <h2>{cuisine}</h2>
      <ul>
        {Object.values(restaurantAddress).map((addressItem) => (
          <li>{addressItem}</li>
        ))}
      </ul>
      <p>Opening Hours: {formatOpenTimes(openingHours)}</p>
      <p>Minimum order for delivery: £{minimumDelivery}</p>
    </div>
  );
}

export default RestaurantDetails;
