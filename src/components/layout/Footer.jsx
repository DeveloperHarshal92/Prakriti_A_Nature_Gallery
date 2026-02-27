import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="logo">
            <i className="ri-leaf-fill"></i>
            <span>Prakriti</span>
          </span>
          <p>
            A calm digital gallery curated to celebrate art, nature,
            and stillness.
          </p>
        </div>

        <div className="footer-links">
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Journal</NavLink>
          <NavLink to="/book">Book a Visit</NavLink>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Prakriti Gallery</span>
        <span><i>Designed by Harshal Developes</i></span>
      </div>
    </footer>
  );
}

export default Footer;