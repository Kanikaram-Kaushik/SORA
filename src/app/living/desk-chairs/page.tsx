import React from 'react';
import Link from 'next/link';
import LivingNavigation from '@/components/LivingNavigation';
import Footer from '@/components/Footer';
import styles from '../subpage.module.css';

export default function DeskChairsPage() {
  return (
    <main className={styles.main}>
      <LivingNavigation />
      <div className={styles.content}>
        <span className={styles.category}>Baby Furniture</span>
        <h1 className={styles.title}>Desk / Chairs</h1>
        <p className={styles.description}>
          Ergonomic furniture tailored for the early years, fostering creativity and comfort in a playful yet premium style.
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
