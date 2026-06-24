// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#051c4f" }}>
      <div className="container-fluid">
        <span className="navbar-brand text-light fw-bold">Youssef Nasser's Portfolio</span>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ borderColor: "rgba(255,255,255,0.5)" }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/projects" onClick={closeMenu}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
