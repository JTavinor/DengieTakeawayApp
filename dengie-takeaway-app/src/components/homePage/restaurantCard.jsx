import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { checkRestaurantOpen, formatOpenTimes } from "../../helpers/homePage";

import "../../css/homePage/restaurantCard.css";

function RestaurantCard({ restaurant, openingHours, menuId }) {
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(true);

  useEffect(() => {
    checkRestaurantOpen(openingHours, setRestaurantIsOpen);
  }, [openingHours]);

  return (
    <Link
      to={{
        pathname: restaurantIsOpen
          ? `/menu/${restaurant.toLowerCase().split(" ").join("-")}`
          : "/",
        state: {
          menuId: menuId,
          restaurant: restaurant,
        },
      }}
    >
      <div
        className={
          restaurantIsOpen
            ? "restaurantCard"
            : "restaurantCard restaurantClosed"
        }
      >
        <h2>{restaurant}</h2>
        <div className="restaurantInfo">
          <div>
            {restaurantIsOpen ? (
              <span className="open">Open</span>
            ) : (
              <span className="closed">Closed</span>
            )}
          </div>
          <p>Opening Hours: {formatOpenTimes(openingHours)}</p>
        </div>
        {!restaurantIsOpen && <div className="overlay" />}
      </div>
    </Link>
  );
}

export default RestaurantCard;
