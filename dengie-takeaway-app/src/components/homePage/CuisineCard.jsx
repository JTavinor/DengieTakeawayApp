import React from "react";

import { baseUrl } from "../../config/url";

import RestaurantList from "./restaurantList";

// For each cuisine in CuisineList, renders a cuisine header with the Cuisine name and backgorund image
// Renders a list of restaurant cards that are of the specific cuisine
function CuisineCard({ cuisine }) {
  const { bannerImage: cBImage, cuisineName, restaurants } = cuisine;
  return (
    <React.Fragment>
      <div className="cuisineCard borderRound flexRow">
        <h1 className="cuisineTitle">{cuisineName}</h1>
        <div
          className="cuisineBanner cBImage borderRound shadow"
          style={{
            backgroundImage: `url(${baseUrl}/${cBImage})`,
          }}
        />
        <div className="cuisineBanner cBTint borderRound shadow" />
      </div>
      <RestaurantList restaurants={restaurants} />
    </React.Fragment>
  );
}

export default CuisineCard;
