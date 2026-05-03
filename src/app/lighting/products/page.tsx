import React from 'react';
import LightingRoutePage from '@/components/LightingRoutePage';

export default function LightingProductsPage() {
  return (
    <LightingRoutePage
      eyebrow="Products"
      title="A concise view of the full lighting range"
      description="Use this page as a simple landing point for the lighting catalogue while the final product-level content is assembled."
      imageSrc="/luminaire_indoor.png"
      imageAlt="Lighting products overview"
      primaryCtaLabel="Explore indoor range"
      primaryCtaHref="/lighting/indoor"
      points={[
        'Indoor, outdoor, and Lux product families in one place.',
        'A navigation-friendly overview for users moving through the site.',
        'A consistent visual system that matches the rest of Sora.',
      ]}
      related={[
        { title: 'Indoor', href: '/lighting/indoor', description: 'Start with the indoor collection.' },
        { title: 'Outdoor', href: '/lighting/outdoor', description: 'Move into the exterior fixtures.' },
        { title: 'Lux', href: '/lighting/lux', description: 'See the sculptural signature pieces.' },
      ]}
    />
  );
}
