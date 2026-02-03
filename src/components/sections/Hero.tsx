import { Button } from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export function Hero({ title, subtitle, ctaText, ctaHref, backgroundImage }: HeroProps) {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center py-[var(--spacing-section,4rem)]"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' } : undefined}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/50" />}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <a href={ctaHref}>
            <Button variant="primary" size="lg">{ctaText}</Button>
          </a>
        )}
      </div>
    </section>
  );
}
