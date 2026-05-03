import React from 'react';
import LightingRoutePage from '@/components/LightingRoutePage';

export default function LightingOutdoorPage() {
  return (
    <LightingRoutePage
      eyebrow="Outdoor"
      title="Architectural luminaires for exterior spaces"
      description="Outdoor lighting balances durability with the same visual restraint found across the rest of the Sora range. It is built to define paths, frame facades, and bring warmth to open-air environments."
      imageSrc="/luminaire_outdoor.png"
      imageAlt="Sora outdoor lighting collection"
      primaryCtaLabel="Browse outdoor products"
      primaryCtaHref="/lighting/products"
      points={[
        'Weather-aware fixtures designed to keep form clean in exposed settings.',
        'Light distribution that supports circulation, security, and atmosphere.',
        'A restrained profile that keeps the architecture visually dominant.',
      ]}
      related={[
        { title: 'Indoor', href: '/lighting/indoor', description: 'Match exterior pieces with interior family members.' },
        { title: 'Lux', href: '/lighting/lux', description: 'Add sculptural emphasis to thresholds and garden moments.' },
        { title: 'Automation', href: '/lighting/automation', description: 'Control outdoor scenes with app and sensor logic.' },
      ]}
    />
  );
}