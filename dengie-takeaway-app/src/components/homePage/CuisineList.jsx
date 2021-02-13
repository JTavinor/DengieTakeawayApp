import React from "react";
import CuisineCard from "./CuisineCard";
import "../../css/cuisineList.css";

function CuisineList({ cuisines }) {
  const renderCuisines = (cuisines) => {
    const list = cuisines.map((cuisine) => (
      <li className="cuisineItem">
        <CuisineCard cuisine={cuisine} />
      </li>
    ));
    return <ul className="cuisineList">{list}</ul>;
  };

  return <div className="cuisineContainer">{renderCuisines(cuisines)}</div>;
}

export default CuisineList;
