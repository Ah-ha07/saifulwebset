import JsonLd from "./JsonLd";
import { faq, guide, services } from "../lib/content";
import { companyName, localPath, pageData, siteUrl, type Language } from "../lib/site";

function Shell({ language, path, title, children }: { language: Language; path: string; title: string; children: React.ReactNode }) {
  const zh = language === "zh";
  const links = [
    ["/services/ai-video-tools", zh ? "AI 视频工具开发" : "AI video tools"],
    ["/services/custom-ai-video-applications", zh ? "定制应用开发" : "Custom applications"],
    ["/guides/planning-an-ai-video-project", zh ? "项目规划指南" : "Project planning guide"],
    ["/faq", zh ? "常见问题" : "FAQ"],
  ];
  return <div className="document-site">
    <header className="document-header section-shell">
      <a className="brand" href={localPath(language)} aria-label={zh ? "SAIFU 首页" : "SAIFU home"}><img className="brand-mark" src="/saifu-mark.svg" alt="" aria-hidden="true" /><strong>SAIFU</strong></a>
      <nav className="document-nav" aria-label={zh ? "主要导航" : "Main navigation"}>
        <a href={localPath(language, "/services/ai-video-tools")}>{zh ? "工具开发" : "AI video tools"}</a>
        <a href={localPath(language, "/services/custom-ai-video-applications")}>{zh ? "定制应用" : "Custom applications"}</a>
        <a href="mailto:hello@saifuliqi.com">{zh ? "讨论项目" : "Discuss a project"}</a>
      </nav>
      <div className="language-switch" aria-label={zh ? "选择语言" : "Choose language"}>
        <a href={localPath("zh", path)} hrefLang="zh-CN" className={zh ? "active" : ""} aria-current={zh ? "page" : undefined}>中</a><i />
        <a href={localPath("en", path)} hrefLang="en" className={!zh ? "active" : ""} aria-current={!zh ? "page" : undefined}>EN</a>
      </div>
    </header>
    <main className="document-main section-shell">
      <nav className="document-breadcrumb" aria-label={zh ? "面包屑导航" : "Breadcrumb"}><a href={localPath(language)}>{zh ? "首页" : "Home"}</a><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
      {children}
      <aside className="document-related" aria-labelledby="related-heading"><h2 id="related-heading">{zh ? "继续了解" : "Explore more"}</h2><div>{links.filter(([p]) => p !== path).map(([p, text]) => <a key={p} href={localPath(language, p)}>{text}<span aria-hidden="true">↗</span></a>)}</div></aside>
      <section className="document-cta"><span className="section-label">{zh ? "开始合作" : "START A CONVERSATION"}</span><h2>{zh ? "把你的应用场景，讲给我们听。" : "Tell us what your video workflow needs."}</h2><p>{zh ? "介绍目标用户、现有流程与期望的结果，我们一起明确第一步要验证什么。" : "Share the user, the current process and the intended result. We can discuss what to validate first."}</p><a href="mailto:hello@saifuliqi.com">hello@saifuliqi.com <span aria-hidden="true">↗</span></a></section>
    </main>
    <footer className="document-footer section-shell"><a className="brand" href={localPath(language)}><img className="brand-mark" src="/saifu-mark.svg" alt="" aria-hidden="true" /><strong>SAIFU</strong></a><p>© 2026 {companyName}<br />Beijing Saifuliqi Technology Co., Ltd.</p><a href={localPath(language, "/faq")}>{zh ? "项目合作常见问题" : "Project FAQ"}</a></footer>
  </div>;
}

function StructuredPage({ language, path, title, description, extra = [] }: { language: Language; path: string; title: string; description: string; extra?: unknown[] }) {
  const url = `${siteUrl}${localPath(language, path)}`;
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [
    pageData(language, path, title, description),
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: language === "zh" ? "首页" : "Home", item: `${siteUrl}${localPath(language)}` },
      { "@type": "ListItem", position: 2, name: title, item: url },
    ] }, ...extra,
  ] }} />;
}

export function ServicePage({ language, slug }: { language: Language; slug: string }) {
  const copy = services[slug][language];
  const path = `/services/${slug}`;
  return <Shell language={language} path={path} title={copy.eyebrow}>
    <StructuredPage language={language} path={path} title={copy.eyebrow} description={copy.description} extra={[{
      "@type": "Service", "@id": `${siteUrl}${localPath(language, path)}#service`, name: copy.eyebrow,
      serviceType: copy.eyebrow, description: copy.lead, url: `${siteUrl}${localPath(language, path)}`,
      provider: { "@id": `${siteUrl}/#organization` },
    }]} />
    <div className="document-hero"><span className="section-label">{copy.eyebrow}</span><h1>{copy.heading}</h1><p>{copy.lead}</p><a className="document-hero-link" href="mailto:hello@saifuliqi.com">{language === "zh" ? "讨论你的项目" : "Discuss your project"} <span aria-hidden="true">↗</span></a></div>
    <article className="document-article">{copy.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}</article>
  </Shell>;
}

export const faqMeta = {
  zh: { title: "AI 视频开发与项目合作常见问题｜SAIFU 赛蚨里奇", description: "了解赛蚨里奇的 AI 视频工具开发、定制应用、现有产品集成、项目准备、价格与周期评估方式，以及如何联系 SAIFU 讨论合作。" },
  en: { title: "AI Video Development & Project FAQ | SAIFU", description: "Answers about SAIFU's AI video tool development, custom applications, integration, project preparation, costs, timelines and how to discuss a project." },
};

export function FaqPage({ language }: { language: Language }) {
  const copy = faqMeta[language];
  return <Shell language={language} path="/faq" title={language === "zh" ? "常见问题" : "FAQ"}>
    <StructuredPage language={language} path="/faq" title={copy.title} description={copy.description} />
    <div className="document-hero"><span className="section-label">{language === "zh" ? "项目合作" : "WORKING WITH SAIFU"}</span><h1>{language === "zh" ? "AI 视频开发与合作，常见问题。" : "AI video development: common questions."}</h1><p>{language === "zh" ? "从服务范围到项目准备，先回答开始合作前最常见的几个问题。" : "Service scope, project preparation and the questions that help a collaboration start clearly."}</p></div>
    <div className="document-faq">{faq[language].map(item => <section key={item.question}><h2>{item.question}</h2><p>{item.answer}</p></section>)}</div>
  </Shell>;
}

export function GuidePage({ language }: { language: Language }) {
  const copy = guide[language];
  const path = "/guides/planning-an-ai-video-project";
  return <Shell language={language} path={path} title={language === "zh" ? "AI 视频项目规划" : "AI video project planning"}>
    <StructuredPage language={language} path={path} title={copy.title} description={copy.description} extra={[{
      "@type": "Article", "@id": `${siteUrl}${localPath(language, path)}#article`, headline: copy.heading,
      description: copy.description, inLanguage: language === "zh" ? "zh-CN" : "en", datePublished: "2026-10-29", dateModified: "2026-10-29",
      author: { "@id": `${siteUrl}/#organization` }, publisher: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: { "@id": `${siteUrl}${localPath(language, path)}#webpage` },
      image: `${siteUrl}/og.png?v=dream-keeper-a`,
    }]} />
    <div className="document-hero"><span className="section-label">{language === "zh" ? "项目规划指南" : "PROJECT PLANNING GUIDE"}</span><h1>{copy.heading}</h1><p>{copy.lead}</p><div className="document-byline">SAIFU · <time dateTime="2026-10-29">2026-10-29</time></div></div>
    <article className="document-article">{copy.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}</article>
  </Shell>;
}
