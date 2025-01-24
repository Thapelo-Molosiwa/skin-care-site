import React, { useState, useEffect } from "react";
import Link from "next/link";

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

  // Function to toggle the selection of an item
  const toggleSelection = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, selected: !item.selected }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price of selected items
  const totalPrice = cart
    .filter((item) => item.selected)
    .reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty.</p>
          <Link href="/">
            <button className="back-to-shopping-btn">Back to Shopping</button>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Product Image */}
              <img src={item.image} alt={item.name} />

              {/* Product Information */}
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: R{item.price.toFixed(2)}</p>
                <button onClick={() => removeItemFromCart(item.id)}>
                  Remove
                </button>
                {/* Checkbox to select the item */}
                <label>
                  <input
                    type="checkbox"
                    checked={item.selected || false}
                    onChange={() => toggleSelection(item.id)}
                  />
                  Select
                </label>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="cart-total">
            <span>Total:</span>
            <span>R{totalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <Link href="/billing">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
