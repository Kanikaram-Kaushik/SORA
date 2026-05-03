"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      
      {/* Navigation spacing */}
      <div className={styles.navSpacer} />

      {/* Header Section */}
      <section className={styles.header}>
        <span className={styles.category}>Get in Touch</span>
        <h1 className={styles.pageTitle}>Contact</h1>
        <p className={styles.subtitle}>
          We're here to help. Reach out with any questions about our collections or design services.
        </p>
      </section>

      {/* Contact Methods */}
      <section className={styles.contactMethods}>
        {/* Mobile Number */}
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>📱</div>
          <div className={styles.contactContent}>
            <p className={styles.contactLabel}>Mobile Number</p>
            <a href="tel:+919876543210" className={styles.contactLink}>
              +91 98765 43210
            </a>
            <p className={styles.contactNote}>(Tap to call or text)</p>
          </div>
        </div>

        {/* Email */}
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>✉️</div>
          <div className={styles.contactContent}>
            <p className={styles.contactLabel}>Email</p>
            <a href="mailto:hello@sorastudio.com" className={styles.contactLink}>
              hello@sorastudio.com
            </a>
          </div>
        </div>
      </section>

      {/* Address Sections */}
      <section className={styles.addresses}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Our Locations</h2>
          <p className={styles.sectionDescription}>Design Studio & Workshop</p>
        </div>

        <div className={styles.addressGrid}>
          {/* Design Studio */}
          <div className={styles.addressBlock}>
            <h3 className={styles.addressHeading}>Design Studio / Coffee Office</h3>
            <p className={styles.addressText}>
              1/2/3, ABC Street<br />
              Habargula, Hyderabad<br />
              500089
            </p>
          </div>

          {/* Workshop */}
          <div className={styles.addressBlock}>
            <h3 className={styles.addressHeading}>Workshop</h3>
            <p className={styles.addressText}>
              1/2/3, ABC Street<br />
              Habargula, Hyderabad<br />
              500089
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
