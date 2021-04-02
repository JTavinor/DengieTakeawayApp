import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  checkRestaurantOpen,
  formatOpenTimes,
  toUrlSlug,
} from "../../helpers/homePage";

// Contains the restaurant name and opening times
// Links to the restaurants menu when clicked
// If the restaurant is closed, disables the link and gives the card a red overlay
function RestaurantCard({ restaurant: restaurantName, openingHours }) {
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(true);

  // On homepage load checks whether restaurant is open
  useEffect(() => {
    checkRestaurantOpen(openingHours, setRestaurantIsOpen);
  }, [openingHours]);

  return (
    // Links to the restaurants menu and converts to restaurant name to a url slug
    <Link to={restaurantIsOpen ? `/menu/${toUrlSlug(restaurantName)}` : "/"}>
      <div
        className={`restaurantCard borderRound shadow ${
          !restaurantIsOpen ? "restaurantClosed" : ""
        }`}
      >
        <h2>{restaurantName}</h2>
        <div className="restaurantInfo flexRow">
          <div>
            {restaurantIsOpen ? (
              <span className="open">Open</span>
            ) : (
              <span className="closed">Closed</span>
            )}
          </div>
          <p>Opening Hours: {formatOpenTimes(openingHours)}</p>
        </div>
        {!restaurantIsOpen && <div className="overlay borderRound" />}
      </div>
    </Link>
  );
}

export default RestaurantCard;
