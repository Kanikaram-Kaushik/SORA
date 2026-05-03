import React from 'react';
import Link from 'next/link';
import LivingNavigation from '@/components/LivingNavigation';
import Footer from '@/components/Footer';
import styles from '../subpage.module.css';

export default function AccessoriesPage() {
  return (
    <main className={styles.main}>
      <LivingNavigation />
      <div className={styles.content}>
        <span className={styles.category}>Baby Furniture</span>
        <h1 className={styles.title}>Accessories</h1>
        <p className={styles.description}>
          The finishing touches that complete the room. Premium materials and thoughtful design for the smallest details.
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
