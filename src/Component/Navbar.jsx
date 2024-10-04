import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <Link to="/" className="nav-title">
        Webside
      </Link>
      <div
        className="nav-menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactUS" onClick={() => setMenuOpen(false)}>
            Contact US
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" onClick={() => setMenuOpen(false)}>
            Explore
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
