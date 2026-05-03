import React from 'react';
import Link from 'next/link';
import LivingNavigation from '@/components/LivingNavigation';
import Footer from '@/components/Footer';
import styles from '../subpage.module.css';

export default function CribBedPage() {
  return (
    <main className={styles.main}>
      <LivingNavigation />
      <div className={styles.content}>
        <span className={styles.category}>Baby Furniture</span>
        <h1 className={styles.title}>Crib / Bed</h1>
        <p className={styles.description}>
          Safe, sustainable, and beautifully designed sleeping solutions for your little ones, available in our signature Pink and Blue palettes.
        </p>
        <div className={styles.comingSoon}>Collection Coming Soon</div>
        <Link href="/living" className={styles.backLink}>
          &larr; Back to Living
        </Link>
      </div>
      <Footer />
    </main>
  );
}
