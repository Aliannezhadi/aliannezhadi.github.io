import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap {
  const languages={fa:siteUrl+'/',en:siteUrl+'/en/',de:siteUrl+'/de/'};
  return ['/', '/en/', '/de/'].map(path=>({url:siteUrl+path,changeFrequency:'monthly' as const,priority:path==='/'?1:0.8,alternates:{languages}}));
}
