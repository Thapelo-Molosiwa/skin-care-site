import styles from '../styles/About.module.css'; // Make sure to import the CSS module

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroDescription}>
            Crafting natural skincare solutions with love and respect for nature.
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
              We use only the finest organic and naturally sourced ingredients for your skin.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Quality First</h3>
            <p className={styles.cardDescription}>
              Our products adhere to rigorous and premium quality standards for the best results.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Customer Care</h3>
            <p className={styles.cardDescription}>
              Personalized skincare solutions tailored to meet your unique needs and preferences.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Eco-Friendly</h3>
            <p className={styles.cardDescription}>
              We are committed to sustainable practices, using eco-friendly packaging and minimizing our carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Company and Founder Section */}
      <section className={styles.aboutSection}>
        <div className={styles.left}>
          <img src="/path-to-owner-image.jpg" alt="Founder" className={styles.founderImage} />
        </div>
        <div className={styles.right}>
          <h2 className={styles.sectionTitle}>About Us & Our Founder</h2>
          <p className={styles.aboutText}>
            Founded by [Founder Name], our company is driven by a passion for creating effective skincare
            solutions while remaining true to our commitment to nature. [Founder Name] has spent years researching
            natural ingredients to develop products that nourish the skin and respect the environment.
          </p>
          <p className={styles.aboutText}>
            Our products are a reflection of this commitment, made from the finest natural ingredients and
            designed with your skin's health and the planet's well-being in mind.
          </p>
        </div>
      </section>
    </div>
  );
}
