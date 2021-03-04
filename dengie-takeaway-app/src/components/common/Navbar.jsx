import React from "react";
import { Link } from "react-router-dom";

import "../../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logoLink">
        <h1>DENGIE TAKEAWAYS</h1>
      </Link>
    </div>
  );
}

export default Navbar;
