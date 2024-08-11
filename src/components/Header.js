import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      <h1>Welcome to MyShop</h1>
      <p>Your one-stop shop for all things awesome</p>
    </motion.header>
  );
}

export default Header;

