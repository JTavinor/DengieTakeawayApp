import React, { useEffect, useState } from "react";
import "../../css/restaurantCard.css";

import _ from "lodash";

import { Link } from "react-router-dom";

function RestaurantCard({ restaurant, openingHours, menuId }) {
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(true);

  useEffect(() => {
    checkTime();
  });

  const checkTime = () => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < openingHours[1] && hours >= openingHours[0])
      return setRestaurantIsOpen(true);
    return setRestaurantIsOpen(false);
  };

  const formatOpenTimes = () => {
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

  return (
    <div>
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
          className={restaurantIsOpen ? "container" : "container closed"}
          style={{ position: "relative", height: "80px" }}
        >
          <h2 className="name">{restaurant}</h2>
          <div className="openInfo">
            <div>
              {restaurantIsOpen ? (
                <span style={{ color: "green" }}>Open</span>
              ) : (
                <span style={{ color: "tomato" }}>Closed</span>
              )}
            </div>
            <p className="times">Opening Hours: {formatOpenTimes()}</p>
            {/* </div> */}
          </div>
          {!restaurantIsOpen && (
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "tomato",
                zIndex: 20,
                height: "100%",
                width: "100%",
                opacity: 0.2,
              }}
            />
          )}
        </div>
      </Link>
    </div>
  );
}

export default RestaurantCard;
