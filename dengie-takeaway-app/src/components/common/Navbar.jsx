import React from "react";
import { Link } from "react-router-dom";

// Simple Navbar, routes back to the homepage
function Navbar() {
  return (
    <div className="navbar flexRowCenter">
      <Link to="/" className="logoLink">
        <h1>DENGIE TAKEAWAYS</h1>
      </Link>
    </div>
  );
}

export default Navbar;
