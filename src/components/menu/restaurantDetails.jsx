import React from "react";
import { useSelector } from "react-redux";
import { startCase, lowerCase } from "lodash";

import { formatOpenTimes } from "../../helpers/homePage";

// Card with details of the restaurant
function RestaurantDetails() {
  const {
    restaurant,
    cuisine,
    openingHours,
    restaurantAddress,
    minimumDelivery,
  } = useSelector((state) => state.menu.data);

  return (
    <div className="restaurantDetails shadow">
      <h1>{startCase(lowerCase(restaurant.replace("-", " ")))}</h1>
      <h2>{cuisine}</h2>
      <ul>
        {Object.values(restaurantAddress).map((addressItem) => (
          <li key={addressItem}>{addressItem}</li>
        ))}
      </ul>
      <p>Opening Hours: {formatOpenTimes(openingHours)}</p>
      <p>Minimum order for delivery: £{minimumDelivery}</p>
    </div>
  );
}

export default RestaurantDetails;
