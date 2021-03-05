import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterCuisines, loadCuisines } from "../../store/cuisines";

import ApiError from "../common/error";
import CuisineList from "./cuisineList";
import LoadingIcon from "../common/loadingIcon";
import PostcodeChecker from "./postcodeChecker";

function Hompage() {
  const [postcode, setPostcode] = useState("");

  const dispatch = useDispatch();
  const cuisines = useSelector((state) => state.entities.cuisines.list);
  const loading = useSelector((state) => state.entities.cuisines.loading);
  const error = useSelector((state) => state.entities.cuisines.error);

  const filteredCuisines = filterCuisines(postcode, cuisines);

  useEffect(() => {
    dispatch(loadCuisines());
  }, []);

  return (
    <React.Fragment>
      {loading && <LoadingIcon />}
      {!loading && !error && (
        <React.Fragment>
          <div className="cuisineContainer">
            <PostcodeChecker setPostcode={setPostcode} postcode={postcode} />
            <CuisineList cuisines={filteredCuisines} />
          </div>
        </React.Fragment>
      )}
      {error && <ApiError error={error} />}
    </React.Fragment>
  );
}

export default Hompage;
