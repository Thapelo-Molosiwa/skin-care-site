import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo Section */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/WhatsApp_Image_2025-01-20_at_12.51.16__1_-removebg.png"
            alt="Logo"
            width={240}
            height={240}
          />


        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
          <Link href="/cart" className={styles.link}>
            Cart
          </Link>
          <Link href="/billing" className={styles.link}>
            Billing
          </Link>
        </div>
      </div>
    </nav>
  );
}
