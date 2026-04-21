import React from 'react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '80px' }}></div>
      <div style={{ flex: 1, padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Contact</h1>
        <p style={{ color: '#a0a5b1' }}>Contact forms and details coming soon.</p>
      </div>
      <Footer />
    </main>
  );
}
