import React from "react";
import styles from "../styles/Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Get in Touch</h1>
        <p className={styles.heroSubtitle}>
          Have questions about our products or need skincare advice? We are here to help!
        </p>
      </section>

      {/* Main Content Section */}
      <section className={styles.container}>
        {/* Left: Contact Info */}
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <p>
              <span className={styles.bold}>Email Us:</span> support@organicskincare.com
            </p>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <p>
              <span className={styles.bold}>Call Us:</span> +0123456789
            </p>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>
              <span className={styles.bold}>Visit Us:</span> Burgersfort 1150
            </p>
          </div>
          <div className={styles.contactItem}>
            <FaClock className={styles.icon} />
            <p>
              <span className={styles.bold}>Business Hours:</span> Mon - Sun, 7:00 AM - 18:00 PM
            </p>
          </div>
        </div>

        {/* Right: Send Message Form */}
        <div className={styles.messageForm}>
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" placeholder="Your Name" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" placeholder="Your Email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input type="text" id="subject" placeholder="Subject" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2025 Organic Skincare. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
