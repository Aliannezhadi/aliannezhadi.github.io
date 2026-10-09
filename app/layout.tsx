import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/content';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'میثم علیان نژادی | Meysam Aliannezhadi',
  description: 'وب‌سایت شخصی میثم علیان نژادی',
  robots: {index: true, follow: true},
  icons: {icon:'/favicon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fa" dir="rtl" suppressHydrationWarning><body>{children}</body></html>;
}
