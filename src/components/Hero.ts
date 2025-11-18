import type { ReactNode } from 'react';

export interface HeroProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}
