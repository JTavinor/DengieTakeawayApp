import React from "react";
import "../../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/" className="logoLink">
        <h1>DENGIE TAKEAWAYS</h1>
      </Link>
    </div>
  );
}

export default Navbar;
