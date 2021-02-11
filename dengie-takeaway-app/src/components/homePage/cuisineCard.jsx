import React from "react";
import "../../css/cuisineCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import colors from "../../config/colors";
import RestaurantList from "./restaurantList";

function CuisineCard({ cuisine }) {
  return (
    <div classname="cont">
      <div className="CuisineCard" style={{ color: colors.white }}>
        <h1 className="title">{cuisine.name}</h1>
        {/* <div className="chevron">
          <FontAwesomeIcon icon={faChevronDown} size="5x" />
        </div> */}
        <div
          className="bg"
          style={{
            backgroundImage: `url(${cuisine.background})`,
          }}
        />
        <div className="tint" />
      </div>
      <RestaurantList restaurants={cuisine.restaurants} />
    </div>
  );
}

export default CuisineCard;
