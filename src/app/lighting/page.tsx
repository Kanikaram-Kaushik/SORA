"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightingNavigation from '@/components/LightingNavigation';
import Footer from '@/components/Footer';
import styles from './lighting.module.css';

const slides = [
  {
    image: '/luminaire_indoor.png',
    eyebrow: 'Indoor luminaires',
    title: 'Soft layers for calm interiors',
    description: 'Ambient, task, and accent lighting designed to shape warm and balanced rooms.',
    href: '/lighting/indoor',
  },
  {
    image: '/luminaire_outdoor.png',
    eyebrow: 'Outdoor luminaires',
    title: 'Architectural light for exterior spaces',
    description: 'Weather-aware fixtures and clean silhouettes made for terraces, facades, and gardens.',
    href: '/lighting/outdoor',
  },
  {
    image: '/mountain_lighting.png',
    eyebrow: 'Lux collection',
    title: 'Statement pieces with a sculptural edge',
    description: 'Signature luminaires that turn light into a focal point while keeping the palette restrained.',
    href: '/lighting/lux',
  },
];

const destinations = [
  { title: 'Indoor', href: '/lighting/indoor', description: 'Ambient, task, and decorative lighting for homes and studios.' },
  { title: 'Outdoor', href: '/lighting/outdoor', description: 'Exterior fixtures built for weather and visual balance.' },
  { title: 'Lux', href: '/lighting/lux', description: 'Premium signature lighting with a sculptural profile.' },
  { title: 'Services', href: '/lighting/services', description: 'Planning, specification, and project support.' },
  { title: 'Automation', href: '/lighting/automation', description: 'Connected lighting controls and smart scenes.' },
];

export default function LightingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      <LightingNavigation />

      <div className={styles.navSpacer} />

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ''}`}
            >
              <Image src={slide.image} alt={slide.title} fill className={styles.slideImage} unoptimized />
            </div>
          ))}

          <div className={styles.overlay} />

          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{slides[currentSlide].eyebrow}</span>
            <h1 className={styles.title}>{slides[currentSlide].title}</h1>
            <p className={styles.description}>{slides[currentSlide].description}</p>
            <Link href={slides[currentSlide].href} className={styles.primaryButton}>
              Explore {slides[currentSlide].eyebrow}
            </Link>
          </div>

          <div className={styles.pagination} aria-label="Lighting slides">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Collections</span>
          <h2 className={styles.sectionTitle}>Built as a family of light</h2>
          <p className={styles.sectionLead}>
            Move between interior, exterior, and statement pieces while keeping the same restrained visual language.
          </p>
        </div>

        <div className={styles.grid}>
          {destinations.map((item) => (
            <Link key={item.href} href={item.href} className={styles.card}>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardDescription}>{item.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <div>
            <span className={styles.eyebrow}>Quick links</span>
            <h2 className={styles.sectionTitle}>Need the rest of the brand?</h2>
          </div>

          <div className={styles.inlineLinks}>
            <Link href="/download" className={styles.inlineLink}>Downloads</Link>
            <Link href="/contact" className={styles.inlineLink}>Contact</Link>
            <Link href="/about" className={styles.inlineLink}>About</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
