import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { siteUrl } from '@/lib/content';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'میثم علیان نژادی | Meysam Aliannezhadi',
  description: 'WordPress-Entwicklung, SEO und Digital Marketing',
  robots: {index: true, follow: true},
  icons: {icon:'/favicon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="de" dir="ltr" suppressHydrationWarning><body>{children}<Script id="crisp-chat" strategy="afterInteractive">{`window.$crisp=[];window.CRISP_WEBSITE_ID="e4351bb4-d2fd-4c01-aa4b-d6edd6063879";(function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.head.appendChild(s);})();`}</Script></body></html>;
}
