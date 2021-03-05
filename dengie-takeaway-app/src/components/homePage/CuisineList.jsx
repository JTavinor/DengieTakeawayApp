import React from "react";

import CuisineCard from "./cuisineCard";

import "../../css/homePage/cuisineList.css";

function CuisineList({ cuisines }) {
  return (
    <ul>
      {cuisines.map((cuisine) => (
        <li className="cuisineItem" key={cuisine.cuisineName}>
          <CuisineCard cuisine={cuisine} />
        </li>
      ))}
    </ul>
  );
}

export default CuisineList;
