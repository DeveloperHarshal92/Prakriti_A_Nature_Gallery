import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="logo">
          <i className="ri-leaf-fill"></i>
          <span>Prakriti</span>
        </span>
      </div>

      <ul className="navbar__links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/book" className="cta">
            Book Now
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
