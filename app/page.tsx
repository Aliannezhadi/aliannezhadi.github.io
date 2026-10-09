import { Portfolio } from '@/components/portfolio';
import { content } from '@/lib/content';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: content.de.seoTitle, description: content.de.seoDescription,
  alternates:{canonical:'/',languages:{de:'/',en:'/en/',fa:'/fa/','x-default':'/'}},
  openGraph:{title:content.de.seoTitle,description:content.de.seoDescription,url:'/',siteName:'Meysam Aliannezhadi',locale:'de_DE',type:'website'},
};
export default function Home(){return <Portfolio locale="de"/>}
