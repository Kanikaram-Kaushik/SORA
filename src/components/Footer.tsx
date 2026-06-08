import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.logoSection}>
        <Link href="/" className={styles.logoLink} aria-label="Sora home">
          <h2 className={styles.logoText}>sora</h2>
        </Link>
        
        <div className={styles.addressWrapper}>
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
          <Link href="/download" className={styles.navLink}>Downloads</Link>
        </div>
        <div className={styles.navLinkWrapper}>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>
        <div className={styles.navLinkWrapper}>
          <Link href="/about" className={styles.navLink}>About</Link>
        </div>
      </div>

      {/* Bottom Section - Social */}
      <div className={styles.socialSection}>
        <h3 className={styles.socialTitle}>Social</h3>
        
        <div className={styles.socialIcons}>
          <div className={styles.socialItem}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.circleIcon} aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.circleIcon} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.circleIcon} aria-label="Pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 20l4 -9" />
                <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomDivider}></div>
        <div className={styles.bottomLocations}>
          <span>Hyderabad</span>
          <span>India</span>
        </div>
      </div>
    </footer>
  );
}
