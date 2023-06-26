import React from "react";
import "../App.css";
import {Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <Link style={{textDecoration: 'none'}} to="/">
      <h1 className="heading">Pokédex</h1>
      </Link>
    </div>
  );
}
export default Navbar;
