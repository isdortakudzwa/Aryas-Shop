// Footer.jsx
import React from 'react';
import './Fonts/footer.css';
import logos from './Images/logo aryas cart.jpg'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className='arya-home'>Aryas Cart </h3>
            <p>Your trusted destination for quality products and exceptional service.</p>
            <div className="logo-container">
                    <a href="/">
                      <img src={logos} alt="Brand Logo" className="logo" loading='lazy' />
                    </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="/">Shipping Policy</a></li>
              <li><a href="/">Returns & Exchanges</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and exclusive offers!</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shop Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;