
import React from 'react';
import { motion } from 'framer-motion';
import './ChildSuits.css';
import { useCart } from '../contexts/CartContext';

function ChildSuits() {
  const { addToCart } = useCart();
  const suits = [
    { name: 'Bacha Party', description: 'Women\'s Elegant Suit', price: '$120', image: '/images/child-1.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Babies and Babas', description: 'Women\'s Casual Suit', price: '$100', image: '/images/child2.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Rang ga', description: 'Women\'s Formal Suit', price: '$150', image: '/images/child3.jpg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Kids Planet', description: 'Women\'s Elegant Suit', price: '$120', image: '/images/child4.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'j.', description: 'Women\'s Casual Suit', price: '$100', image: '/images/child5.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'kids', description: 'Women\'s Formal Suit', price: '$150', image: '/images/child6.jpg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Bacha Party', description: 'Women\'s Elegant Suit', price: '$120', image: '/images/child-1.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Babies and Babas', description: 'Women\'s Casual Suit', price: '$100', image: '/images/child2.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Rang ga', description: 'Women\'s Formal Suit', price: '$150', image: '/images/child3.jpg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Kids Planet', description: 'Women\'s Elegant Suit', price: '$120', image: '/images/child4.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'j.', description: 'Women\'s Casual Suit', price: '$100', image: '/images/child5.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'kids', description: 'Women\'s Formal Suit', price: '$150', image: '/images/child6.jpg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'j.', description: 'Women\'s Casual Suit', price: '$100', image: '/images/child5.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'kids', description: 'Women\'s Formal Suit', price: '$150', image: '/images/child6.jpg', variants: ['Small', 'Medium', 'Large'] },
  ];

  return (
    <div className="child-suits">
      {suits.map((suit, index) => (
        <motion.div
          key={index}
          className="suit-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={suit.image} alt={suit.name} className="suit-image" />
          <h3>{suit.name}</h3>
          <p>{suit.description}</p>
          <p>{suit.price}</p>
          <div className="variants">
            {suit.variants.map((variant) => (
              <button key={variant} onClick={() => addToCart(suit, variant)}>
                Add {variant} to Cart
              </button>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ChildSuits;