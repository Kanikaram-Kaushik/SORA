import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BehindDesign.module.css';

export default function BehindDesignPage() {
  return (
    <main className={styles.main}>
      <div className={styles.navSpacer}></div>

      {/* WINDOW 1 */}
      <section className={styles.windowOne}>
        <h1 className={styles.pageTitle}>Behind the design.</h1>
        <div className={styles.heroImageWrapper}>
          <Image src="/mountain_lighting.png" alt="Behind the design primary hero" fill className={styles.heroImage} unoptimized/>
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>The Concept</h2>
          <p className={styles.description}>
            Every piece is meticulously crafted with an absolute dedication to form and function. 
            We look deep into the relationship between natural light and human spaces, 
            iterating endlessly to find that perfect balance of harmony and aesthetic weight.
          </p>
        </div>
      </section>

      {/* WINDOW 2 */}
      <section className={styles.windowTwo}>
        <div className={styles.imageStack}>
          <div className={styles.stackedImageWrapper}>
            <Image src="/house_products.png" alt="Design Process Snapshot 1" fill className={styles.stackedImage} unoptimized/>
          </div>
          <div className={styles.stackedImageWrapper}>
            <Image src="/mountain_lighting.png" alt="Design Process Snapshot 2" fill className={styles.stackedImage} unoptimized/>
          </div>
          <div className={styles.stackedImageWrapper}>
            <Image src="/house_products.png" alt="Design Process Snapshot 3" fill className={styles.stackedImage} unoptimized/>
          </div>
        </div>
      </section>

      {/* WINDOW 3: Lighting */}
      <section className={styles.categorySection}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Lighting</h2>
          <p className={styles.description}>
            Our luminaires are more than just light sources. They are sculptural elements designed to transform the atmosphere of any room, balancing technical precision with artistic expression.
          </p>
          <Link href="/lighting" className={styles.hyperlink}>
            Explore our luminaries <span className={styles.arrowIcon}>&#8594;</span>
          </Link>
        </div>
        
        <div className={styles.imageStack}>
          <div className={styles.stackedImageWrapper}>
            <Image src="/mountain_lighting.png" alt="Lighting Inspiration 1" fill className={styles.stackedImage} unoptimized/>
          </div>
          <div className={styles.stackedImageWrapper}>
            <Image src="/mountain_lighting.png" alt="Lighting Inspiration 2" fill className={styles.stackedImage} unoptimized/>
          </div>
          <div className={styles.stackedImageWrapper}>
            <Image src="/mountain_lighting.png" alt="Lighting Inspiration 3" fill className={styles.stackedImage} unoptimized/>
          </div>
        </div>
      </section>

      {/* WINDOW 4: Lifestyle */}
      <section className={styles.categorySection}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Lifestyle</h2>
          <p className={styles.description}>
            Elevate your everyday rituals. Our lifestyle products blend seamlessly into your personal space, carefully crafted from materials that grow more beautiful with time.
          </p>
          <Link href="/living" className={styles.hyperlink}>
            Explore our lifestyle products <span className={styles.arrowIcon}>&#8594;</span>
          </Link>
        </div>
        
        <div className={styles.imageStack}>
          <div className={styles.stackedImageWrapper}>
            <Image src="/house_products.png" alt="Lifestyle Inspiration 1" fill className={styles.stackedImage} unoptimized/>
          </div>
          <div className={styles.stackedImageWrapper}>
            <Image src="/house_products.png" alt="Lifestyle Inspiration 2" fill className={styles.stackedImage} unoptimized/>
          </div>
          <div className={styles.stackedImageWrapper}>
            <Image src="/house_products.png" alt="Lifestyle Inspiration 3" fill className={styles.stackedImage} unoptimized/>
          </div>
        </div>
      </section>

    </main>
  );
}
