import type { ReactNode } from 'react';

interface HeroSectionProps {
  id?: string;
  className?: string;
  backgroundImage?: string;
  overlay?: {
    opacity: number;
    backgroundColor: string;
  };
  children: ReactNode;
}

export function HeroSection({ id, className = '', backgroundImage, overlay, children }: HeroSectionProps) {
  const sectionStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined;

  return (
    <section className={`header3 ${className}`} id={id} style={sectionStyle}>
      {overlay && (
        <div className="mbr-overlay" style={{ opacity: overlay.opacity, backgroundColor: overlay.backgroundColor }} />
      )}
      <div className="container">{children}</div>
    </section>
  );
}


