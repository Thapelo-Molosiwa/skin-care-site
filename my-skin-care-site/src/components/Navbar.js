import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import styles from "../styles/Navbar.module.css"; // Import the CSS file

export default function Navbar() {
  const router = useRouter(); // Initialize useRouter

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/WhatsApp_Image_2025-01-20_at_12.51.16-removebg-preview.png"
            alt="Logo"
            width={250}
            height={250}
          />
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <Link
            href="/about"
            className={`${styles.link} ${router.pathname === "/about" ? styles.active : ""}`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} ${router.pathname === "/contact" ? styles.active : ""}`}
          >
            Contact Us
          </Link>
          <Link
            href="/cart"
            className={`${styles.link} ${router.pathname === "/cart" ? styles.active : ""}`}
          >
            Cart
          </Link>
          <Link
            href="/billing"
            className={`${styles.link} ${router.pathname === "/billing" ? styles.active : ""}`}
          >
            Billing
          </Link>
        </div>
      </div>
    </nav>
  );
}
