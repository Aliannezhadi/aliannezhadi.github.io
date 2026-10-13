import type { Metadata } from 'next';
import { CardtoCardLanding } from '@/components/cardtocard-landing';
export const metadata: Metadata = {title: 'Card to Card | WooCommerce | Meysam Aliannezhadi',description:'Card-to-card payments for WooCommerce, private receipt uploads, order approval, unlimited license enquiries and custom WordPress plugin development.',alternates:{canonical:'/en/cardtocard/',languages:{de:'/cardtocard/',en:'/en/cardtocard/',fa:'/fa/cardtocard/'}}};
export default function PluginPage(){return <CardtoCardLanding locale="en"/>}
