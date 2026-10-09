import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/content';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'میثم علیان نژادی | Meysam Aliannezhadi',
  description: 'WordPress-Entwicklung, SEO und Digital Marketing',
  robots: {index: true, follow: true},
  icons: {icon:'/favicon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="de" dir="ltr" suppressHydrationWarning><body>{children}</body></html>;
}
