import React, { useEffect } from "react";
import CuisineCard from "./CuisineCard";
import "../../css/cuisineList.css";
import { loadCuisines } from "../../store/cuisines";
import { useDispatch, useSelector } from "react-redux";

function CuisineList({ cuisines: propCuisines }) {
  const dispatch = useDispatch();
  const cuisines = useSelector((state) => state.entities.cuisines.list);

  useEffect(() => {
    dispatch(loadCuisines());
  }, []);

  const renderCuisines = (cuisines) => {
    const list = cuisines.map((cuisine) => (
      <li className="cuisineItem">
        <CuisineCard cuisine={cuisine} />
      </li>
    ));
    return <ul className="cuisineList">{list}</ul>;
  };

  return (
    <>
      <div className="cuisineContainer">{renderCuisines(propCuisines)}</div>
      <ul>
        {cuisines.map((cuisine) => (
          <li>{cuisine.cuisine}</li>
        ))}
      </ul>
    </>
  );
}

export default CuisineList;
