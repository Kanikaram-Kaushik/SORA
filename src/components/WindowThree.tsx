import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './WindowThree.module.css';

export default function WindowThree() {
  return (
    <section className={styles.section}>
      {/* Lighting Card */}
      <Link href="/lighting" className={styles.card}>
        <Image 
          src="/mountain_lighting.png" 
          alt="Mountain lighting backdrop"
          fill
          className={styles.backgroundImage}
          unoptimized
        />
        <div className={styles.overlay}></div>
        
        <div className={styles.topContent}>
          <h2 className={styles.logoText}>Sora Lighting</h2>
        </div>
        
        <div className={styles.bottomContent}>
          <p className={styles.description}>Explore our range of lighting fixtures.</p>
          <div className={styles.arrowWrapper}>
            &#8594;
          </div>
        </div>
      </Link>

      {/* Living Card */}
      <Link href="/living" className={styles.card}>
        <Image 
          src="/house_products.png" 
          alt="Home living setup"
          fill
          className={styles.backgroundImage}
          unoptimized
        />
        <div className={styles.overlay}></div>
        
        <div className={styles.topContent}>
          <h2 className={styles.logoText}>Sora Living</h2>
        </div>
        
        <div className={styles.bottomContent}>
          <p className={styles.description}>Explore our range of lifestyle products.</p>
          <div className={styles.arrowWrapper}>
            &#8594;
          </div>
        </div>
      </Link>
    </section>
  );
}
