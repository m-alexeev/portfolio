import React from "react";
import { themeEnum, useThemeContext } from "../../../contexts/ThemeContext";
import './styles.css';

const links: string[] = ["Home", "Projects", "Github"];

const Navbar = () => {
  const theme = useThemeContext();
  

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
        <button onClick={() => theme.setTheme(themeEnum.DARK)}>Set theme</button>
      </ul>
    </div>
  );
};

export default Navbar;
