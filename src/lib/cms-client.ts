// lib/cms-client.ts
const CMS_API_URL = process.env.CMS_API_URL || 'https://axxxeayjyvwmyhfcbmdq.supabase.co/functions/v1/public-content/v1/good-guys-roofing-experts';
const CMS_API_KEY = process.env.CMS_API_KEY!;

interface ContentFilters {
  type?: string;
  slug?: string;
  city?: string;
  service?: string;
}

export async function getContent(filters: ContentFilters = {}) {
  const params = new URLSearchParams();
  if (filters.type) params.set('type', filters.type);
  if (filters.slug) params.set('slug', filters.slug);
  if (filters.city) params.set('city', filters.city);
  if (filters.service) params.set('service', filters.service);
  
  const res = await fetch(`${CMS_API_URL}/content?${params}`, {
    headers: { 'x-api-key': CMS_API_KEY },
    next: { revalidate: 60 } // ISR: revalidate every 60 seconds
  });
  
  if (!res.ok) throw new Error('Failed to fetch content');
  return res.json();
}

export async function getContentBySlug(slug: string) {
  const res = await fetch(`${CMS_API_URL}/content?slug=${slug}`, {
    headers: { 'x-api-key': CMS_API_KEY },
    next: { revalidate: 60 }
  });
  
  if (!res.ok) return null;
  const data = await res.json();
  return data.items?.[0] || null;
}

export async function getDesign() {
  const res = await fetch(`${CMS_API_URL}/design`, {
    headers: { 'x-api-key': CMS_API_KEY },
    next: { revalidate: 300 } // Design changes less frequently
  });
  
  if (!res.ok) return null;
  return res.json();
}

export async function getProject() {
  const res = await fetch(`${CMS_API_URL}/project`, {
    headers: { 'x-api-key': CMS_API_KEY },
    next: { revalidate: 300 }
  });
  
  if (!res.ok) throw new Error('Failed to fetch project');
  return res.json();
}

export async function getSitemap() {
  const res = await fetch(`${CMS_API_URL}/sitemap`, {
    headers: { 'x-api-key': CMS_API_KEY },
    next: { revalidate: 3600 } // Sitemap can be cached longer
  });
  
  if (!res.ok) throw new Error('Failed to fetch sitemap');
  return res.json();
}