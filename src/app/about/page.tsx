import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      
      <section className={styles.heroSection}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.description}>
            We are a design studio focused on spatial lighting and thoughtfully crafted everyday objects.
          </p>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.historyHeader}>
          <h2 className={styles.historyTitle}>How it Started</h2>
          <div className={styles.horizontalLine}></div>
        </div>

        <div className={styles.historyTextContainer}>
          <p>Founded in 2022 by two mechanical engineers with a shared appreciation for thoughtful design, the studio brings together creativity, engineering, and strategic thinking.</p>
          <p>Vamshi N comes from a background in architectural and industrial design, with a strong inclination towards art and visual expression.</p>
          <p>Sagar M, an MBA graduate from Indian Institute of Management, contributes a perspective shaped by systems, management, and strategy.</p>
          <p>Together, the studio was built around the idea of creating products and spaces that are both functional and deeply considered.</p>
        </div>

        <div className={styles.workbenchImageWrapper}>
          <img src="/IMG_3702.jpg" alt="Our first work bench" className={styles.workbenchImage} />
          <p className={styles.imageCaption}>Our first Work bench, a humble beginning</p>
        </div>
      </section>

      <section className={styles.approachSection}>
        <h2 className={styles.sectionHeading}>Our Approach</h2>
        <div className={styles.textContainer}>
          <p>Rooted in longevity, materials and mindful production our approach towards design focuses on creating durable products that remain relevant through changing lifestyles and spaces.</p>
          <p>Material selection and sourcing are approached with consideration towards sustainability, recyclability and responsible production.</p>
          <p>Each design is developed with sensitivity towards culture, region, usability and long term value.</p>
        </div>

        <h2 className={styles.sectionHeading}>Materials</h2>
        <div className={styles.imageBlock}>
          <img src="/declan-sun-jRQ-YugzjWE-unsplash.jpg" alt="Materials" className={styles.blockImage} />
        </div>
        <div className={styles.textContainer}>
          <p>We prioritise responsible sourcing and materials with tactile qualities that age gracefully through time and use.</p>
        </div>

        <h2 className={styles.sectionHeading}>Packaging</h2>
        <div className={styles.imageBlock}>
          <img src="/luke-heibert-gthSas4oYC0-unsplash.jpg" alt="Packaging" className={styles.blockImage} />
        </div>
        <div className={styles.textContainer}>
          <p>We focus on reducing excess while ensuring products are protected, reusable, and easy to recycle.</p>
        </div>

        <h2 className={styles.sectionHeading}>Designed for Disassembly</h2>
        <div className={styles.imageBlock}>
          <img src="/feey-gETAvvOmwao-unsplash.jpg" alt="Designed for Disassembly" className={styles.blockImage} />
        </div>
        <div className={styles.textContainer}>
          <p>Components can be repaired, replaced, or separated with ease to support longevity and material recovery.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
