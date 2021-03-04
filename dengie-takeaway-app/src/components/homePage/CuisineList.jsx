import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bars } from "react-loading-icons";

import CuisineCard from "./CuisineCard";
import PostcodeChecker from "./PostcodeChecker";

import { loadCuisines } from "../../store/cuisines";

import "../../css/cuisineList.css";

const filteredCuisines = (postcode, cuisines) => {
  let filteredCuisines = [];
  for (const cuisine of cuisines) {
    const filteredCuisine = { ...cuisine };
    const filteredRestaurants = filteredCuisine.restaurants.filter(
      (restaurant) => {
        for (let deliversTo of restaurant.postcodes) {
          if (deliversTo.includes(postcode.slice(0, 3).toUpperCase()))
            return restaurant;
        }
        return null;
      }
    );
    filteredCuisine.restaurants = filteredRestaurants;
    filteredCuisines.push(filteredCuisine);
  }

  return filteredCuisines;
};

const renderCuisines = (cuisines) => {
  const cuisineList = cuisines.map((cuisine) => (
    <li className="cuisineItem" key={cuisine.cuisine}>
      <CuisineCard cuisine={cuisine} />
    </li>
  ));
  return <ul>{cuisineList}</ul>;
};

function CuisineList() {
  const [postcode, setPostcode] = useState("");

  const dispatch = useDispatch();
  const cuisines = useSelector((state) => state.entities.cuisines.list);
  const filteredCuisinesy = filteredCuisines(postcode, cuisines);
  const loading = useSelector((state) => state.entities.cuisines.loading);

  useEffect(() => {
    dispatch(loadCuisines());
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <div className="loadingIcon">
          <Bars height="100px" />
        </div>
      )}
      {!loading && (
        <React.Fragment>
          <div className="cuisineContainer">
            <PostcodeChecker setPostcode={setPostcode} postcode={postcode} />
            {renderCuisines(filteredCuisinesy)}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default CuisineList;
