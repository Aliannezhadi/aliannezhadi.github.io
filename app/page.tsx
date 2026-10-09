import { Portfolio } from '@/components/portfolio';
import { content } from '@/lib/content';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: content.fa.seoTitle, description: content.fa.seoDescription,
  alternates:{canonical:'/',languages:{fa:'/',en:'/en/',de:'/de/','x-default':'/'}},
  openGraph:{title:content.fa.seoTitle,description:content.fa.seoDescription,url:'/',siteName:'Meysam Aliannezhadi',locale:'fa_IR',type:'website'},
};
export default function Home(){return <Portfolio locale="fa"/>}
