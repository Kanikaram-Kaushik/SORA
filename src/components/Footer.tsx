import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.logoSection}>
        <div className={styles.watermarkLogo}>SORA</div>
        <h2 className={styles.logoText}>sora</h2>
        
        <div className={styles.addressWrapper}>
          <div className={styles.watermarkAddress}>HITEC City, Hyderabad,<br/>Telangana 500081</div>
          <p className={styles.addressText}>
            Veera Reddy Colony,<br />
            Nacharam, Hyderabad,<br />
            Telangana.<br />
            Pin: 500076
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className={styles.linksSection}>
        <div className={styles.navLinkWrapper}>
          <div className={styles.watermarkLink}>Downloads</div>
          <Link href="/download" className={styles.navLink}>Downloads</Link>
        </div>
        <div className={styles.navLinkWrapper}>
          <div className={styles.watermarkLink}>Contact</div>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>
        <div className={styles.navLinkWrapper}>
          <div className={styles.watermarkLink}>About</div>
          <Link href="/about" className={styles.navLink}>About</Link>
        </div>
      </div>

      {/* Bottom Section - Social */}
      <div className={styles.socialSection}>
        <div className={styles.watermarkSocial}>Social</div>
        <h3 className={styles.socialTitle}>Social</h3>
        
        <div className={styles.socialIcons}>
          <div className={styles.socialItem}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.circleIcon} aria-label="YouTube"></a>
            <span className={styles.iconLabel}>YT</span>
          </div>
          <div className={styles.socialItem}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.circleIcon} aria-label="Instagram"></a>
            <span className={styles.iconLabel}>IG</span>
          </div>
          <div className={styles.socialItem}>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.circleIcon} aria-label="Pinterest"></a>
            <span className={styles.iconLabel}>PIN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
