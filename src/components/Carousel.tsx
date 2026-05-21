"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.css';

const carouselData = [
  {
    id: 1,
    title: "Bar Counter",
    imageUrl: "/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png",
  },
  {
    id: 2,
    title: "Lounge Seating",
    imageUrl: "/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png",
  },
  {
    id: 3,
    title: "Table Accents",
    imageUrl: "/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png",
  }
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const nextIndex = (currentIndex + 1) % carouselData.length;
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
    <section className={styles.productSection}>
      <div className={styles.headerArea}>
        <h2 className={styles.sectionTitle}>Product stories</h2>
        <p className={styles.sectionDesc}>Products and spaces shaped through thoughtful design and material clarity of light and form.</p>
      </div>

      <div 
        className={styles.carouselContainer} 
        ref={containerRef}
        onScroll={handleScroll}
      >
        {carouselData.map((item, index) => (
          <div key={item.id} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <img src={item.imageUrl} alt={item.title} className={styles.productImage} />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.watermarkBottom}>Collections</div>
              <h3 className={styles.productTitle}>{item.title}</h3>
              <span className={styles.arrowIcon}>&#8594;</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.paginationRow}>
        {carouselData.map((_, i) => (
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
        <h2>The Design</h2>
      </div>
    </section>
  );
}
