import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/HomePage.module.css'; // Update path if the CSS file is in src/styles

// Sample product data with prices
const productsData = [
  {
    id: 1,
    name: "Facial Serum",
    price: 160.00,
    image: "/WhatsApp Image 2025-01-20 at 12.51.15 (1).jpeg",
    description: "Brighten, firm, and rejuvenate your skin effortlessly."
  },
  {
    id: 2,
    name: "Facial Moisturizer",
    price: 190.00,
    image: "/WhatsApp Image 2025-01-20 at 12.51.16.jpeg",
    description: "Lightweight hydration for soft, glowing skin all day."
  },
  {
    id: 3,
    name: "Calming Toner",
    price: 155.00,
    image: "/WhatsApp Image 2025-01-20 at 12.51.15.jpeg",
    description: "Refresh and balance your skin for a smooth, radiant finish."
  },
  {
    id: 4,
    name: "Licorice Soap",
    price: 125.00,
    image: "/WhatsApp Image 2025-01-20 at 12.51.15 (2).jpeg",
    description: "Cleanse and even your skin tone with a gentle touch."
  }
];

export default function HomePage() {
  const [cart, setCart] = useState([]);

  // Load the cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    if (isInCart) {
      // If product is already in cart, remove it
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart
    } else {
      // Otherwise, add product to cart
      const updatedCart = [...cart, { ...product, selected: true }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart
    }
  };

  // Check if product is already in cart
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Natural Beauty, Naturally You</h1>
        <p className={styles.heroDescription}>
          Discover our organic skincare products that nurture your skin and
          respect the environment.
        </p>
        <Link href="/cart" className={styles.shopNowBtn}>
          Shop Now
        </Link>
      </section>

      {/* Section 2: Products Section */}
      <section className={styles.products}>
        <h2 className={styles.productsTitle}>Our Products</h2>
        <div className={styles.productsGrid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>R{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className={`${styles.addToCartBtn} ${isProductInCart(product.id) ? styles.added : ''}`}
              >
                {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Organic Skincare. All Rights Reserved.</p>
      </footer>
    </div>
  );
}






