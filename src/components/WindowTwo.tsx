"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './WindowTwo.module.css';

const slides = [
  { id: 1, img: '/house_products.png', alt: 'Modern Living' },
  { id: 2, img: '/mountain_lighting.png', alt: 'Mountain Lighting' },
  { id: 3, img: '/house_products.png', alt: 'Cozy Spaces' },
  { id: 4, img: '/mountain_lighting.png', alt: 'Outdoor Illumination' },
];

export default function WindowTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const maxScroll = containerRef.current.scrollWidth - width;
        const currentScroll = containerRef.current.scrollLeft;
        
        if (currentScroll + 10 >= maxScroll) {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          containerRef.current.scrollBy({ left: width + 16, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const width = containerRef.current.clientWidth;
      if (width > 0) {
        const newIndex = Math.round(scrollPosition / (width + 16));
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    }
  };

  const goToSlide = (index: number) => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollTo({ left: (width + 16) * index, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Exhibitions</h2>
        <p className={styles.description}>Explore our curated spaces showcasing the delicate balance of light and form.</p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={containerRef} onScroll={handleScroll}>
          {slides.map(slide => (
            <div key={slide.id} className={styles.slide}>
              <img src={slide.img} alt={slide.alt} className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomContent}>
        <h3 className={styles.staticHeading}>Current Collections</h3>
        <Link href="/lighting" className={styles.linkIcon}>
          &#8594;
        </Link>
      </div>

      <div className={styles.dotsContainer}>
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}
