import type { Metadata } from "next";

export type Language = "zh" | "en";
export const siteUrl = "https://saifuliqi.com";
export const companyName = "北京赛蚨里奇科技有限公司";
export const contentPaths = ["", "/services/ai-comic-series", "/services/ai-short-dramas", "/services/ai-video-production", "/services/ai-ad-production", "/services/ai-video-tools", "/services/custom-ai-video-applications", "/faq", "/guides/planning-an-ai-video-project"] as const;

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
    verification: { google: "j_DuvBLdaly267Sro5sH49oz0fj0Wvg5c8J1_VFbpis" },
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
      images: [{ url: "/og.png?v=dream-keeper-a", width: 1733, height: 908, alt: "SAIFU — AI video production and application development" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png?v=dream-keeper-a"] },
    icons: { icon: "/favicon.svg?v=dream-keeper-a" },
  };
}

export const homeMeta = {
  zh: { title: "AI 漫剧、短剧、视频与广告制作｜赛蚨里奇 SAIFU", description: "赛蚨里奇 SAIFU 承接 AI 漫剧、AI 短剧、AI 视频及 AI 广告制作，也提供 AI 视频工具与定制应用开发。欢迎带着想法、脚本或参考片咨询合作，沟通风格、用途与项目报价。" },
  en: { title: "AI Video, Comic Series & Ad Production | SAIFU", description: "Commission AI comic series, short dramas, videos and ads with SAIFU. We also develop AI video tools and custom applications. Bring an idea or brief and discuss your project." },
};

export const organization = {
  "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "SAIFU", legalName: companyName,
  alternateName: ["赛蚨里奇", "Beijing Saifuliqi Technology Co., Ltd."],
  url: `${siteUrl}/`, logo: `${siteUrl}/saifu-mark-purple.svg`, email: "hello@saifuliqi.com",
  description: "AI comic series, short drama, video and ad production, alongside AI video tool and custom application development. Project inquiries welcome.",
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
