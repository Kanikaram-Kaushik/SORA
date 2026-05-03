import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      
      {/* Window 1: Hero */}
      <section className={`${styles.window} ${styles.windowFull}`}>
        <div 
          className={styles.heroImage} 
          style={{ backgroundImage: 'url(/about_hero.png)' }}
        />
        <div className={styles.sectionHeader} style={{ padding: '0 24px' }}>
          <span className={styles.category}>The Studio</span>
          <h1 className={styles.title}>Inside Sora</h1>
          <p className={styles.description}>
            Sora is a premium design house dedicated to the art of minimalist living. 
            We believe that space should be a sanctuary of light, form, and purpose.
          </p>
        </div>
      </section>

      {/* Window 2: Origin Story */}
      <section className={`${styles.window} ${styles.windowTwo}`}>
        <div className={styles.howItStarted}>
          <span className={styles.category}>Origins</span>
          <h2 className={styles.title}>How it started</h2>
          <p className={styles.description}>
            Founded on the principle that modern design should be both timeless and transformative. 
            What began as a small workshop in 2018 has evolved into a global collective of designers, 
            engineers, and artisans.
          </p>
          <p className={styles.description} style={{ marginTop: '24px' }}>
            Our journey is driven by a singular mission: to create objects and environments 
            that inspire a more conscious and beautiful way of life.
          </p>
        </div>
      </section>

      {/* Window 3 & 4: Process */}
      <section className={styles.window}>
        <div className={styles.windowGrid}>
          <div className={styles.sectionHeader}>
            <span className={styles.category}>Craftsmanship</span>
            <h2 className={styles.title}>Refined Process</h2>
            <p className={styles.description}>
              Every piece in our collection undergoes a rigorous design and prototyping phase 
              in our central studio. We blend traditional techniques with cutting-edge technology to achieve unmatched precision.
            </p>
          </div>
          <div 
            className={styles.imageBox} 
            style={{ backgroundImage: 'url(/about_process.png)' }}
          />
        </div>
      </section>

      {/* Window 5: Responsible Design */}
      <section className={styles.window}>
        <div 
          className={styles.heroImage} 
          style={{ backgroundImage: 'url(/about_responsible.png)', height: '70vh', marginBottom: '60px' }}
        />
        <div className={styles.sectionHeader}>
          <span className={styles.category}>Sustainability</span>
          <h2 className={styles.title}>Responsible Design</h2>
          <p className={styles.description}>
            Sustainability isn't an afterthought at Sora; it's our foundation. 
            We source materials that are as durable as they are beautiful, ensuring 
            that every product has a minimal environmental footprint.
          </p>
        </div>
      </section>

      {/* Window 6: Principles Grid */}
      <section className={`${styles.window} ${styles.windowTwo}`}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center' }}>
          <span className={styles.category} style={{ margin: '0 auto 16px' }}>Our DNA</span>
          <h2 className={styles.title}>The Principles</h2>
          <p className={styles.description} style={{ margin: '0 auto' }}>
            The core values that guide every decision we make and every product we create.
          </p>
        </div>
        
        <div className={styles.iconGrid}>
          <div className={styles.iconItem}>
            <div className={styles.iconCircle}>01</div>
            <span className={styles.iconText}>Purity</span>
          </div>
          <div className={styles.iconItem}>
            <div className={styles.iconCircle}>02</div>
            <span className={styles.iconText}>Precision</span>
          </div>
          <div className={styles.iconItem}>
            <div className={styles.iconCircle}>03</div>
            <span className={styles.iconText}>Purpose</span>
          </div>
          <div className={styles.iconItem}>
            <div className={styles.iconCircle}>04</div>
            <span className={styles.iconText}>Planet</span>
          </div>
        </div>
      </section>

      {/* Window 7: Details */}
      <section className={styles.window}>
        <div className={styles.sectionHeader}>
          <span className={styles.category}>Materials & Ethics</span>
          <h2 className={styles.title}>Materials</h2>
          
          <div className={styles.listSection}>
            <div className={styles.listItem}>
              <h3>Ethical Sourcing</h3>
              <p>We partner exclusively with suppliers who share our commitment to fair labor and environmental stewardship.</p>
            </div>
            <div className={styles.listItem}>
              <h3>Packaging</h3>
              <p>100% plastic-free, recyclable, and compostable. We design our packaging to be as minimal as the products inside.</p>
            </div>
            <div className={styles.listItem}>
              <h3>Designed for disassembly</h3>
              <p>Our products are engineered to be easily repaired or recycled at the end of their lifecycle, promoting a circular economy.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
