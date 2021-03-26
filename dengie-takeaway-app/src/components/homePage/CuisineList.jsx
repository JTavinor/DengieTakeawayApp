import React from "react";

import CuisineCard from "./cuisineCard";

// Takes each cuisine and renders a list of restaurants for that specific cuisine
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
