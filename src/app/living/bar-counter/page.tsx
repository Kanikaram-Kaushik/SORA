import React from 'react';
import Link from 'next/link';
import LivingNavigation from '@/components/LivingNavigation';
import Footer from '@/components/Footer';
import styles from '../subpage.module.css';

export default function BarCounterPage() {
  return (
    <main className={styles.main}>
      <LivingNavigation />
      <div className={styles.content}>
        <span className={styles.category}>Smart Objects</span>
        <h1 className={styles.title}>Bar Counter</h1>
        <p className={styles.description}>
          The ultimate fusion of technology and social design. Our smart bar counters redefine the modern entertainment space.
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
