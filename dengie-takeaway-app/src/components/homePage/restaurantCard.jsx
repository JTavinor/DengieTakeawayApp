import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  checkRestaurantOpen,
  formatOpenTimes,
  toUrlSlug,
} from "../../helpers/homePage";

function RestaurantCard({ restaurant: restaurantName, openingHours }) {
  const [restaurantIsOpen, setRestaurantIsOpen] = useState(true);

  useEffect(() => {
    checkRestaurantOpen(openingHours, setRestaurantIsOpen);
  }, [openingHours]);

  return (
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
