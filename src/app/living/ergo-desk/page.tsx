import React from 'react';
import Link from 'next/link';
import LivingNavigation from '@/components/LivingNavigation';
import Footer from '@/components/Footer';
import styles from '../subpage.module.css';

export default function ErgoDeskPage() {
  return (
    <main className={styles.main}>
      <LivingNavigation />
      <div className={styles.content}>
        <span className={styles.category}>Smart Objects</span>
        <h1 className={styles.title}>Ergo Desk</h1>
        <p className={styles.description}>
          Precision-engineered work surfaces that adapt to your movement, enhancing productivity and wellness.
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
