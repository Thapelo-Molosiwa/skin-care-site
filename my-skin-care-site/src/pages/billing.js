import { useEffect, useState } from "react";
import styles from "../styles/Billing.module.css"; // Import the CSS Module

const BillingPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Retrieve cart from localStorage and filter for selected items
    const selectedItems = JSON.parse(localStorage.getItem("cart")) || [];
    const selectedItemsOnly = selectedItems.filter(item => item.selected);

    setCart(selectedItemsOnly);
    setTotal(
      selectedItemsOnly.reduce((acc, item) => acc + item.price, 0)
    );
  }, []);

  const handleCardPayment = (event) => {
    event.preventDefault();
    alert("Payment processing...");
    // Integrate with payment gateway here
  };

  return (
    <div className={styles["billing-container"]}>
      <h2>Billing Information</h2>
      <div>
        <h3>Items to Pay For</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - R{item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.total}>
        <span>Total:</span>
        <span>R{total.toFixed(2)}</span>
      </div>

      <div className={styles["card-payment-form"]}>
        <h4>Enter Your Payment Details</h4>
        <form onSubmit={handleCardPayment}>
          <input
            type="text"
            placeholder="Card Number"
            maxLength="16"
            required
          />
          <div className={styles["card-input-group"]}>
            <input
              type="text"
              placeholder="MM/YY"
              maxLength="5"
              required
            />
            <input
              type="text"
              placeholder="CVC"
              maxLength="3"
              required
            />
          </div>
          <button className={styles["submit-btn"]} type="submit">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingPage;
