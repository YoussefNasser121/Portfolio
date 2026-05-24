import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <span className="navbar-brand">Youssef Nasser's Portofolio</span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">
              Projects
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

export default Navbar;
