"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LivingNavigation from '@/components/LivingNavigation';
import styles from './living.module.css';

const carouselSlides = [
  {
    id: 1,
    image: '/living_hero_1.png',
    heading: 'Sora Living\nCollection',
    description: 'Discover the art of minimalist living with our curated collection of premium furniture and decor.'
  },
  {
    id: 2,
    image: '/living_hero_2.png',
    heading: 'Refined\nAesthetics',
    description: 'Every piece is a testament to timeless design, blending function with sophisticated elegance.'
  },
  {
    id: 3,
    image: '/living_hero_3.png',
    heading: 'Modern\nSanctuary',
    description: 'Transform your space into a sanctuary of light and form with Sora\'s bespoke living solutions.'
  }
];

const subLinks = [
  '/living/bar-counter',
  '/living/ergo-desk',
  '/living/floor-lamps',
  '/living/table-lamps',
  '/living/smart-lamps',
  '/living/crib-bed',
  '/living/desk-chairs',
  '/living/storage',
  '/living/accessories',
  '/living/gifting'
];

export default function LivingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [randomHref, setRandomHref] = useState(subLinks[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, []);

  // Update random link whenever slide changes
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * subLinks.length);
    setRandomHref(subLinks[randomIndex]);
  }, [currentSlide]);

  return (
    <main className={styles.main}>
      <LivingNavigation />
      
      <div className={styles.carousel}>
        {carouselSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.heading}>
          {carouselSlides[currentSlide].heading.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className={styles.description}>
          {carouselSlides[currentSlide].description}
        </p>
        <Link href={randomHref} className={styles.exploreLink}>
          Explore Collection <span>&rarr;</span>
        </Link>
      </div>

      <div className={styles.pagination}>
        {carouselSlides.map((_, index) => (
          <div 
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </main>
  );
}
