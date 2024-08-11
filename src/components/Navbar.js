
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import DropdownMenu from './DropdownMenu';
import { useCart } from '../contexts/CartContext';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const { cartItemCount } = useCart();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleContactClick = () => {
    setShowContactDetails(!showContactDetails);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">MyShop</div>
      <ul className="navbar-links">
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/">Home</Link>
          <DropdownMenu isOpen={isHovered} />
        </li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/women-suits">Women Suits</Link></li>
        <li><Link to="/child-suits">Child Suits</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li onClick={handleContactClick}><a href="#contact-us">Contact Us</a></li>
        <li><Link to="/cart">Cart ({cartItemCount})</Link></li>
      </ul>
      {showContactDetails && (
        <div className="contact-details">
          <p style={{color:'white'}}>Phone: 023-456-7893</p>
          <p style={{color:'white'}}>Email: www.Brandedclothes321@gmail.com</p>
          <div className="logo-container">
            <img src="https://w7.pngwing.com/pngs/729/192/png-transparent-computer-icons-instagram-logo-sticker-logo-instagram-logo-text-photography-rectangle-thumbnail.png" alt="Instagram" className="logo" />
            <img src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png" alt="Google" className="logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" className="logo" />
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;




