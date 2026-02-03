import { getContent, getProject } from '@/lib/cms-client';
import { Hero } from '@/components/sections/Hero';
import { Card } from '@/components/ui/Card';

export default async function HomePage() {
  const [project, { items: content }] = await Promise.all([
    getProject(),
    getContent({ type: 'page', slug: '' }),
  ]);
  
  const homepage = content?.[0];

  return (
    <>
      <Hero 
        title={homepage?.h1 || project.name}
        subtitle={homepage?.excerpt || `Welcome to ${project.name}`}
        ctaText="Learn More"
        ctaHref="/services"
      />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Our Services
        </h2>
        {/* Add service cards here */}
      </section>
    </>
  );
}
