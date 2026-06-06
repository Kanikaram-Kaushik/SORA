"use client";

import React from 'react';
import LivingNavigation from '@/components/LivingNavigation';
import styles from './page.module.css';
import Footer from '@/components/Footer';

export default function BarCounterPage() {
  return (
    <main id="scroll-container" className={styles.main}>
      <LivingNavigation />

      <section className={styles.windowOne}>
        <div className={styles.heroImageContainer}>
          <img src="/EFC6F478-DF0B-467B-8A69-85E2B776ADAF.png" alt="Smart Bar" className={styles.heroImage} />

          <div className={styles.heroOverlay}>
            <div className={styles.heroHeader}>
              <span className={styles.smallTitle}>sora</span>
              <div className={styles.line}></div>
            </div>
            <h1 className={styles.title}>Smart Bar</h1>
            <p className={styles.lead}>
              A motorised bar counter designed to seamlessly reveal bar cabinet assembly at the touch of a button.
            </p>
          </div>
        </div>

        <div className={styles.textSection}>
          <p>
            Designed to function equally as a statement piece, it brings together engineering precision, everyday utility, and a refined sense of luxury.
          </p>
          <p>
            Concealed within a refined and luxurious exterior, the motorized mechanism introduces an interactive experience that transforms the object beyond conventional furniture.
          </p>
        </div>
      </section>

      <section className={styles.windowTwo}>
        <div className={styles.windowTwoImageContainer}>
          <img
            src="/win2bar.jpeg"
            alt="Smart Bar Front"
            className={styles.windowTwoImage}
          />
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.detailsSection}>
            <h2 className={styles.detailsTitle}>Details that matter</h2>
            <ul className={styles.detailsList}>
              <li>Doubles as a statement piece</li>
              <li>Powered by a robust liner actuator that operates discretely</li>
              <li>Sensor based lighting</li>
              <li>Concealed castor wheels</li>
              <li>Seamless operation with a single tap</li>
            </ul>
          </div>

          <div className={styles.fullWidthDivider}></div>

          <div className={styles.detailsSection}>
            <h2 className={styles.detailsTitle}>Materials</h2>
            <ul className={styles.detailsList}>
              <li>Carcass: BWP IS 710 Plywood</li>
              <li>Finish: Acrylic laminate/ Duco/ PU paint</li>
              <li>Counter top: Corian/ Solid surface materials</li>
            </ul>
          </div>

          <div className={styles.shortDivider}></div>

          <div className={styles.detailsSection}>
            <h2 className={styles.detailsTitle}>Specifications</h2>
            <ul className={styles.detailsList}>
              <li>Operates on a 220V Single phase input</li>
              <li>70kg lifting capacity</li>
              <li>Lifting mechanism: Motorized linear actuator</li>
            </ul>
          </div>

          <div className={styles.shortDivider}></div>
        </div>
      </section>

      <section className={styles.windowThree}>
        <div className={styles.dimensionsTop}>
          <h2 className={styles.detailsTitle}>Dimensions</h2>
          <div className={styles.dimensionsText}>
            <p>WxDxH: 66in x 23in x 40in (when closed)</p>
            <p>WxDxH: 66in x 23in x 71in (when closed)</p>
          </div>
        </div>

        <div className={styles.fullWidthDivider}></div>

        <div className={styles.badgesContainer}>
          <div className={styles.badgeItem}>
            <div className={styles.badgeCircle}></div>
            <p className={styles.badgeText}>5 Year<br />Warranty</p>
          </div>
          <div className={styles.badgeItem}>
            <div className={styles.badgeCircle}></div>
            <p className={styles.badgeText}>Available in<br />other<br />Curated design</p>
          </div>
        </div>

        <div className={styles.fullWidthDivider}></div>

        <Footer />
      </section>
    </main>
  );
}
