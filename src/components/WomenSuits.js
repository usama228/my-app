import React from 'react';
import { motion } from 'framer-motion';
import './WomenSuits.css';
import { useCart } from '../contexts/CartContext';

function WomenSuits() {
  const { addToCart } = useCart();
  const suits = [
    { id: 1, name: 'Elegant Suit', description: "Women's Elegant Suit", price: '$120', image: '/images/suit1.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 2, name: 'Casual Suit', description: "Women's Casual Suit", price: '$100', image: '/images/suit2.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 3, name: 'Formal Suit', description: "Women's Formal Suit", price: '$150', image: '/images/suit3.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 4, name: 'Elegant Suit', description: "Women's Elegant Suit", price: '$120', image: '/images/suit4.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 5, name: 'Casual Suit', description: "Women's Casual Suit", price: '$100', image: '/images/suit5.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 6, name: 'Formal Suit', description: "Women's Formal Suit", price: '$150', image: '/images/suit6.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 7, name: 'Elegant Suit', description: "Women's Elegant Suit", price: '$120', image: '/images/suit7.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 8, name: 'Casual Suit', description: "Women's Casual Suit", price: '$100', image: '/images/suit8.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 9, name: 'Formal Suit', description: "Women's Formal Suit", price: '$150', image: '/images/suit11.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { id: 10, name: 'Elegant Suit', description: "Women's Elegant Suit", price: '$120', image: '/images/suit12.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 11, name: 'Casual Suit', description: "Women's Casual Suit", price: '$100', image: '/images/suit10.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 12, name: 'Formal Suit', description: "Women's Formal Suit", price: '$150', image: '/images/suit13.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 13, name: 'Casual Suit', description: "Women's Casual Suit", price: '$100', image: '/images/suit14.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 14, name: 'Formal Suit', description: "Women's Formal Suit", price: '$150', image: '/images/suit15.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 15, name: 'Casual Suit', description: "Women's Casual Suit", price: '$100', image: '/images/suit16.jpg', variants: ['Small', 'Medium', 'Large'] },
    { id: 16, name: 'Formal Suit', description: "Women's Formal Suit", price: '$150', image: '/images/suit17.jpg', variants: ['Small', 'Medium', 'Large'] },
  ];

  return (
    <div className="container">
      <div className="row">
        {suits.map((suit, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <motion.div
              className="card suit-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={suit.image} alt={suit.name} className="card-img-top suit-image" />
              <div className="card-body">
                <h5 className="card-title">{suit.name}</h5>
                <p className="card-text">{suit.description}</p>
                <p className="card-text">{suit.price}</p>
                <div className="variants">
                  {suit.variants.map((variant, idx) => (
                    <button key={idx} onClick={() => addToCart(suit, variant)} className="btn btn-primary mr-2">
                      Add {variant} to Cart
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenSuits;
