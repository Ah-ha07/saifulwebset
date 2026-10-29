import JsonLd from "./JsonLd";
import { identityData, type Language } from "../lib/site";

export default function DocumentRoot({ language, children }: { language: Language; children: React.ReactNode }) {
  return <html lang={language === "zh" ? "zh-CN" : "en"}><head><JsonLd data={identityData()} /><noscript><style>{`.hero h1 > span, .hero h1 > strong, .hero-center > p, .hero-cta, .about .section-label, .about-title, .about-copy, .philosophy > h2, .philosophy-media, .philosophy-copy, .service-card, .services-header, .contact-inner { opacity: 1 !important; transform: none !important; filter: none !important; }`}</style></noscript></head><body>{children}</body></html>;
}
