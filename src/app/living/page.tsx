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
              <img src="/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png" alt="Sora Smart Bar" className={styles.productImage} />
            </div>
            <h3 className={styles.productTitle}>Sora Smart Bar</h3>
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
        <h2 className={styles.sectionTitle}>Core Design Pillars</h2>
        
        <div className={styles.pillarItem}>
          <div className={styles.pillarCircle} style={{backgroundColor: '#b5a596'}}></div>
          <div className={styles.pillarText}>
            <h3 className={styles.pillarTitle}>Material Integrity</h3>
            <p className={styles.pillarDesc}>Honest use of materials, letting textures and natural wear become part of the object's story.</p>
          </div>
        </div>

        <div className={styles.pillarItem}>
          <div className={styles.pillarCircle} style={{backgroundColor: '#8c6b54'}}></div>
          <div className={styles.pillarText}>
            <h3 className={styles.pillarTitle}>Regionally Informed Design</h3>
            <p className={styles.pillarDesc}>Designing with an awareness of local contexts, climate, and domestic behaviors.</p>
          </div>
        </div>

        <div className={styles.pillarItem}>
          <div className={styles.pillarCircle} style={{backgroundColor: '#4a3d34'}}></div>
          <div className={styles.pillarText}>
            <h3 className={styles.pillarTitle}>Material Responsibility</h3>
            <p className={styles.pillarDesc}>Prioritising responsibly sourced materials and ensuring components can be repaired or recycled.</p>
          </div>
        </div>
      </section>

      {/* 6. Sora Smart Bar Details */}
      <section className={styles.detailsSection}>
        <h2 className={styles.heroTitleBlack}>
          <span className={styles.heroBoldBlack}>sora</span>
          <span className={styles.heroLightBlack}>Smart Bar</span>
        </h2>
        <div className={styles.fullWidthImage}>
          <img src="/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png" alt="Smart Bar" className={styles.immersiveImg} />
        </div>
        <div className={styles.detailsTextBlock}>
          <p>
            A centerpiece that adapts to your needs. Designed for seamless entertaining, the Sora Smart Bar blends intuitive storage with built-in functionality, letting you host with ease and elegance.
          </p>
        </div>

        <div className={styles.specsList}>
          <div className={styles.specItem}>
            <h3>Details that matter</h3>
            <span className={styles.plusIcon}>+</span>
          </div>
          <div className={styles.specItem}>
            <h3>Materials</h3>
            <span className={styles.plusIcon}>+</span>
          </div>
          <div className={styles.specItem}>
            <h3>Specifications</h3>
            <span className={styles.plusIcon}>+</span>
          </div>
        </div>
      </section>

      {/* 7. Dimensions & Warranty */}
      <section className={styles.dimensionsSection}>
        <h2 className={styles.sectionTitle}>Dimensions</h2>
        <div className={styles.dimensionsGrid}>
          <div className={styles.dimImageBlock}>
            <img src="/dim-closed.jpg" alt="Dimensions Closed" className={styles.dimImg} />
            <p className={styles.dimLabel}>35.5 in W when closed</p>
          </div>
          <div className={styles.dimImageBlock}>
            <img src="/dim-open.jpg" alt="Dimensions Open" className={styles.dimImg} />
            <p className={styles.dimLabel}>71 in W when open</p>
          </div>
        </div>

        <div className={styles.featuresRow}>
          <div className={styles.featureCol}>
            <div className={styles.featureIconBlock}>
              <div className={styles.circlePlaceholder}></div>
            </div>
            <p>5-Year Limited Warranty</p>
          </div>
          <div className={styles.featureCol}>
            <div className={styles.featureIconBlock}>
              <div className={styles.circlePlaceholder}></div>
            </div>
            <p>Customization Available</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
