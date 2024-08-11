import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, variant) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.product.name === product.name && item.variant === variant
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }

      return [...prevCart, { product, variant, quantity: 1 }];
    });
  };

  const removeFromCart = (product, variant) => {
    setCart(prevCart => {
      const updatedCart = prevCart
        .map(item =>
          item.product.name === product.name && item.variant === variant
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
      return updatedCart;
    });
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
