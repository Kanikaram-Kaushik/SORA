import React from 'react';
import Footer from '@/components/Footer';

export default function LightingServicesPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '80px' }}></div>
      <div style={{ flex: 1, padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Services</h1>
        <p style={{ color: '#a0a5b1' }}>Lighting services coming soon.</p>
      </div>
      <Footer />
    </main>
  );
}
