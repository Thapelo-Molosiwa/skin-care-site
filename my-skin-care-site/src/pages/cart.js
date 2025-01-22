import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to remove item from cart
  const removeItemFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price of selected items
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name} - R{item.price}</h3>
              <button onClick={() => removeItemFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: R{totalPrice}</h3>
          </div>
          <Link href="/billing">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
