import React from "react";
import "../style/components/_Header.scss";

const Header = () => {
    return (
      <div className="header">
        <h1>FCB Le Bourget</h1>
        <nav className="header_nav">
          <ul className="header_nav_list">
            <li className="header_nav_list_item">Accueil</li>
            <li className="header_nav_list_item">Compétition</li>
            <li className="header_nav_list_item">Galerie</li>
            <li className="header_nav_list_item">Contact</li>
          </ul>
        </nav>
      </div>
    );
};

export default Header;