import React from "react";
import "./navbar.css";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="links">
        <li>
          <Link to="/rent">Rent</Link>
        </li>
        <li>
          <Link to="/buy">Buy</Link>
        </li>
        <li>
          <Link to="/sell">Sell</Link>
        </li>
        <li>
          <select>
            <option>Manage Property</option>
          </select>
        </li>
        <li>
          <select>
            <option>Resources</option>
          </select>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
      <div className="buttons">
        <button className="button-secondary">Login</button>
        <button className="button-primary">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
