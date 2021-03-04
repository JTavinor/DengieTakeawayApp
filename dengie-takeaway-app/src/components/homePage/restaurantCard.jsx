import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import "../../css/restaurantCard.css";

const checkRestaurantOpen = (openingHours, setRestaurantIsOpen) => {
  const now = new Date();
  const hours = now.getHours();
  hours < openingHours[1] && hours >= openingHours[0]
    ? setRestaurantIsOpen(true)
    : setRestaurantIsOpen(false);
};

const formatOpenTimes = (openingHours) => {
  let openHour = openingHours[0];
  let openMinute = "00";
  let closeHour = openingHours[1];
  let closeMinute = "00";
  if (Math.floor(openingHours[0]) !== openingHours[0])
    openMinute = (openHour - Math.floor(openingHours[0])) * 60;
  openHour = Math.floor(openingHours[0]);
  if (Math.floor(openingHours[1]) !== openingHours[1])
    closeMinute = (closeHour - Math.floor(openingHours[1])) * 60;
  closeHour = Math.floor(openingHours[1]);

  return `${openHour}:${openMinute} - ${closeHour}:${closeMinute}`;
};

function RestaurantCard({ restaurant, openingHours, menuId }) {
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(true);

  useEffect(() => {
    checkRestaurantOpen(openingHours, setRestaurantIsOpen);
  }, [openingHours]);

  return (
    <Link
      to={{
        pathname: restaurantIsOpen
          ? `/menu/${_.camelCase(restaurant.split(" ").join(""))}`
          : "/",
        state: {
          menuId: menuId,
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
