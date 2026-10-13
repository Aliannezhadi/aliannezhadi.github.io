import type { Locale } from '@/lib/content';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const translations = {
 fa: {heading:'تماس با من', desc:'برای سفارش افزونه اختصاصی، مشاوره یا پرسش درباره لایسنس، پیام بفرستید.',name:'نام',phone:'شماره تلفن',email:'ایمیل',message:'متن پیام',submit:'ارسال پیام',notice:'پیام از طریق سرویس FormSubmit به ایمیل من ارسال می‌شود. در اولین استفاده باید ایمیل تأیید فعال‌سازی سرویس را تأیید کنم.'},
 en: {heading:'Contact me',desc:'Ask about custom plugins, consulting, or unlimited licenses.',name:'Name',phone:'Phone number',email:'Email address',message:'Your message',submit:'Send message',notice:'Messages are emailed through FormSubmit. The recipient must confirm the service activation email before delivery is enabled.'},
 de: {heading:'Kontaktieren Sie mich',desc:'Fragen zu individuellen Plugins, Beratung oder unbegrenzten Lizenzen.',name:'Name',phone:'Telefonnummer',email:'E-Mail-Adresse',message:'Nachricht',submit:'Nachricht senden',notice:'Nachrichten werden über FormSubmit per E-Mail gesendet. Der Empfänger muss die Aktivierungs-E-Mail des Dienstes bestätigen.'}
} as const;
const social = [
 {name:'LinkedIn',url:'https://www.linkedin.com/in/aliannezhadi'},
 {name:'Telegram',url:'https://t.me/aliannezhadi'},
 {name:'X / Twitter',url:'https://x.com/aliannezhadi'},
 {name:'YouTube',url:'https://www.youtube.com/@aliannezhadi'},
 {name:'GitHub',url:'https://github.com/Aliannezhadi'}
];
export function ContactPanel({locale}:{locale:Locale}) {
 const t=translations[locale];
 return <div className="contact-panel"><div className="contact-panel-intro"><h3>{t.heading}</h3><p>{t.desc}</p><div className="social-links"><a href="mailto:meysam.aliani@gmail.com"><Mail size={17}/> Email</a>{social.map(s=><a href={s.url} target="_blank" rel="noopener noreferrer" key={s.name}>{s.name}</a>)}</div></div>
 <form className="contact-form" method="POST" action="https://formsubmit.co/meysam.aliani@gmail.com" acceptCharset="UTF-8">
  <input type="hidden" name="_subject" value="New contact from aliannezhadi.github.io"/>
  <input type="hidden" name="_captcha" value="true"/>
  <input type="hidden" name="_template" value="table"/>
  <div className="contact-fields"><label>{t.name}<input name="name" type="text" autoComplete="name" maxLength={120} required/></label><label>{t.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={40} required/></label></div>
  <label>{t.email}<input name="email" type="email" autoComplete="email" maxLength={254} required/></label>
  <label>{t.message}<textarea name="message" rows={5} maxLength={6000} required/></label>
  <button className="button primary" type="submit">{t.submit}<Send size={17}/></button><p className="contact-form-note">{t.notice}</p>
 </form></div>;
}
