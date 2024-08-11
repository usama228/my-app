import React from 'react';
import { motion } from 'framer-motion';
import './ProductList.css';
import { useCart } from '../contexts/CartContext';

function ProductList() {
  const { addToCart } = useCart();
  const products = [
    { name: 'Denim', description: 'Mens T-Shirt', price: '$10', image: '/images/product1.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Levis', description: 'Mens T-Shirt', price: '$20', image: '/images/product2.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Polo', description: 'Mens T-Shirt', price: '$30', image: '/images/product3.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'versace', description: 'Mens T-Shirt', price: '$10', image: '/images/product4.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'lacoste', description: 'Mens T-Shirt', price: '$20', image: '/images/product5.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Barezee', description: 'Mens T-Shirt', price: '$30', image: '/images/product6.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Nike', description: 'Mens T-Shirt', price: '$10', image: '/images/product7.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Addidas', description: 'Mens T-Shirt', price: '$20', image: '/images/product8.jpeg', variants: ['Small', 'Medium', 'Large'] },
    { name: 'Saphire', description: 'Mens T-Shirt', price: '$30', image: '/images/product9.jpeg', variants: ['Small', 'Medium', 'Large'] },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <motion.div
          key={index}
          className="product-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <div className="variants">
            {product.variants.map((variant) => (
              <button key={variant} onClick={() => addToCart(product, variant)}>
                Add {variant} to Cart
              </button>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProductList;

