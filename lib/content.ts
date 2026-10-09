export const siteUrl = 'https://aliannezhadi.github.io';
export const githubUrl = 'https://github.com/Aliannezhadi';
export const linkedinUrl = 'https://www.linkedin.com/in/aliannezhadi';
export const locales = ['fa', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export type Project = {slug: string; name: string; tech: string; category: string; description: Record<Locale,string>};
export const projects: Project[] = [
  {slug:'L2D', name:'L2D',tech:'PHP',category:'Backend / Utility', description:{
    fa:'ابزار سبک PHP برای دریافت امن فایل از نشانی اینترنتی و ذخیره آن در سرور با اعتبارسنجی URL.',
    en:'A lightweight PHP utility for securely downloading remote files to a server with URL validation.',
    de:'Ein schlankes PHP-Tool zum sicheren Herunterladen von Dateien mit URL-Validierung.'}},
  {slug:'xui-ping',name:'xui-ping',tech:'Shell',category:'Monitoring / Automation',description:{
    fa:'پایش دسترس‌پذیری پنل XUI و ارسال هشدار تلگرام در زمان اختلال.',
    en:'Monitors XUI panel availability and sends Telegram alerts when downtime is detected.',
    de:'Überwacht die Erreichbarkeit eines XUI-Panels und meldet Ausfälle über Telegram.'}},
  {slug:'alnk-url-shortener',name:'alnk-url-shortener',tech:'Web',category:'Web / Utility',description:{
    fa:'پروژه متن‌باز کوتاه‌کننده لینک آلینک.',en:'An open-source link shortening project called ALNK.',
    de:'Ein Open-Source-Projekt zur Verkürzung von Links namens ALNK.'}},
  {slug:'time-access-controller',name:'time-access-controller',tech:'PHP / WordPress',category:'WordPress / Access',description:{
    fa:'افزونه وردپرس برای محدودکردن دسترسی کاربران براساس نقش و بازه زمانی مشخص.',
    en:'A WordPress plugin that restricts access by user role and defined time windows.',
    de:'Ein WordPress-Plugin zur Zugriffsbeschränkung nach Benutzerrolle und Zeitfenster.'}},
  {slug:'wordpress-task-manager',name:'wordpress-task-manager',tech:'PHP / WordPress',category:'WordPress / Performance',description:{
    fa:'افزونه سبک برای پایش مصرف منابع و بررسی عملکرد افزونه‌های وردپرس.',
    en:'A lightweight WordPress plugin for resource monitoring and tracking plugin performance.',
    de:'Ein leichtes WordPress-Plugin zur Ressourcenüberwachung und Analyse der Plugin-Leistung.'}}
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
export const content: Record<Locale,Dictionary> = {
fa: {
  nav:{about:'درباره من',expertise:'تخصص‌ها',projects:'پروژه‌ها',contact:'ارتباط'},
  eyebrow:'وب‌سایت رسمی میثم علیان نژادی',heroA:'ایده‌های دقیق.',heroB:'محصولات ماندگار.',
  intro:'سلام، من میثم علیان نژادی هستم.',
  heroDesc:'توسعه‌دهنده وب با تمرکز بر وردپرس، ساخت ابزارهای کاربردی، بهینه‌سازی تجربه کاربری، امنیت و سئو. اینجا گوشه‌ای از کارها و پروژه‌های متن‌باز علیان نژادی را می‌بینید.',
  viewProjects:'مشاهده پروژه‌ها',contactMe:'راه‌های ارتباطی',scroll:'برای دیدن بیشتر پیمایش کنید',badge:'توسعه وب / ابزارهای متن‌باز',
  aboutLabel:'01 / درباره من',aboutTitle:'ساختن برای دنیای واقعی.',
  aboutBody:'من میثم علیان نژادی هستم؛ توسعه‌دهنده‌ای علاقه‌مند به تبدیل مسئله‌های واقعی به راهکارهای ساده، قابل نگهداری و مفید. تمرکز فعالیت‌های من روی توسعه وب، طراحی و توسعه قالب‌ها و افزونه‌های وردپرس است.',
  aboutBody2:'از بهینه‌سازی عملکرد و امنیت تا سئو و خودکارسازی کارهای تکراری، تلاش می‌کنم هر پروژه با دقت در جزئیات و نگاه بلندمدت ساخته شود.',
  whatLabel:'02 / حوزه‌های کاری',whatTitle:'تخصص، فراتر از کدنویسی.',
  specialties:[{number:'01',title:'توسعه وب و وردپرس',detail:'طراحی و توسعه قالب، افزونه و تجربه‌های وب کاربردی.'},{number:'02',title:'عملکرد و امنیت',detail:'پایش، بهینه‌سازی و نگهداری مطمئن سامانه‌ها.'},{number:'03',title:'سئو و ساختار فنی',detail:'معماری شفاف، دسترس‌پذیری و زیرساخت مناسب موتورهای جست‌وجو.'}],
  projectLabel:'03 / منتخب پروژه‌ها',projectTitle:'از ایده تا کد متن‌باز.',projectText:'منتخبی از مخزن‌های عمومی من در GitHub؛ پروژه‌هایی برای حل مسائل واقعی، آزمودن ایده‌ها و اشتراک دانش.',
  githubText:'همه مخزن‌ها در GitHub',visitRepo:'مشاهده مخزن',contactLabel:'04 / ارتباط',contactTitle:'برای گفت‌وگو آماده‌ام.',
  contactText:'برای ارتباط حرفه‌ای، همکاری یا آشنایی بیشتر با فعالیت‌های میثم علیان نژادی از لینک‌های زیر استفاده کنید.',contactButton:'ارتباط در لینکدین',
  footerText:'طراحی‌شده با دقت، برای وب آزاد.',builtWith:'ساخته‌شده با Next.js',available:'فارسی / English / Deutsch',
  seoTitle:'میثم علیان نژادی | علیان نژادی – توسعه‌دهنده وب و وردپرس',
  seoDescription:'وب‌سایت شخصی میثم علیان نژادی؛ آشنایی با علیان نژادی، تخصص در توسعه وب و وردپرس، امنیت، بهینه‌سازی، سئو و پروژه‌های متن‌باز GitHub.'
},
en: {
  nav:{about:'About',expertise:'Expertise',projects:'Projects',contact:'Contact'},eyebrow:'THE DIGITAL HOME OF MEYSAM ALIANNEZHADI',
  heroA:'Thoughtful code.',heroB:'Lasting impact.',intro:'Hello, I’m Meysam Aliannezhadi.',
  heroDesc:'Web developer focused on WordPress, practical tools, performance, security, and search visibility. Explore what I build and share with the open-source community.',
  viewProjects:'Explore my work',contactMe:'Get in touch',scroll:'SCROLL TO EXPLORE',badge:'WEB DEVELOPMENT / OPEN SOURCE',
  aboutLabel:'01 / ABOUT',aboutTitle:'Building for the real world.',aboutBody:'I’m Meysam Aliannezhadi, a developer interested in turning real problems into clear, maintainable digital solutions. My work focuses on web development and creating WordPress themes and plugins.',
  aboutBody2:'From performance and security to SEO and thoughtful automation, I care about the details that make software genuinely useful over time.',
  whatLabel:'02 / WHAT I DO',whatTitle:'Beyond writing code.',
  specialties:[{number:'01',title:'Web & WordPress',detail:'Thoughtfully designed themes, plugins, and useful web experiences.'},{number:'02',title:'Performance & Security',detail:'Monitoring, optimization, and reliable maintenance.'},{number:'03',title:'Technical SEO',detail:'Clear architecture, accessibility, and search-friendly foundations.'}],
  projectLabel:'03 / SELECTED PROJECTS',projectTitle:'Ideas made open source.',projectText:'A selection of my public GitHub repositories: small and focused solutions, experiments, and useful tools.',
  githubText:'All repositories on GitHub',visitRepo:'View repository',contactLabel:'04 / CONTACT',contactTitle:'Let’s start a conversation.',
  contactText:'Interested in collaborating or learning more about my work? Reach out through the channels below.',contactButton:'Connect on LinkedIn',
  footerText:'Made with care for the open web.',builtWith:'Built with Next.js',available:'فارسی / English / Deutsch',
  seoTitle:'Meysam Aliannezhadi | Web & WordPress Developer',seoDescription:'Explore Meysam Aliannezhadi’s web development, WordPress, SEO, security, and open-source projects on GitHub.'
},
de: {
  nav:{about:'Über mich',expertise:'Kompetenzen',projects:'Projekte',contact:'Kontakt'},eyebrow:'DIE WEBSITE VON MEYSAM ALIANNEZHADI',
  heroA:'Durchdachter Code.',heroB:'Nachhaltige Wirkung.',intro:'Hallo, ich bin Meysam Aliannezhadi.',
  heroDesc:'Webentwickler mit Schwerpunkt auf WordPress, nützlichen Tools, Performance, Sicherheit und SEO. Entdecken Sie meine Projekte und Open-Source-Arbeiten.',
  viewProjects:'Projekte entdecken',contactMe:'Kontakt aufnehmen',scroll:'MEHR ENTDECKEN',badge:'WEBENTWICKLUNG / OPEN SOURCE',
  aboutLabel:'01 / ÜBER MICH',aboutTitle:'Lösungen für die Praxis.',aboutBody:'Ich bin Meysam Aliannezhadi. Ich entwickle verständliche und wartbare digitale Lösungen für reale Herausforderungen – mit einem Fokus auf Webentwicklung sowie WordPress-Themes und -Plugins.',
  aboutBody2:'Von Performance und Sicherheit bis hin zu SEO und Automatisierung: Mein Ziel sind Produkte, die langfristig einen echten Nutzen bieten.',
  whatLabel:'02 / LEISTUNGEN',whatTitle:'Mehr als nur Code.',
  specialties:[{number:'01',title:'Web & WordPress',detail:'Durchdachte Themes, Plugins und hilfreiche Weblösungen.'},{number:'02',title:'Performance & Sicherheit',detail:'Monitoring, Optimierung und zuverlässige Wartung.'},{number:'03',title:'Technisches SEO',detail:'Klare Architektur, Barrierefreiheit und suchmaschinenfreundliche Grundlagen.'}],
  projectLabel:'03 / AUSGEWÄHLTE PROJEKTE',projectTitle:'Ideen als Open Source.',projectText:'Eine Auswahl meiner öffentlichen GitHub-Repositories: praktische Werkzeuge und fokussierte Lösungen.',
  githubText:'Alle Repositories auf GitHub',visitRepo:'Repository öffnen',contactLabel:'04 / KONTAKT',contactTitle:'Lassen Sie uns sprechen.',
  contactText:'Interesse an einer Zusammenarbeit oder Fragen zu meiner Arbeit? Hier können Sie mich erreichen.',contactButton:'Auf LinkedIn verbinden',
  footerText:'Mit Sorgfalt für das offene Web entwickelt.',builtWith:'Erstellt mit Next.js',available:'فارسی / English / Deutsch',
  seoTitle:'Meysam Aliannezhadi | Web- und WordPress-Entwickler',seoDescription:'Meysam Aliannezhadi: Webentwicklung, WordPress, SEO, Sicherheit und Open-Source-Projekte auf GitHub.'
}};
