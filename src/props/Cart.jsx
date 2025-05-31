import React, { useState, useEffect } from 'react';
import './Cart.css';
import Navbar from './navbar';

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
    const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-message">No items in the cart.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p className="cart-item-price">${item.price}</p>
                 <button onClick={() => removeItem(item.id)}>Remove item</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Cart;
