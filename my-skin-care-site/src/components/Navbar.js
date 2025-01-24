import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import { useState } from "react"; // For the hamburger menu
import styles from "../styles/Navbar.module.css"; // Import the CSS file

export default function Navbar() {
  const router = useRouter(); // Initialize useRouter
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle the hamburger menu
  const closeMenu = () => setMenuOpen(false); // Close the hamburger menu

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/WhatsApp_Image_2025-01-20_at_12.51.16-removebg-preview.png"
            alt="Logo"
            width={130}
            height={130}
            priority 
          />
        </Link>

        {/* Hamburger Menu */}
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <span className={`${styles.bar} ${menuOpen ? styles.active : ""}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.active : ""}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.active : ""}`}></span>
        </div>

        {/* Navigation Links */}
        <div
          className={`${styles.navLinks} ${menuOpen ? styles.mobileActive : ""}`}
        >
          <Link
            href="/about"
            className={`${styles.link} ${
              router.pathname === "/about" ? styles.active : ""
            }`}
            onClick={closeMenu} // Close menu after clicking
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${
              router.pathname === "/contact" ? styles.active : ""
            }`}
            onClick={closeMenu} // Close menu after clicking
          >
            Contact Us
          </Link>
          <Link
            href="/cart"
            className={`${styles.link} ${
              router.pathname === "/cart" ? styles.active : ""
            }`}
            onClick={closeMenu} // Close menu after clicking
          >
            Cart
          </Link>
          <Link
            href="/billing"
            className={`${styles.link} ${
              router.pathname === "/billing" ? styles.active : ""
            }`}
            onClick={closeMenu} // Close menu after clicking
          >
            Billing
          </Link>
        </div>
      </div>
    </nav>
  );
}
