import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavigationWrapper from '@/components/NavigationWrapper';
import Footer from '@/components/Footer';
import styles from './catalogue.module.css';
import { unsplashRandom } from '@/lib/unsplash';

// ─── Catalogue metadata map ────────────────────────────────────────
const catalogues: Record<string, { title: string; category: string; img: string; alt: string }> = {
  indoor: {
    title: 'Indoor',
    category: 'Luminaires',
    img: unsplashRandom('indoor lighting', 33),
    alt: 'Sora Indoor Luminaires',
  },
  outdoor: {
    title: 'Outdoor',
    category: 'Luminaires',
    img: unsplashRandom('outdoor lighting', 34),
    alt: 'Sora Outdoor Luminaires',
  },
  luxe: {
    title: 'Luxe',
    category: 'Living',
    img: unsplashRandom('luxury interior', 35),
    alt: 'Sora Luxe Living collection',
  },
  'bar-counter': {
    title: 'Bar Counter',
    category: 'Living',
    img: unsplashRandom('bar counter interior', 36),
    alt: 'Sora Bar Counter collection',
  },
  'ergo-desk': {
    title: 'Ergo Desk',
    category: 'Living',
    img: unsplashRandom('ergonomic workspace', 37),
    alt: 'Sora Ergo Desk collection',
  },
};

// ─── Static metadata per slug ──────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ catalogue: string }>;
}) {
  const { catalogue } = await params;
  const item = catalogues[catalogue];
  const title = item ? `${item.title} — Downloads — Sora` : 'Downloads — Sora';
  return { title, description: `Sora ${item?.title ?? ''} catalogue coming soon.` };
}

// Tell Next.js which paths to pre-render
export function generateStaticParams() {
  return Object.keys(catalogues).map(slug => ({ catalogue: slug }));
}

export default async function CataloguePage({
  params,
}: {
  params: Promise<{ catalogue: string }>;
}) {
  const { catalogue } = await params;
  const item = catalogues[catalogue];

  // Graceful fallback for any unknown slug (won't 404)
  if (!item) {
    return (
      <main className={styles.main}>
        <NavigationWrapper />
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Downloads</p>
          <h1 className={styles.heading}>Coming Soon</h1>
          <p className={styles.body}>This catalogue is on its way.</p>
          <Link href="/download" className={styles.backLink}>← Back to Downloads</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <NavigationWrapper />

      {/* ── Hero image ──────────────────────────────────────── */}
      <div className={styles.heroImage}>
        <Image
          src={item.img}
          alt={item.alt}
          fill
          className={styles.heroImg}
          unoptimized
          priority
        />
        {/* Dark gradient overlay */}
        <div className={styles.heroOverlay} />
      </div>

      {/* ── Coming-soon card ────────────────────────────────── */}
      <section className={styles.card}>
        <p className={styles.eyebrow}>{item.category}</p>
        <h1 className={styles.heading}>{item.title}</h1>

        {/* Animated divider */}
        <div className={styles.divider} />

        <p className={styles.body}>
          This catalogue is being prepared and will be available for download shortly.
          Check back soon or get in touch for an early copy.
        </p>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
          <Link href="/download" className={styles.backLink}>
            ← Back to Downloads
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
