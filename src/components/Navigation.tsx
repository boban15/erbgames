import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <h2>ERB Games</h2>
          <span>Family Competition</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${isActive('/events') ? 'nav-link-active' : ''}`}
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link 
            to="/registration" 
            className={`nav-link ${isActive('/registration') ? 'nav-link-active' : ''}`}
            onClick={closeMenu}
          >
            Registration
          </Link>
          <Link 
            to="/results" 
            className={`nav-link ${isActive('/results') ? 'nav-link-active' : ''}`}
            onClick={closeMenu}
          >
            Results
          </Link>
          <Link 
            to="/gallery" 
            className={`nav-link ${isActive('/gallery') ? 'nav-link-active' : ''}`}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <button 
          className={`nav-toggle ${isMenuOpen ? 'nav-toggle-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;