import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadCuisines } from "../../store/cuisines";
import { filterCuisines } from "../../helpers/homePage";

import ApiError from "../common/error";
import CuisineList from "./cuisineList";
import LoadingIcon from "../common/loadingIcon";
import PostcodeChecker from "./postcodeChecker";

// The homepage. Contains:
//  - A Postcode checker to filter the restaurants to those that deliver to your postcode
//  - The list of cuisines and restaurants
function Hompage() {
  const dispatch = useDispatch();
  const cuisines = useSelector((state) => state.cuisines.list);
  const loading = useSelector((state) => state.cuisines.loading);
  const error = useSelector((state) => state.cuisines.error);

  // Takes the postcode from the PostCode Checker and filters the restaurants accordingly
  const [postcode, setPostcode] = useState("");
  const filteredCuisines = filterCuisines(postcode, cuisines);

  // Loads the cuisines and restaurants on homepage render
  useEffect(() => {
    dispatch(loadCuisines());
  }, [dispatch]);

  return (
    <React.Fragment>
      {/* Loading icon when awaiting data */}
      {loading && <LoadingIcon />}
      {!loading && !error && (
        <React.Fragment>
          <div className="cuisineContainer">
            <PostcodeChecker setPostcode={setPostcode} postcode={postcode} />
            <CuisineList cuisines={filteredCuisines} />
          </div>
        </React.Fragment>
      )}
      {/* Renders error message on unsuccessfull API call */}
      {error && <ApiError error={error} />}
    </React.Fragment>
  );
}

export default Hompage;
