
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/bottom-nav.css";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `bottom-nav-link ${isActive ? "active" : ""}`
        }
      >
        <span className="nav-icon">⌂</span>
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) =>
          `bottom-nav-link ${isActive ? "active" : ""}`
        }
      >
        <span className="nav-icon">▣</span>
        <span>Saved</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
