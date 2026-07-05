import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          🔐 Secure Audit Hub
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/iso27001">
                ISO 27001
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/iso27002">
                ISO 27002
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/iso42001">
                ISO 42001
              </NavLink>
            </li>
            <li className="nav-item">
  <NavLink className="nav-link" to="/resources">
    Resources
  </NavLink>
</li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;