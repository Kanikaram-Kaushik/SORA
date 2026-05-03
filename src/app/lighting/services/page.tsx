import React from 'react';
import LightingRoutePage from '@/components/LightingRoutePage';

export default function LightingServicesPage() {
  return (
    <LightingRoutePage
      eyebrow="Services"
      title="Lighting support from concept to installation"
      description="The services team helps shape fixture selection, spacing, and scene planning so the final result feels coherent across the entire project."
      imageSrc="/mountain_lighting.png"
      imageAlt="Lighting services preview"
      primaryCtaLabel="Start a consultation"
      primaryCtaHref="/contact"
      points={[
        'Project guidance for room-by-room lighting intent.',
        'Fixture coordination that keeps aesthetics and performance aligned.',
        'Support for retailers, studios, and residential commissions alike.',
      ]}
      related={[
        { title: 'Indoor', href: '/lighting/indoor', description: 'Review the indoor family while planning a room.' },
        { title: 'Lux', href: '/lighting/lux', description: 'Choose a statement piece for a focal space.' },
        { title: 'Automation', href: '/lighting/automation', description: 'Add controls and intelligent scenes to the project.' },
      ]}
    />
  );
}
