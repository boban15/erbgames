import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ERB Games</h3>
            <p>Bringing families together through friendly competition and lasting memories.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/events">Events Schedule</a></li>
              <li><a href="/registration">Registration</a></li>
              <li><a href="/results">Results & Stats</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>More</h4>
            <ul className="footer-links">
              <li><a href="/gallery">Photo Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><button onClick={(e) => { e.preventDefault(); alert('Privacy policy coming soon!'); }} style={{background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', textDecoration: 'none', fontSize: 'inherit'}}>Privacy Policy</button></li>
              <li><button onClick={(e) => { e.preventDefault(); alert('Terms of service coming soon!'); }} style={{background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', textDecoration: 'none', fontSize: 'inherit'}}>Terms of Service</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📧 info@erbgames.com</p>
              <p>📱 (555) 123-4567</p>
              <p>📍 123 Family Way<br />Springfield, ST 12345</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} ERB Games. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Made with ❤️ for the ERB family</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;