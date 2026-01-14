import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <img src={Logo} alt="TransXs Logo" className="logo" />
          <h2 className="site-name">TransXs</h2>
        </div>

        {/* Three Dots Menu */}
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          {menuOpen && (
            <button className="close-menu" onClick={closeMenu}>
              ✕
            </button>
          )}
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/travels" onClick={closeMenu}>Travels</Link>
          <Link to="/find" onClick={closeMenu}>Find Places</Link>
          <Link to="/book" onClick={closeMenu}>Book places</Link>
          <Link to="/guides" onClick={closeMenu}>Guides</Link>
          <Link to='/history' onClick={closeMenu}>History</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;