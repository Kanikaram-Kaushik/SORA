import React from 'react';
import LightingRoutePage from '@/components/LightingRoutePage';

export default function LightingAutomationPage() {
  return (
    <LightingRoutePage
      eyebrow="Automation"
      title="Connected lighting scenes and controls"
      description="Automation brings dimming, scheduling, and smart scene behavior into the lighting system while keeping the user experience simple and calm."
      imageSrc="/mountain_lighting.png"
      imageAlt="Lighting automation preview"
      primaryCtaLabel="Plan automation"
      primaryCtaHref="/contact"
      points={[
        'Scene-based control for everyday routines and special moments.',
        'App and sensor integrations that reduce friction for the user.',
        'A system-level approach that respects the architectural intent.',
      ]}
      related={[
        { title: 'Indoor', href: '/lighting/indoor', description: 'Pair automation with indoor fixture planning.' },
        { title: 'Outdoor', href: '/lighting/outdoor', description: 'Extend smart behavior to terraces and facades.' },
        { title: 'Services', href: '/lighting/services', description: 'Work with the team on a full system layout.' },
      ]}
    />
  );
}
