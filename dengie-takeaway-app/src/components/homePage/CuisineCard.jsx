import React from "react";
import _ from "lodash";

import { baseUrl } from "../../config/url";

import RestaurantList from "./restaurantList";

import "../../css/homePage/cuisineCard.css";

function CuisineCard({ cuisine }) {
  return (
    <React.Fragment>
      <div className="cuisineCard">
        <h1 className="title">
          {_.startCase(_.camelCase(cuisine.cuisineName))}
        </h1>
        <div
          className="cuisineBanner cBImage"
          style={{
            backgroundImage: `url(${baseUrl}/${cuisine.bannerImage})`,
          }}
        />
        <div className="cuisineBanner cBTint" />
      </div>
      <RestaurantList restaurants={cuisine.restaurants} />
    </React.Fragment>
  );
}

export default CuisineCard;
