"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './Carousel.module.css';

const carouselData = [
  {
    id: 1,
    title: "LIGHT\nTHAT MOVES\nSUSTAINABILITY",
    description: "We uphold leading industry standards of social and environmental responsibility that shape a more ethical and sustainable future.",
    imageUrl: "/mountain_lighting.png",
    className: styles.slide1
  },
  {
    id: 2,
    title: "INNOVATIVE\nDESIGN\nSOLUTIONS",
    description: "Experience the ultimate fusion of aesthetics and function tailored for modern living spaces and environments.",
    imageUrl: "/house_products.png",
    className: styles.slide2
  },
  {
    id: 3,
    title: "SMART\nADAPTIVE\nILLUMINATION",
    description: "Set the mood perfectly with our adaptive illumination technology customized for your personal rhythm.",
    imageUrl: "/mountain_lighting.png",
    className: styles.slide3
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
    }, 5000); // 5 seconds auto-scroll

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

  const scrollNext = () => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.carouselSection}>
      <div 
        className={styles.carouselContainer} 
        ref={containerRef}
        onScroll={handleScroll}
      >
        {carouselData.map((item, index) => (
          <div key={item.id} className={`${styles.slide} ${item.className}`}>
            <div className={styles.topSection} style={{ backgroundImage: `url(${item.imageUrl})` }}>
              <h2 className={styles.slideTitle}>
                {item.title.split('\n').map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </h2>
            </div>
            <div className={styles.bottomSection}>
              <p className={styles.slideDescription}>{item.description}</p>
              
              <div className={styles.controlsRow}>
                <button className={styles.discoverButton}>DISCOVER MORE</button>
                <div className={styles.arrowButtons}>
                  <button className={styles.arrowBtn} onClick={scrollPrev}>&#8592;</button>
                  <button className={styles.arrowBtn} onClick={scrollNext}>&#8594;</button>
                </div>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
