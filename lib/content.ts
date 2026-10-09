export const siteUrl = 'https://aliannezhadi.github.io';
export const githubUrl = 'https://github.com/Aliannezhadi';
export const linkedinUrl = 'https://www.linkedin.com/in/aliannezhadi';
export const locales = ['fa', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export type Project = {slug:string;name:string;url:string;tech:string;category:string;description:Record<Locale,string>};
export const projects:Project[] = [
 {slug:'englishfact',name:'EnglishFact',url:'https://englishfact.com/',tech:'Philippines',category:'Website / SEO',description:{de:'Webprojekt für den philippinischen Markt mit Fokus auf Content-Struktur, Nutzerführung und Suchmaschinenoptimierung.',en:'Web project for the Philippine market focused on content architecture, user experience, and SEO.',fa:'پروژه وب برای بازار فیلیپین با تمرکز بر ساختار محتوا، تجربه کاربری و بهینه‌سازی برای موتورهای جست‌وجو.'}},
 {slug:'germanwm',name:'German Waste Management',url:'https://germanwm.de/',tech:'Germany',category:'Business / Web',description:{de:'Digitale Präsenz für German Waste Management in Deutschland – verständliche Servicepräsentation und suchmaschinenfreundliche Struktur.',en:'Digital presence for German Waste Management in Germany, with clear service presentation and a search-friendly structure.',fa:'حضور دیجیتال German Waste Management در آلمان با معرفی شفاف خدمات و ساختار سازگار با سئو.'}},
 {slug:'seo',name:'SEO & Digital Growth',url:'https://github.com/Aliannezhadi',tech:'SEO / Strategy',category:'Search / Marketing',description:{de:'Technische und inhaltliche SEO, Analyse und Optimierung zur nachhaltigen Verbesserung der Online-Sichtbarkeit von Unternehmen.',en:'Technical and on-page SEO, analysis and optimization to support sustainable business visibility.',fa:'سئوی فنی و داخلی، تحلیل و بهینه‌سازی برای کمک به رشد پایدار دیده‌شدن کسب‌وکارها.'}},
 {slug:'wordpress',name:'WordPress Themes & Plugins',url:'https://github.com/Aliannezhadi',tech:'WordPress / PHP',category:'CMS / Development',description:{de:'Individuelle Themes, Plugins und CMS-Erweiterungen – mit Schwerpunkt auf WordPress, Wartbarkeit und Performance.',en:'Custom themes, plugins, and CMS extensions, with a focus on WordPress, maintainability, and performance.',fa:'توسعه قالب، افزونه و امکانات سفارشی سیستم‌های مدیریت محتوا، به‌ویژه وردپرس، با تمرکز بر عملکرد و نگهداری.'}}
];
export type Dictionary = {
  nav: {about:string; expertise:string; projects:string; contact:string};
  eyebrow:string; heroA:string; heroB:string; intro:string; heroDesc:string; viewProjects:string; contactMe:string;
  scroll:string; badge:string; aboutLabel:string; aboutTitle:string; aboutBody:string; aboutBody2:string;
  whatLabel:string; whatTitle:string; specialties:{number:string;title:string;detail:string}[];
  projectLabel:string; projectTitle:string; projectText:string; githubText:string; visitRepo:string;
  contactLabel:string; contactTitle:string; contactText:string; contactButton:string;
  footerText:string; builtWith:string; available:string; seoTitle:string; seoDescription:string;
};
export const content:Record<Locale,Dictionary> = {
 de: {
  nav:{about:'Über mich',expertise:'Leistungen',projects:'Referenzen',contact:'Kontakt'},
  eyebrow:'WORDPRESS · SEO · DIGITALES WACHSTUM',intro:'Hallo, ich bin Meysam Aliannezhadi.',heroA:'Websites, die',heroB:'Unternehmen voranbringen.',
  heroDesc:'Ich unterstütze Unternehmen mit professioneller WordPress-Entwicklung, technischer Suchmaschinenoptimierung und zielgerichteten Digital-Marketing-Lösungen – für eine starke, messbare Online-Präsenz.',
  viewProjects:'Referenzen ansehen',contactMe:'Projekt besprechen',scroll:'MEHR ENTDECKEN',badge:'WORDPRESS / SEO / DIGITAL MARKETING',
  aboutLabel:'01 / ÜBER MICH',aboutTitle:'Technologie trifft Strategie.',
  aboutBody:'Ich bin Meysam Aliannezhadi, WordPress-Entwickler und SEO-Spezialist. Ich entwickle performante, nutzerfreundliche Websites und individuelle CMS-Lösungen, die technische Qualität mit den Zielen eines Unternehmens verbinden.',
  aboutBody2:'Mein Fokus liegt auf WordPress-Themes und -Plugins, technischer und On-Page-SEO, Website-Performance sowie durchdachten Digital-Marketing-Strategien. Ziel ist nicht nur eine ansprechende Website, sondern eine langfristig wirkungsvolle digitale Präsenz.',
  whatLabel:'02 / LEISTUNGEN',whatTitle:'Digitale Lösungen mit Substanz.',
  specialties:[{number:'01',title:'WordPress & CMS',detail:'Individuelle WordPress-Websites, Themes, Plugins und Erweiterungen für flexible und wartbare digitale Produkte.'},{number:'02',title:'SEO & Sichtbarkeit',detail:'Technisches SEO, On-Page-Optimierung, Content-Struktur, Core Web Vitals und nachhaltige Auffindbarkeit.'},{number:'03',title:'Digitales Wachstum',detail:'Digitale Marketingstrategien, Performance-Optimierung und nutzerorientierte Websites für Unternehmen.'}],
  projectLabel:'03 / REFERENZEN',projectTitle:'Ausgewählte Arbeiten.',projectText:'Website-Projekte, SEO- und CMS-Arbeiten für unterschiedliche Zielmärkte und Geschäftsanforderungen.',githubText:'Open-Source-Projekte ansehen',visitRepo:'Projekt öffnen',
  contactLabel:'04 / KONTAKT',contactTitle:'Lassen Sie uns digital wachsen.',contactText:'Sie planen ein WordPress-Projekt, möchten Ihre Website professionell optimieren oder suchen Unterstützung bei SEO und Digital Marketing? Ich freue mich auf Ihre Nachricht. Social Media: @aliannezhadi.',contactButton:'Auf LinkedIn kontaktieren',
  footerText:'WordPress · SEO · Digital Marketing',builtWith:'Erstellt mit Next.js',available:'Deutsch / English / فارسی',
  seoTitle:'Meysam Aliannezhadi | WordPress-Entwicklung, SEO & Digital Marketing',seoDescription:'Meysam Aliannezhadi unterstützt Unternehmen mit WordPress-Entwicklung, professioneller Suchmaschinenoptimierung, CMS-Themes, Plugins und Digital Marketing.'
 },
 en: {
  nav:{about:'About',expertise:'Services',projects:'Work',contact:'Contact'},
  eyebrow:'WORDPRESS · SEO · DIGITAL GROWTH',intro:'Hi, I’m Meysam Aliannezhadi.',heroA:'Websites built',heroB:'for business growth.',
  heroDesc:'I help businesses grow through professional WordPress development, technical SEO, and practical digital marketing strategies—building stronger online experiences that work.',
  viewProjects:'Explore my work',contactMe:'Let’s collaborate',scroll:'SCROLL TO EXPLORE',badge:'WORDPRESS / SEO / DIGITAL MARKETING',
  aboutLabel:'01 / ABOUT',aboutTitle:'Development meets strategy.',aboutBody:'I’m Meysam Aliannezhadi, a WordPress developer and SEO specialist focused on creating fast, accessible, and conversion-minded websites tailored to real business needs.',
  aboutBody2:'From custom WordPress themes and plugins to technical SEO, content structure, performance and digital marketing, I connect solid engineering with long-term search visibility.',
  whatLabel:'02 / SERVICES',whatTitle:'More than a website.',specialties:[{number:'01',title:'WordPress & CMS Development',detail:'Custom WordPress websites, themes, plugins, and CMS extensions built for flexibility and maintainability.'},{number:'02',title:'Professional SEO',detail:'Technical and on-page SEO, search-friendly architecture, content optimization, and Core Web Vitals.'},{number:'03',title:'Digital Growth',detail:'Practical digital marketing support, performance improvements, and user-focused strategies for businesses.'}],
  projectLabel:'03 / SELECTED WORK',projectTitle:'Selected projects.',projectText:'Website, SEO, and CMS work supporting businesses in different markets.',githubText:'View open-source work',visitRepo:'Open project',contactLabel:'04 / CONTACT',contactTitle:'Let’s grow your business online.',contactText:'Need professional WordPress development, SEO, or digital marketing support? Let’s talk about your goals. Find me on social media as @aliannezhadi.',contactButton:'Connect on LinkedIn',footerText:'WordPress · SEO · Digital Marketing',builtWith:'Built with Next.js',available:'Deutsch / English / فارسی',
  seoTitle:'Meysam Aliannezhadi | WordPress Developer, SEO & Digital Marketing',seoDescription:'WordPress development, professional SEO, custom themes and plugins, and digital marketing solutions by Meysam Aliannezhadi.'
 },
 fa: {
  nav:{about:'درباره من',expertise:'خدمات',projects:'نمونه‌کارها',contact:'ارتباط'},
  eyebrow:'توسعه وردپرس · سئو · رشد دیجیتال',intro:'سلام، من میثم علیان نژادی هستم.',heroA:'وب‌سایت حرفه‌ای،',heroB:'رشد واقعی کسب‌وکار.',
  heroDesc:'من میثم علیان نژادی هستم؛ با توسعه تخصصی وردپرس، سئوی حرفه‌ای سایت و راهکارهای دیجیتال مارکتینگ به کسب‌وکارها کمک می‌کنم حضوری قدرتمندتر و هدفمندتر در فضای آنلاین داشته باشند.',
  viewProjects:'مشاهده نمونه‌کارها',contactMe:'شروع همکاری',scroll:'برای دیدن بیشتر پیمایش کنید',badge:'وردپرس / سئو / دیجیتال مارکتینگ',
  aboutLabel:'۰۱ / درباره من',aboutTitle:'توسعه فنی با نگاه تجاری.',aboutBody:'من میثم علیان نژادی، توسعه‌دهنده وردپرس و متخصص سئو هستم. هدف من ساخت وب‌سایت‌هایی سریع، کاربرپسند و بهینه است که در کنار ظاهر حرفه‌ای، به اهداف واقعی کسب‌وکار کمک کنند.',
  aboutBody2:'حوزه کاری علیان نژادی شامل طراحی و توسعه قالب و افزونه وردپرس، توسعه امکانات اختصاصی CMS، سئوی فنی و داخلی، بهبود سرعت سایت و راهکارهای دیجیتال مارکتینگ برای افزایش دیده‌شدن کسب‌وکارهاست.',
  whatLabel:'۰۲ / خدمات',whatTitle:'از توسعه تا دیده‌شدن.',specialties:[{number:'01',title:'توسعه وردپرس و CMS',detail:'طراحی و توسعه وب‌سایت، قالب و افزونه اختصاصی وردپرس و سفارشی‌سازی سیستم‌های مدیریت محتوا.'},{number:'02',title:'سئوی حرفه‌ای سایت',detail:'سئوی تکنیکال و داخلی، بهینه‌سازی ساختار محتوا، سرعت و Core Web Vitals برای رشد اصولی در جست‌وجو.'},{number:'03',title:'دیجیتال مارکتینگ',detail:'کمک به کسب‌وکارها برای بهبود حضور آنلاین، تجربه کاربری و اجرای راهکارهای هدفمند رشد دیجیتال.'}],
  projectLabel:'۰۳ / نمونه‌کارها',projectTitle:'پروژه‌ها و همکاری‌ها.',projectText:'نمونه‌هایی از فعالیت در بازارهای بین‌المللی، سئو و توسعه سیستم‌های مدیریت محتوا.',githubText:'مشاهده پروژه‌های متن‌باز',visitRepo:'مشاهده پروژه',contactLabel:'۰۴ / ارتباط',contactTitle:'برای رشد آنلاین آماده‌ایم.',contactText:'برای توسعه سایت وردپرسی، سئو حرفه‌ای، طراحی قالب و افزونه یا مشاوره دیجیتال مارکتینگ با میثم علیان نژادی در ارتباط باشید. شناسه شبکه‌های اجتماعی: @aliannezhadi.',contactButton:'ارتباط در لینکدین',footerText:'توسعه وردپرس · سئو · دیجیتال مارکتینگ',builtWith:'ساخته شده با Next.js',available:'Deutsch / English / فارسی',
  seoTitle:'میثم علیان نژادی | توسعه وردپرس، سئو حرفه‌ای و دیجیتال مارکتینگ',seoDescription:'میثم علیان نژادی؛ متخصص توسعه وردپرس، سئو حرفه‌ای سایت، طراحی قالب و افزونه CMS و کمک به رشد دیجیتال کسب‌وکارها. نمونه‌کارهای علیان نژادی را ببینید.'
 }
};
