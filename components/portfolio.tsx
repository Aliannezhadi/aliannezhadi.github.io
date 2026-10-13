'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Moon, Sun, Menu, X, Globe2, Code2, ShieldCheck, Search } from 'lucide-react';
import { ContactPanel } from './contact-panel';
import { content, githubUrl, linkedinUrl, projects, siteUrl, type Locale } from '@/lib/content';

function Arrow({rtl=false}:{rtl?:boolean}){return rtl?<ArrowLeft size={17}/>:<ArrowUpRight size={17}/>}
export function Portfolio({locale}:{locale:Locale}){
  const t=content[locale];const rtl=locale==='fa';
  const [theme,setTheme]=useState<'dark'|'light'>('dark');
  const [menu,setMenu]=useState(false);
  useEffect(()=>{
    document.documentElement.lang=locale;
    document.documentElement.dir=rtl?'rtl':'ltr';
    const stored=window.localStorage.getItem('ma-theme');
    const chosen=stored==='light'?'light':'dark';
    setTheme(chosen);document.documentElement.dataset.theme=chosen;
  },[locale,rtl]);
  const toggleTheme=()=>{const next=theme==='dark'?'light':'dark';setTheme(next);document.documentElement.dataset.theme=next;window.localStorage.setItem('ma-theme',next)};
  const localeLinks:[Locale,string][]=[['de','Deutsch'],['en','English'],['fa','فارسی']];
  const urls:Record<Locale,string>={de:'/',en:'/en/',fa:'/fa/'};
  const pluginPath=locale==='de'?'/cardtocard/':`/${locale}/cardtocard/`;
  const pluginNav=locale==='fa'?'پلاگین‌های من':locale==='de'?'Meine Plugins':'My Plugins';
  const customText=locale==='fa'?'سفارش ساخت افزونه اختصاصی وردپرس':locale==='de'?'Individuelles WordPress-Plugin beauftragen':'Request a custom WordPress plugin';
  const pluginName=locale==='fa'?'درگاه کارت به کارت ووکامرس':'Card to Card for WooCommerce';
  const structuredData={
    '@context':'https://schema.org','@type':'Person',name:'Meysam Aliannezhadi',alternateName:'میثم علیان نژادی',
    url:siteUrl, sameAs:[githubUrl,linkedinUrl],
    knowsAbout:['WordPress Development','Technical SEO','Digital Marketing','WordPress Theme Development','WordPress Plugin Development'],
  };
  return <div className="site" dir={rtl?'rtl':'ltr'}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}} />
    <div className="noise" aria-hidden="true"/>
    <header className="header"><div className="header-inner shell">
      <Link href={urls[locale]} className="brand" aria-label="Meysam Aliannezhadi homepage"><span className="brand-mark">M<span>.</span></span><span className="brand-name" dir="ltr">MEYSAM<br/>ALIANNEZHADI</span></Link>
      <nav className={'nav '+(menu?'open':'')} aria-label="Main navigation">
        <a onClick={()=>setMenu(false)} href="#about">{t.nav.about}</a><a onClick={()=>setMenu(false)} href="#expertise">{t.nav.expertise}</a><a onClick={()=>setMenu(false)} href="#projects">{t.nav.projects}</a><div className="nav-dropdown"><Link href={pluginPath} onClick={()=>setMenu(false)} className="nav-dropdown-label">{pluginNav} <span aria-hidden="true">⌄</span></Link><div className="nav-submenu"><Link href={pluginPath} onClick={()=>setMenu(false)}>{pluginName}</Link></div></div><a onClick={()=>setMenu(false)} href="#contact">{t.nav.contact}</a>
      </nav>
      <div className="header-actions"><div className="lang" aria-label="Select language"><Globe2 size={18}/><span className="lang-title">LANG</span>{localeLinks.map(([l,label])=><Link key={l} href={urls[l]} hrefLang={l} lang={l} aria-current={l===locale?'page':undefined} className={l===locale?'active':''}>{label}</Link>)}</div>
        <button className="icon-button" aria-label={theme==='dark'?'Enable light mode':'Enable dark mode'} onClick={toggleTheme}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>
        <button className="icon-button mobile-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
    </div></header>
    <main>
      <section className="hero shell" id="top"><div className="hero-orb" aria-hidden="true"/><div className="hero-top"><span className="eyebrow"><span className="dot"/>{t.eyebrow}</span><span className="hero-index">PORTFOLIO / 2026</span></div>
        <div className="hero-main"><div className="hero-copy"><p className="intro">{t.intro}</p><h1>{t.heroA}<br/><em>{t.heroB}</em></h1><p className="hero-description">{t.heroDesc}</p>
          <div className="hero-ctas"><a className="button primary" href="#projects">{t.viewProjects}<Arrow rtl={rtl}/></a><a className="button ghost" href="#contact">{t.contactMe}<Arrow rtl={rtl}/></a></div>
        </div><div className="hero-art"><img className="profile-photo" src="/images/profile.jpg" alt="Portrait of Meysam Aliannezhadi"/><span className="profile-tag">MEYSAM ALIANNEZHADI</span></div></div>
        <div className="hero-bottom"><span>{t.scroll}<ArrowDown size={15}/></span><span className="hero-pill">{t.badge}</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><div className="ticker-text">WORDPRESS <span>✳</span> TECHNICAL SEO <span>✳</span> DIGITAL MARKETING <span>✳</span> CUSTOM PLUGINS <span>✳</span> WEBSITE PERFORMANCE <span>✳</span> WORDPRESS <span>✳</span> SEO <span>✳</span></div></div>
      <section className="section shell about-section" id="about"><div className="section-heading"><span className="section-label">{t.aboutLabel}</span><span className="small-line"/></div><div className="about-grid"><h2 className="section-title">{t.aboutTitle}</h2><div className="about-text"><p>{t.aboutBody}</p><p>{t.aboutBody2}</p><div className="about-links"><a href={githubUrl} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <Arrow rtl={rtl}/></a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn <Arrow rtl={rtl}/></a></div></div></div></section>
      <section className="section expertise-section" id="expertise"><div className="shell"><div className="section-heading"><span className="section-label">{t.whatLabel}</span><span className="small-line"/></div><h2 className="section-title expertise-title">{t.whatTitle}</h2><div className="expertise-grid">{t.specialties.map((s,i)=>{const Icon=[Code2,ShieldCheck,Search][i];return <article className="expertise-card" key={s.number}><div className="expertise-top"><span>{s.number} / 03</span><Icon size={25} strokeWidth={1.5}/></div><div><h3>{s.title}</h3><p>{s.detail}</p></div><Arrow rtl={rtl}/></article>})}</div></div></section>
      <section className="section shell projects-section" id="projects"><div className="section-heading"><span className="section-label">{t.projectLabel}</span><span className="small-line"/></div><div className="project-heading"><div><h2 className="section-title">{t.projectTitle}</h2><p className="section-description">{t.projectText}</p></div><a className="text-link" href={githubUrl} target="_blank" rel="noopener noreferrer">{t.githubText}<Arrow rtl={rtl}/></a></div><div className="project-list">{projects.map((p,i)=><a className="project-row" key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer"><span className="project-number">{String(i+1).padStart(2,'0')}</span><div className="project-info"><span className="project-category">{p.category}</span><h3 dir="ltr">{p.name}</h3><p>{p.description[locale]}</p></div><span className="project-tech">{p.tech}</span><span className="project-action" aria-label={t.visitRepo}><ArrowUpRight size={22}/></span></a>)}</div></section>
      <section className="section shell custom-plugin-section" id="custom-plugin"><div className="section-heading"><span className="section-label">WORDPRESS PLUGINS</span><span className="small-line"/></div><h2 className="section-title">{pluginNav}</h2><p className="section-description">{locale==='fa'?'افزونه کارت به کارت برای ووکامرس و امکان توسعه افزونه اختصاصی متناسب با نیاز سایت شما.':locale==='de'?'Card-to-Card-Zahlungen für WooCommerce und maßgeschneiderte Plugins für Ihre Website.':'Card-to-card payments for WooCommerce and custom WordPress plugins tailored to your website.'}</p><div className="custom-plugin-actions"><Link href={pluginPath} className="button primary">{pluginName}<Arrow rtl={rtl}/></Link><a className="button ghost" href={`mailto:meysam.aliani@gmail.com?subject=${encodeURIComponent(customText)}`}>{customText}<Arrow rtl={rtl}/></a></div></section>
      <section className="contact-section" id="contact"><div className="shell"><span className="section-label">{t.contactLabel}</span><div className="contact-grid"><div><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><a href={linkedinUrl} className="contact-circle" target="_blank" rel="noopener noreferrer" aria-label={t.contactButton}><ArrowUpRight size={42}/></a></div><ContactPanel locale={locale}/></div></section>
    </main><footer className="footer shell"><span>© {new Date().getFullYear()} MEYSAM ALIANNEZHADI</span><span>{t.footerText}</span><a href="#top" aria-label="Back to top">TOP ↑</a></footer>
  </div>;
}
