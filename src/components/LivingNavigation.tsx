"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './LivingNavigation.module.css';

export default function LivingNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowNav(true);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle header show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    if (isOpen) setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <>
      <header className={`${styles.header} ${showNav ? styles.headerVisible : styles.headerHidden}`}>
        <div className={styles.headerInner}>
          <div className={styles.logoGroup}>
            <div className={styles.logo}>
              <Link href="/">SORA</Link>
            </div>
            <span className={styles.livingText}>Living</span>
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

      {/* Full screen overlay menu — matched to NEW wireframe */}
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.overlayHeader}>
          <div className={styles.logoGroup}>
            <div className={styles.logo}>
              <Link href="/" className={styles.overlayLogoText} onClick={() => setIsOpen(false)}>SORA</Link>
            </div>
            <span className={styles.livingTextOverlay}>Living</span>
          </div>
          
          <button 
            className={`${styles.hamburger} ${isOpen ? styles.open : ''} ${styles.closeBtn}`} 
            onClick={toggleMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
        
        <nav className={styles.navMenu}>
          <ul className={styles.primaryLinks}>
            <li>
              <Link href="/living" onClick={() => setIsOpen(false)}>
                <span>Home</span>
              </Link>
            </li>

            {/* Smart Objects Dropdown */}
            <li className={styles.hasDropdown}>
              <button onClick={() => toggleDropdown('smart')} className={styles.dropdownToggle}>
                <span>Smart Objects</span>
                <span className={`${styles.plus} ${activeDropdown === 'smart' ? styles.minus : ''}`}>+</span>
              </button>
              <ul className={`${styles.dropdownMenu} ${activeDropdown === 'smart' ? styles.dropdownOpen : ''}`}>
                <li><Link href="/living/bar-counter" onClick={() => setIsOpen(false)}>Bar Counter</Link></li>
                <li><Link href="/living/ergo-desk" onClick={() => setIsOpen(false)}>Ergo Desk</Link></li>
              </ul>
            </li>

            {/* Lamps Dropdown */}
            <li className={styles.hasDropdown}>
              <button onClick={() => toggleDropdown('lamps')} className={styles.dropdownToggle}>
                <span>Lamps</span>
                <span className={`${styles.plus} ${activeDropdown === 'lamps' ? styles.minus : ''}`}>+</span>
              </button>
              <ul className={`${styles.dropdownMenu} ${activeDropdown === 'lamps' ? styles.dropdownOpen : ''}`}>
                <li><Link href="/living/floor-lamps" onClick={() => setIsOpen(false)}>Floor Lamps</Link></li>
                <li><Link href="/living/table-lamps" onClick={() => setIsOpen(false)}>Table Lamps</Link></li>
                <li><Link href="/living/smart-lamps" onClick={() => setIsOpen(false)}>Smart Lamps</Link></li>
              </ul>
            </li>

            {/* Baby Furniture Dropdown */}
            <li className={styles.hasDropdown}>
              <button onClick={() => toggleDropdown('baby')} className={styles.dropdownToggle}>
                <span>Baby Furniture</span>
                <span className={`${styles.plus} ${activeDropdown === 'baby' ? styles.minus : ''}`}>+</span>
              </button>
              <ul className={`${styles.dropdownMenu} ${activeDropdown === 'baby' ? styles.dropdownOpen : ''}`}>
                <li><Link href="/living/crib-bed" onClick={() => setIsOpen(false)}>Crib / Bed</Link></li>
                <li><Link href="/living/desk-chairs" onClick={() => setIsOpen(false)}>Desk / Chairs</Link></li>
                <li><Link href="/living/storage" onClick={() => setIsOpen(false)}>Storage</Link></li>
                <li><Link href="/living/accessories" onClick={() => setIsOpen(false)}>Accessories</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/living/gifting" onClick={() => setIsOpen(false)}>
                <span>Gifting</span>
              </Link>
            </li>
          </ul>
          
          <div className={styles.bottomSection}>
            <ul className={styles.secondaryLinks}>
              <li>
                <Link href="/download" onClick={() => setIsOpen(false)}>
                  <span>Downloads</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
