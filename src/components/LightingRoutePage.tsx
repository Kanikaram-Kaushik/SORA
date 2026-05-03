import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightingNavigation from './LightingNavigation';
import Footer from './Footer';
import styles from './LightingRoutePage.module.css';

type RelatedLink = {
  title: string;
  href: string;
  description: string;
};

type LightingRoutePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  points: string[];
  related: RelatedLink[];
};

export default function LightingRoutePage({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryCtaLabel,
  primaryCtaHref,
  points,
  related,
}: LightingRoutePageProps) {
  return (
    <main className={styles.main}>
      <LightingNavigation />

      <div className={styles.navSpacer} />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image src={imageSrc} alt={imageAlt} fill className={styles.heroImage} unoptimized />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>

          <Link href={primaryCtaHref} className={styles.primaryButton}>
            {primaryCtaLabel}
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>What defines this collection</h2>
        <div className={styles.pointGrid}>
          {points.map((point) => (
            <article key={point} className={styles.pointCard}>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Related spaces</h2>
        <div className={styles.relatedGrid}>
          {related.map((item) => (
            <Link key={item.href} href={item.href} className={styles.relatedCard}>
              <span className={styles.relatedTitle}>{item.title}</span>
              <span className={styles.relatedDescription}>{item.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}