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
            src="/mountain_lighting.png" 
            alt="Mountain themed lighting"
            fill
            className={styles.image}
            unoptimized
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2>Sora Lighting</h2>
            <div className={styles.linkText}>
              <span>Explore</span>
              <span className={styles.arrow}>&#8594;</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Right Column / Card */}
      <Link href="/living" className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/house_products.png" 
            alt="Modern house products"
            fill
            className={styles.image}
            unoptimized
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h2>Sora Living</h2>
            <div className={styles.linkText}>
              <span>View Collection</span>
              <span className={styles.arrow}>&#8594;</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
