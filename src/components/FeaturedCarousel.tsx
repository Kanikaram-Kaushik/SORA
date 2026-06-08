"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './FeaturedCarousel.module.css';

import Link from 'next/link';

const featuredData = [
  {
    id: 1,
    title: "Smart Bar",
    subtitle: "Living Collection",
    imageUrl: "/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png",
    linkUrl: "/living/bar-counter"
  },
  {
    id: 4,
    title: "Eclipse",
    subtitle: "Wall sconce",
    imageUrl: "/0C8FD248-40A5-49F3-9818-09E841F6E4E3.jpg",
  }
];

export default function FeaturedCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const nextIndex = (currentIndex + 1) % featuredData.length;
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
    <div className={styles.featuredCarousel}>
      <div 
        className={styles.carouselContainer} 
        ref={containerRef}
        onScroll={handleScroll}
      >
        {featuredData.map((item, i) => {
          const content = (
            <>
              <div className={styles.featuredImageWrapper}>
                {item.imageUrl ? (
                  <Image src={item.imageUrl} alt={item.title} fill className={styles.productImage} />
                ) : (
                  <div className={styles.imagePlaceholder}></div>
                )}
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{item.title}</h3>
                {item.subtitle && <p className={styles.productSubtitle}>{item.subtitle}</p>}
              </div>
            </>
          );

          return (
            <div key={item.id} className={styles.featuredCard}>
              {item.linkUrl ? (
                <Link href={item.linkUrl} style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%', height: '100%' }}>
                  {content}
                </Link>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.paginationDots}>
        {featuredData.map((_, i) => (
          <div 
            key={i} 
            className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ''}`}
            onClick={() => {
                const width = containerRef.current?.clientWidth || 0;
                containerRef.current?.scrollTo({ left: width * i, behavior: 'smooth' });
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
