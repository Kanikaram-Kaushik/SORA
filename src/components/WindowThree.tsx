import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './WindowThree.module.css';

export default function WindowThree() {
  return (
    <section className={styles.section}>
      {/* Lighting Card */}
      <Link href="/lighting" className={`${styles.card} ${styles.cardLighting}`}>
        <div className={styles.watermark}>LIGHTING</div>

        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>
            <span className={styles.titleBold}>sora</span>
            <span className={styles.titleLight}>Lighting</span>
          </h2>
          <div className={styles.bottomRow}>
            <p className={styles.cardDesc}>Discover thoughtfully designed<br/>Spatial Lighting.</p>
            <div className={styles.arrowIcon}>&#8594;</div>
          </div>
        </div>
      </Link>

      {/* Living Card */}
      <Link href="/living" className={`${styles.card} ${styles.cardLiving}`}>
        <div className={styles.watermark}>LIVING</div>

        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>
            <span className={styles.titleBold}>sora</span>
            <span className={styles.titleLight}>Living</span>
          </h2>
          <div className={styles.bottomRow}>
            <p className={styles.cardDesc}>Discover our objects designed for<br/>everyday life.</p>
            <div className={styles.arrowIcon}>&#8594;</div>
          </div>
        </div>
      </Link>
    </section>
  );
}
