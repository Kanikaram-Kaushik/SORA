import React from 'react';
import LightingRoutePage from '@/components/LightingRoutePage';

export default function LightingLuxPage() {
  return (
    <LightingRoutePage
      eyebrow="Lux"
      title="Statement luminaires with a sculptural edge"
      description="The Lux collection is where Sora pushes material expression a little further. These pieces are still restrained, but they are designed to be noticed first as objects and then experienced as light."
      imageSrc="/mountain_lighting.png"
      imageAlt="Sora lux lighting collection"
      primaryCtaLabel="Browse lux pieces"
      primaryCtaHref="/lighting/products"
      points={[
        'Signature forms designed to read like furniture for the ceiling or wall.',
        'Premium finishes and softened geometry that elevate focal areas.',
        'Lighting that delivers presence without losing the broader Sora discipline.',
      ]}
      related={[
        { title: 'Indoor', href: '/lighting/indoor', description: 'Use Lux pieces in interiors that need one focal moment.' },
        { title: 'Outdoor', href: '/lighting/outdoor', description: 'Carry a similar visual language into terraces and entrances.' },
        { title: 'Services', href: '/lighting/services', description: 'Get support with specification and placement.' },
      ]}
    />
  );
}