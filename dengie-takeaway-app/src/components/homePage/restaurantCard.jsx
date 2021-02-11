import React, { useEffect, useState } from "react";
import "../../css/restaurantCard.css";

import _ from "lodash";

import { Link } from "react-router-dom";

function RestaurantCard({ name, openingTimes, start, close }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    checkTime();
  });

  const checkTime = () => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < close && hours >= start) return setOpen(true);
    return setOpen(false);
  };

  return (
    <div>
      <Link to={open ? `/menu/${_.camelCase(name.split(" ").join(""))}` : "/"}>
        <div
          className={open ? "container" : "container closed"}
          style={{ position: "relative", height: "80px" }}
        >
          {/* <div
            className="info"
            style={{ position: "absolute", top: 0, left: 0 }}
          > */}
          <h2 className="name">{name}</h2>
          <div className="openInfo">
            <div>
              {open ? (
                <span style={{ color: "green" }}>Open</span>
              ) : (
                <span style={{ color: "tomato" }}>Closed</span>
              )}
            </div>
            <p className="times">Opening Times: {openingTimes}</p>
            {/* </div> */}
          </div>
          {!open && (
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "tomato",
                zIndex: 20,
                height: "100%",
                width: "100%",
                opacity: 0.2,
              }}
            />
          )}
        </div>
      </Link>
    </div>
  );
}

export default RestaurantCard;
