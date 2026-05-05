"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowNav(true);
  }, [pathname]);

  // Handle browser back
  useEffect(() => {
    const handlePopState = () => setIsOpen(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle BFCache restore
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setIsOpen(false);
        setShowNav(true);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  // Disable background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    
    // Cleanup
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle header show/hide on scroll
  //--- OLD CODE TO HIDE NAVBAR ON SCROLL DOWN ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at the top of the page
      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const toggleMenu = () => setIsOpen(prev => !prev);

  // Do not render main navigation on lighting pages
  if (pathname?.startsWith('/lighting')) {
    return null;
  }

  return (
    <>
      <header className={`${styles.header} ${showNav ? styles.headerVisible : styles.headerHidden}`}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link href="/">SORA</Link>
          </div>
          <button 
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </header>

      {/* Full screen overlay menu */}
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.overlayHeader}>
          <div className={styles.logo}>
            <Link href="/" className={styles.overlayLogoText} onClick={() => setIsOpen(false)}>SORA</Link>
          </div>
          
          <div className={styles.overlayHeaderRight}>
            <button className={styles.searchBtn} aria-label="Search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button 
              className={`${styles.hamburger} ${isOpen ? styles.open : ''} ${styles.closeBtn}`} 
              onClick={toggleMenu}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>
        
        <nav className={styles.navMenu}>
          {pathname.startsWith('/lighting') ? (
            <ul className={styles.primaryLinks}>
              <li>
                <Link href="/lighting/products" onClick={() => setIsOpen(false)}>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/lighting/design-consultation" onClick={() => setIsOpen(false)}>
                  <span>Design consultation</span>
                </Link>
              </li>
              <li>
                <Link href="/lighting/services" onClick={() => setIsOpen(false)}>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/lighting/automation" onClick={() => setIsOpen(false)}>
                  <span>Automation</span>
                </Link>
              </li>
              <li>
                <Link href="/lighting/decorative" onClick={() => setIsOpen(false)}>
                  <span>Decorative</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className={styles.primaryLinks}>
              <li>
                <Link href="/living" onClick={() => setIsOpen(false)}>
                  <span>Sora Living</span>
                </Link>
              </li>
              <li>
                <Link href="/lighting" onClick={() => setIsOpen(false)}>
                  <span>Sora Lighting</span>
                </Link>
              </li>
              <li>
                <Link href="/behind-design" onClick={() => setIsOpen(false)}>
                  <span>Behind the design</span>
                </Link>
              </li>
              <li>
                <Link href="/design" onClick={() => setIsOpen(false)}>
                  <span>Design</span>
                </Link>
              </li>
            </ul>
          )}
          
          <div className={styles.bottomSection}>
            <ul className={styles.secondaryLinks}>
              <li>
                <Link href="/download" onClick={() => setIsOpen(false)}>
                  <span>Download</span>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <span>About us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
