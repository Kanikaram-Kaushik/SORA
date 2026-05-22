import React from 'react';
import LivingNavigation from '@/components/LivingNavigation';
import Footer from '@/components/Footer';
import styles from './living.module.css';

export default function LivingPage() {
  return (
    <main className={styles.main}>
      <LivingNavigation />

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlayText}>
            <span className={styles.heroBold}>SORA</span>
            <span className={styles.heroLight}>LIVING</span>
          </div>
        </div>
        <div className={styles.oliveBlock}>
          <p>
            Prioritising responsible sourcing and materials with tactile qualities that age gracefully through time and use.
          </p>
          <p>
            Each design is developed with sensitivity towards culture, region, usability and long term value.
          </p>
        </div>
      </section>

      {/* 2. Featured Products */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.featuredCarousel}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImageWrapper}>
                <img src="/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png" alt="Smart Bar" className={styles.productImage} />
              </div>
              <h3 className={styles.productTitle}>Smart Bar</h3>
          </div>
          <div className={styles.paginationDots}>
            <div className={`${styles.dot} ${styles.activeDot}`}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </section>

      {/* 3. Explore by Category */}
      <section className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>Explore by Category</h2>
        <div className={styles.categoryStack}>
          <div className={styles.categoryCard}>
            <img src="/visax-RMukvw_Gc0k-unsplash.jpg" alt="Smart Furniture" className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>Smart Furniture</h3>
          </div>
          <div className={styles.categoryCard}>
            <img src="/joao-emanuel-NvfwIN43ZPU-unsplash.jpg" alt="Growing Spaces" className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>Growing Spaces</h3>
          </div>
          <div className={styles.categoryCard}>
            <img src="/ChatGPT Image May 16, 2026, 06_35_24 PM.png" alt="Lamps" className={styles.categoryImage} />
            <h3 className={styles.categoryTitle}>Lamps</h3>
          </div>
        </div>
      </section>

      {/* 4. From Concept to Form */}
      <section className={styles.conceptSection}>
        <div className={styles.conceptImageTop}>
          <img src="/ChatGPT Image May 16, 2026, 06_15_47 PM.png" alt="Concept to Form" className={styles.conceptImg} />
        </div>
        <div className={styles.moodboardBlock}>
          <h2 className={styles.conceptTitle}>From concept to form</h2>
          <p className={styles.conceptDesc}>
            Through sketching, prototyping and testing, ideas take shape. It is a rigorous process ensuring every product balances aesthetics, functionality, and lasting quality.
          </p>
        </div>
      </section>

      {/* 5. Core Design Pillars */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsContainer}>
          <div className={styles.pillarItem}>
            <div className={styles.pillarCircle} style={{backgroundColor: '#D1BFA9'}}></div>
            <div className={styles.pillarText}>
              <h3 className={styles.pillarTitle}>Material Integrity</h3>
            </div>
          </div>

          <div className={styles.pillarItem}>
            <div className={styles.pillarCircle} style={{backgroundColor: '#89725C'}}></div>
            <div className={styles.pillarText}>
              <h3 className={styles.pillarTitle}>Regionally Informed<br/>Design</h3>
            </div>
          </div>

          <div className={styles.pillarItem}>
            <div className={styles.pillarCircle} style={{backgroundColor: '#604739'}}></div>
            <div className={styles.pillarText}>
              <h3 className={styles.pillarTitle}>Material Responsibility</h3>
            </div>
          </div>
        </div>

        <p className={styles.pillarsFooterText}>
          Repairability, Recyclability and Long term usability are considered throughout every stage of development
        </p>
      </section>

      <Footer />
    </main>
  );
}
