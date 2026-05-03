import React from 'react';
import LightingRoutePage from '@/components/LightingRoutePage';

export default function LightingIndoorPage() {
  return (
    <LightingRoutePage
      eyebrow="Indoor"
      title="Atmospheric lighting for interiors"
      description="Indoor luminaires from Sora focus on calm diffusion, subtle shadows, and a disciplined material palette. They are designed to layer cleanly in bedrooms, living spaces, and work areas."
      imageSrc="/luminaire_indoor.png"
      imageAlt="Sora indoor lighting collection"
      primaryCtaLabel="Browse indoor products"
      primaryCtaHref="/lighting/products"
      points={[
        'Warm ambient output that softens the room without flattening texture.',
        'Task-ready fixtures that keep work surfaces clear and visually quiet.',
        'Decorative silhouettes that sit naturally within the broader Sora language.',
      ]}
      related={[
        { title: 'Lux', href: '/lighting/lux', description: 'See the most sculptural lighting pieces in the collection.' },
        { title: 'Services', href: '/lighting/services', description: 'Plan a lighting scheme with project support.' },
        { title: 'Automation', href: '/lighting/automation', description: 'Add controls, scenes, and sensor-driven behavior.' },
      ]}
    />
  );
}