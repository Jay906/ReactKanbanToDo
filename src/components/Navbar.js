import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div>
            <Link to="/" className="logo">
              TO DO LIST
            </Link>
          </div>
          {/* <div className="nav-links">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              Home
            </NavLink>
            <NavLink
              exact
              to="/stats"
              activeClassName="active"
              className="nav-link"
            >
              Stats
            </NavLink>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
