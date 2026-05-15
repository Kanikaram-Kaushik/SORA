"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightingNavigation from '@/components/LightingNavigation';
import Footer from '@/components/Footer';
import styles from './lighting.module.css';

const carouselData = [
  {
    image: "/lighting_hero.png",
    title: "Sora Lighting",
    description: "The Art of Illumination",
    link: "/lighting/indoor"
  },
  {
    image: "/luminaire_indoor.png",
    title: "Indoor Collection",
    description: "Precision-engineered sculptures that define space.",
    link: "/lighting/indoor"
  },
  {
    image: "/luminaire_outdoor.png",
    title: "Outdoor Systems",
    description: "Robust elegance for every architectural detail.",
    link: "/lighting/outdoor"
  },
  {
    image: "/lighting_lux.png",
    title: "Lux Series",
    description: "A testament to our commitment to aesthetic purity.",
    link: "/lighting/lux"
  },
  {
    image: "/mountain_lighting.png",
    title: "Engineered Brilliance",
    description: "Experience the ultimate fusion of aesthetics and function.",
    link: "/about"
  }
];

export default function LightingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      <LightingNavigation />
      
      {/* Window 1: Hero Carousel */}
      <section className={styles.heroCarousel}>
        {carouselData.map((slide, index) => (
          <div 
            key={index} 
            className={`${styles.carouselSlide} ${index === currentSlide ? styles.active : ''}`}
          >
            <Image 
              src={slide.image} 
              alt={slide.title} 
              fill 
              className={styles.heroImage} 
              priority={index === 0}
            />
            <div className={styles.overlay} />
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>{slide.title}</h1>
              <p className={styles.heroSubtitle}>{slide.description}</p>
              <Link href={slide.link} className={styles.exploreButton}>
                Explore
              </Link>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className={styles.indicators}>
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
