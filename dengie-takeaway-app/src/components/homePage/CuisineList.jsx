import React, { useEffect, useState } from "react";
import CuisineCard from "./CuisineCard";
import "../../css/cuisineList.css";
import { loadCuisines } from "../../store/cuisines";
import { useDispatch, useSelector } from "react-redux";
import { Bars } from "react-loading-icons";

function CuisineList() {
  const [postcode, setPostcode] = useState("");

  const dispatch = useDispatch();
  const cuisines = useSelector((state) => state.entities.cuisines.list);
  const loading = useSelector((state) => state.entities.cuisines.loading);

  useEffect(() => {
    dispatch(loadCuisines());
  }, []);

  const renderCuisines = (cuisines) => {
    const list = cuisines.map((cuisine) => (
      <li className="cuisineItem">
        <CuisineCard cuisine={cuisine} postcode={postcode} />
      </li>
    ));
    return <ul className="cuisineList">{list}</ul>;
  };

  return (
    <>
      {loading && (
        <div className="loadingIcon">
          <Bars height="100px" />
        </div>
      )}
      {!loading && (
        <>
          <div>
            <label for="postcode" style={{ display: "block" }}>
              Enter your postcode to see which restaurants deliver to you
            </label>
            <input
              type="text"
              name="postcode"
              style={{ display: "block" }}
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>
          <div className="cuisineContainer">{renderCuisines(cuisines)}</div>
        </>
      )}
    </>
  );
}

export default CuisineList;
