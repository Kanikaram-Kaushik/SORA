import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <Link href="/" className={styles.logo}>SORA</Link>
      
      <div className={styles.address}>
        138, Jubilee Enclave,<br />
        HITEC City, Hyderabad,<br />
        Telangana 500081
      </div>

      {/* Middle Section */}
      <div className={styles.middleSection}>
        <div className={styles.linksSection}>
          <div className={styles.socialTitle}>Social</div>
          <div className={styles.navLinks}>
            <Link href="/download" className={styles.navLink}>Downloads</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </div>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="YouTube">YT</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Instagram">IG</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.icon} aria-label="Pinterest">PIN</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.divider}></div>
      <div className={styles.bottomBar}>
        <span>Hyderabad</span>
        <span>India</span>
      </div>
    </footer>
  );
}
