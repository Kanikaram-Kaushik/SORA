"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './LightingNavigation.module.css';

export default function LightingNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logoGroup} aria-label="Sora home">
            <span className={styles.logo}>SORA</span>
            <span className={styles.subTitle}>Lighting</span>
          </Link>

          <button
            type="button"
            className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle lighting menu"
            aria-expanded={isOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </header>

      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.overlayHeader}>
          <Link href="/" className={styles.overlayLogo} onClick={() => setIsOpen(false)}>
            <span className={styles.logo}>SORA</span>
            <span className={styles.subTitle}>Lighting</span>
          </Link>

          <button
            type="button"
            className={`${styles.menuButton} ${styles.closeButton} ${isOpen ? styles.menuButtonOpen : ''}`}
            onClick={() => setIsOpen(false)}
            aria-label="Close lighting menu"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

        <nav className={styles.navMenu} aria-label="Lighting site navigation">
          <div className={styles.primarySection}>
            <Link href="/lighting" className={styles.primaryLink} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/lighting/indoor" className={styles.primaryLink} onClick={() => setIsOpen(false)}>
              Indoor
            </Link>
            <Link href="/lighting/outdoor" className={styles.primaryLink} onClick={() => setIsOpen(false)}>
              Outdoor
            </Link>
            <Link href="/lighting/lux" className={styles.primaryLink} onClick={() => setIsOpen(false)}>
              Lux
            </Link>
            <Link href="/lighting/services" className={styles.primaryLink} onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/lighting/automation" className={styles.primaryLink} onClick={() => setIsOpen(false)}>
              Automation
            </Link>
          </div>

          <div className={styles.secondarySection}>
            <Link href="/download" className={styles.secondaryLink} onClick={() => setIsOpen(false)}>
              Downloads
            </Link>
            <Link href="/contact" className={styles.secondaryLink} onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <Link href="/about" className={styles.secondaryLink} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}