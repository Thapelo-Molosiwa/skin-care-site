import styles from "../styles/About.module.css"; // Make sure to import the CSS module

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroDescription}>
            Crafting natural skincare solutions with love and respect for
            nature.
          </p>
        </div>
      </section>

      {/* Natural Ingredients Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Natural Ingredients</h3>
            <p className={styles.cardDescription}>
              We use only the finest organic and naturally sourced ingredients
              for your skin.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Quality First</h3>
            <p className={styles.cardDescription}>
              Our products adhere to rigorous and premium quality standards for
              the best results.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Customer Care</h3>
            <p className={styles.cardDescription}>
              Personalized skincare solutions tailored to meet your unique needs
              and preferences.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Eco-Friendly</h3>
            <p className={styles.cardDescription}>
              We are committed to sustainable practices, using eco-friendly
              packaging and minimizing our carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Company and Founder Section */}
      <section className={styles.aboutSection}>
        <div className={styles.left}>
          <img
            src="/WhatsApp Image 2025-01-20 at 12.51.16 (2).jpeg"
            alt="Founder"
            className={styles.founderImage}
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.sectionTitle}>About Us & Our Founder</h2>
          <p className={styles.aboutText}>
            Founded by [Founder Name], our company was born out of a passion for
            eco-friendly skincare and a vision to make a positive impact. We
            believe that taking care of your skin shouldn’t come at the expense
            of the planet. That’s why our products are thoughtfully crafted to
            align with our commitment to sustainability and natural wellness.
          </p>
          <p className={styles.aboutText}>
            With every product, we’re not just helping your skin glow—we’re
            contributing to a healthier, greener world. By combining effective
            skincare with a dedication to environmental care, we’re taking small
            yet meaningful steps toward a more sustainable future.{" "}
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Organic Skincare. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
