import React from "react";
import './styles.css';

const links: string[] = ["Home", "Projects", "Github"];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">{/* Logo img / svg */}</div>
      <ul className="navbar-links">
        {links.map((link, index) => {
          return (
            <li className="navbar-link" key={index}>
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
