import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/content';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap {
 const languages={de:siteUrl+'/',en:siteUrl+'/en/',fa:siteUrl+'/fa/'};
 return ['/','/en/','/fa/'].map(path=>({url:siteUrl+path,changeFrequency:'monthly' as const,priority:path==='/'?1:0.8,alternates:{languages}}));
}
