import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <img src="/images/brand-logo.png" alt="Brand Logo" className="brand-logo" />
      <h2>Our Journey</h2>
      <p>
        Welcome to [Your Brand Name]! Our journey started in [Year] with a mission to [Your Mission].
        Over the years, we have grown and evolved, but our commitment to quality and customer satisfaction
        has remained unwavering. We take pride in our innovative products and exceptional service.
      </p>
      <h3>Brand Information</h3>
      <p>
        At [Your Brand Name], we believe in [Your Brand Values]. Our products are crafted with care and
        precision, ensuring that every item meets the highest standards of quality. We are dedicated to
        sustainability and ethical practices, making a positive impact on the world.
      </p>
    </motion.div>
  );
}

export default About;

