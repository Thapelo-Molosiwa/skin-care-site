import { useEffect, useState } from "react";

const BillingPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const selectedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(selectedItems.filter(item => item.selected));
    setTotal(selectedItems.filter(item => item.selected).reduce((acc, item) => acc + item.price, 0));
  }, []);

  return (
    <div>
      <h2>Billing Information</h2>
      <div>
        <h3>Items to Pay For</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - R{item.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Total: R{total}</h3>
      </div>
      <button onClick={() => alert("Proceeding to payment...")}>Pay Now</button>
    </div>
  );
};

export default BillingPage;
