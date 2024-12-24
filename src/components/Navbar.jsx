import React from 'react'
import { useState, useEffect } from "react";
import "./Navbar.css";
import logos from './Images/logo aryas cart.jpg'
import addcart from './Images/shopping_bag_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logos} alt="Brand Logo" className="logo" loading='lazy' />
        </Link>
      </div>

      {/* Hamburger Menu for mobile view */}
      <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link href="/" className="nav-link" onClick={closeMenu}>
          <span className="link-text">Home</span>
        </Link></li>
        <li><Link to="/AboutUs"  smooth={true} duration={500} className="nav-link" onClick={closeMenu}>
          <span className="link-text" >About Us</span>
        </Link></li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Link to="/KidsCollectionPage" className="nav-link dropdown-toggle">
            <span className="link-text">Shop</span>
          </Link>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link href="/babies" className="dropdown-link">Babies (0–2 yrs)</Link></li>
            <li><Link href="/kids" className="dropdown-link">Kids (3–12 yrs)</Link></li>
            <li><Link href="/teens" className="dropdown-link">Teens (13–18 yrs)</Link></li>
          </ul>
        </li>
        <li><Link to="/CollectionPage" className="nav-link" onClick={closeMenu}>
          <span className="link-text">Collections</span>
        </Link></li>
        <li><Link to="/ContactForm" className="nav-link" onClick={closeMenu}>
          <span className="link-text">Contact</span>
        </Link></li>
      </ul>

      <div className="nav-icons">
        <img src={addcart} alt="/" className="cart-add" />
        <div className="users">
          <BiSolidUser className="icon-user" style={{ fontSize: '35px', cursor: 'pointer' }} />
          <p className="user-text">User Profile</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;