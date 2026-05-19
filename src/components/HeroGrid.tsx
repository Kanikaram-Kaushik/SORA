import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroGrid.module.css';

export default function HeroGrid() {
  return (
    <section className={styles.gridContainer}>
      {/* Left Column / Card */}
      <Link href="/lighting" className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/Mother Site_Home_W 01.3.png" 
            alt="Mountain themed lighting"
            fill
            className={styles.image}
            unoptimized
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2>
              <span className={styles.title}>sora</span>
              <span className={styles.subtitle}>Lighting</span>
            </h2>
          </div>
        </div>
      </Link>

      {/* Right Column / Card */}
      <Link href="/living" className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/Mother Site_Home_W 01.2.jpg" 
            alt="Modern house products"
            fill
            className={styles.image}
            unoptimized
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2>
              <span className={styles.title}>sora</span>
              <span className={styles.subtitle}>Living</span>
            </h2>
          </div>
        </div>
      </Link>
      {/* Studio / About block below the hero images */}
      <div className={styles.studio}>
        <div className={styles.studioContent}>
          <h3>The<br />Studio</h3>
          <p>Crafting thoughtful lifestyle products, spatial lighting with automation solutions, and intelligently engineered furniture systems for contemporary living.</p>
          <p>Our work brings together functionality, refined detailing, and technology to create purposeful experiences across objects and spaces.</p>
        </div>
      </div>
    </section>
  );
}
