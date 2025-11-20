import type { ReactNode } from 'react';

export interface HeroTitleProps {
  lines: string[];
  accentText?: string;
  accentPosition?: 'start' | 'end' | 'middle';
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  maxWidth?: string;
}

// Dados editáveis do título hero
export const heroTitleData: HeroTitleProps = {
  lines: [
    'Transforme feedback em vantagem',
    'competitiva com leveza e'
  ],
  accentText: 'Tecnologia',
  accentPosition: 'end',
  alignment: 'center',
  maxWidth: '980px'
};
