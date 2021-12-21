import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NavLink className="navbar-brand" to="/movies">
          Vidly
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink className="navbar-brand" to="/movies">
                Movies
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="navbar-brand" to="/customers">
                Customers
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="navbar-brand" to="/rentals">
                Rentals
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
