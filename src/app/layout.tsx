import type { Metadata } from 'next';
import { getDesign, getProject } from '@/lib/cms-client';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const project = await getProject();
  return {
    title: {
      default: project.name,
      template: `%s | ${project.name}`,
    },
    description: `${project.name} - ${project.primary_category || 'Professional Services'}`,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const design = await getDesign();
  
  return (
    <html lang="en">
      <head>
        {design?.cssVariables && (
          <style dangerouslySetInnerHTML={{ __html: design.cssVariables }} />
        )}
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
