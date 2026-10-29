import type { Metadata } from "next";

export type Language = "zh" | "en";
export const siteUrl = "https://saifuliqi.com";
export const companyName = "北京赛蚨里奇科技有限公司";
export const contentPaths = ["", "/services/ai-video-tools", "/services/custom-ai-video-applications", "/faq", "/guides/planning-an-ai-video-project"] as const;

export function localPath(language: Language, path = "") {
  return language === "en" ? `/en${path}` : path || "/";
}

export function pageMetadata(language: Language, path: string, title: string, description: string): Metadata {
  const canonical = `${siteUrl}${localPath(language, path)}`;
  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: title },
    description,
    applicationName: "SAIFU",
    category: "technology",
    creator: companyName,
    publisher: companyName,
    alternates: {
      canonical,
      languages: {
        "zh-CN": `${siteUrl}${localPath("zh", path)}`,
        en: `${siteUrl}${localPath("en", path)}`,
        "x-default": `${siteUrl}${localPath("zh", path)}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: {
      type: "website", url: canonical, siteName: "SAIFU", title, description,
      locale: language === "zh" ? "zh_CN" : "en_US",
      alternateLocale: language === "zh" ? "en_US" : "zh_CN",
      images: [{ url: "/og.png?v=dream-keeper-a", width: 1733, height: 908, alt: "SAIFU — AI video tools and custom application development" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png?v=dream-keeper-a"] },
    icons: { icon: "/favicon.svg?v=dream-keeper-a" },
  };
}

export const homeMeta = {
  zh: { title: "AI 视频工具与定制应用开发｜赛蚨里奇 SAIFU", description: "赛蚨里奇 SAIFU 专注 AI 视频工具与定制应用开发，为创作者、团队和企业提供视频生成与编辑工具、产品原型、应用开发和工作流集成。了解服务范围与项目合作方式。" },
  en: { title: "AI Video Tools & Custom Application Development | SAIFU", description: "SAIFU develops AI video tools and custom applications for creators, teams and businesses, from product prototypes to video generation workflows and integration." },
};

export const organization = {
  "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "SAIFU", legalName: companyName,
  alternateName: ["赛蚨里奇", "Beijing Saifuliqi Technology Co., Ltd."],
  url: `${siteUrl}/`, logo: `${siteUrl}/saifu-mark-purple.svg`, email: "hello@saifuliqi.com",
  description: "AI video tools and custom AI video application development for creators, teams and businesses.",
  contactPoint: { "@type": "ContactPoint", email: "hello@saifuliqi.com", contactType: "business inquiries", availableLanguage: ["zh-CN", "en"] },
};

export function identityData() {
  return { "@context": "https://schema.org", "@graph": [organization, {
    "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "SAIFU", alternateName: "赛蚨里奇",
    publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: ["zh-CN", "en"],
  }] };
}

export function pageData(language: Language, path: string, name: string, description: string, type = "WebPage") {
  const url = `${siteUrl}${localPath(language, path)}`;
  return {
    "@type": type, "@id": `${url}#webpage`, url, name, description,
    inLanguage: language === "zh" ? "zh-CN" : "en",
    isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#organization` },
  };
}
