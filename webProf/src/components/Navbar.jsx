// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          HimawanPutra
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              Konsultan
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Produk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
