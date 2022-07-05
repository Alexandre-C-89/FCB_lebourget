import React from "react";
import "../style/components/_Header.scss";
import Logo from "../assets/logo.JPG";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Header = () => {
    return (
      <Router>
        <div className="header">
          <img src={Logo} alt="logo du club de football" />
          <h1>FCB Le Bourget</h1>
          <nav className="header_nav">
            <ul className="header_nav_list">
              <li className="header_nav_list_item">
                <Link to="/">Accueil</Link>
              </li>
              <li className="header_nav_list_item">
                <Link to="/competition">Compétition</Link>
              </li>
              <li className="header_nav_list_item">
                <Link to="/galerie">Galerie</Link>
              </li>
              <li className="header_nav_list_item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    );
};

export default Header;