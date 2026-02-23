import type { ReactNode } from 'react';
import { AnimatedReveal } from './animated-reveal';

interface Props {
  id?: string;
  ariaLabel?: string;
  className?: string;
  animate?: boolean;
  delay?: number;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  ariaLabel,
  className = '',
  animate = true,
  delay = 0,
  children,
}: Props) {
  const section = (
    <section id={id} aria-label={ariaLabel} className={`py-16 md:py-24 px-4 sm:px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );

  if (!animate) return section;
  return <AnimatedReveal delay={delay}>{section}</AnimatedReveal>;
}
