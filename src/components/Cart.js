import React from 'react';
import './Cart.css';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncrement = (item) => {
    updateQuantity(item.product, item.variant, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.product, item.variant, item.quantity - 1);
    }
  };

  return (
    <section id="cart" className="cart-section">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.product.image} alt={item.product.name} className="cart-image" />
              <div>
                <h3>{item.product.name} ({item.variant})</h3>
                <p>Quantity: 
                  <button onClick={() => handleDecrement(item)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleIncrement(item)}>+</button>
                </p>
                <p>Price: {item.product.price}</p>
                <button onClick={() => removeFromCart(item.product, item.variant)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;


