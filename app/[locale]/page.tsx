import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Portfolio } from '@/components/portfolio';
import { content, locales, type Locale } from '@/lib/content';
type Props={params:Promise<{locale:string}>};
export function generateStaticParams(){return [{locale:'en'},{locale:'de'}]}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {locale}=await params;
  if(!locales.includes(locale as Locale)||locale==='fa') return {};
  const lang=locale as Locale;
  return {title:content[lang].seoTitle,description:content[lang].seoDescription,
    alternates:{canonical:`/${lang}/`,languages:{fa:'/',en:'/en/',de:'/de/','x-default':'/'}},
    openGraph:{title:content[lang].seoTitle,description:content[lang].seoDescription,url:`/${lang}/`,siteName:'Meysam Aliannezhadi',locale:lang==='de'?'de_DE':'en_US',type:'website'}};
}
export default async function LocalePage({params}:Props){const {locale}=await params;if(locale!=='en'&&locale!=='de')notFound();return <Portfolio locale={locale as Locale}/>}
