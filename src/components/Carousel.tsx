"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.css';

const showcaseData = [
  {
    id: 1,
    title: "Astra",
    brand: "by sora Lighting",
    imageUrl: "/A4190F5A-787E-4CEA-A3B8-CE631CE3D764.PNG", // User will provide image
  },
  {
    id: 2,
    title: "sora Smart Bar",
    brand: "by sora Living",
    imageUrl: "/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png",
  },
  {
    id: 3,
    title: "Helix",
    brand: "by sora Lighting",
    imageUrl: "/spiral.jpg",
  },
  {
    id: 4,
    title: "Lighting Design",
    brand: "by sora Lighting",
    imageUrl: "/6C8FB932-4BC1-49B8-B516-778849BC18AE1.PNG",
  }
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const nextIndex = (currentIndex + 1) % showcaseData.length;
        containerRef.current.scrollTo({ left: width * nextIndex, behavior: 'smooth' });
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const width = containerRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    }
  };

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.headerArea}>
        <h2 className={styles.sectionTitle}>Design Showcase</h2>
        <p className={styles.sectionDesc}>
          Products and spaces shaped through thoughtful design and material clarity
        </p>
      </div>

      <div
        className={styles.carouselContainer}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {showcaseData.map((item) => (
          <div key={item.id} className={styles.slide}>
            <div className={styles.imageWrapper}>
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} className={styles.productImage} />
              ) : (
                <div className={styles.imagePlaceholder}></div>
              )}
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productTitle}>{item.title}</h3>
              <p className={styles.productBrand}>{item.brand}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.paginationRow}>
        {showcaseData.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ''}`}
            onClick={() => {
              const width = containerRef.current?.clientWidth || 0;
              containerRef.current?.scrollTo({ left: width * i, behavior: 'smooth' });
            }}
          />
        ))}
      </div>

      <div className={styles.designBlock}>
        <h2>The <br></br>Design</h2>
      </div>
    </section>
  );
}
