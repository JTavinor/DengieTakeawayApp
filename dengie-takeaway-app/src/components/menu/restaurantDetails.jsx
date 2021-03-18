import React from "react";
import { useSelector } from "react-redux";
import { formatOpenTimes } from "../../helpers/homePage";
import { upperFirst, lowerCase } from "lodash";
function RestaurantDetails(props) {
  const { restaurant } = useSelector((state) => state.entities.order);
  const {
    cuisine,
    openingHours,
    restaurantAddress,
    minimumDelivery,
  } = useSelector((state) => state.entities.menu);

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
        border: "1px solid gray",
        padding: "15px",
        textAlign: "center",
      }}
    >
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
