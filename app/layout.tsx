import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://saifuliqi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SAIFU｜AI 视频生成工具与应用开发",
    template: "%s｜SAIFU",
  },
  description:
    "SAIFU 专注 AI 视频生成工具、AI 视频应用与定制开发，为创作者、团队和企业打造真正可用的 AI 视频产品。",
  applicationName: "SAIFU",
  category: "technology",
  keywords: [
    "SAIFU",
    "赛蚨里奇",
    "北京赛蚨里奇科技有限公司",
    "AI 视频",
    "AI 视频生成",
    "AI 视频工具",
    "AI 视频应用开发",
    "AI video",
    "AI video tools",
    "AI video application development",
  ],
  creator: "北京赛蚨里奇科技有限公司",
  publisher: "北京赛蚨里奇科技有限公司",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    url: "/",
    siteName: "SAIFU",
    title: "SAIFU｜AI 视频生成工具与应用开发",
    description:
      "SAIFU 专注 AI 视频生成工具、AI 视频应用与定制开发，为创作者、团队和企业打造真正可用的 AI 视频产品。",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 908,
        alt: "SAIFU — AI Video Tools & Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAIFU｜AI 视频生成工具与应用开发",
    description:
      "AI 视频生成工具、AI 视频应用与定制开发。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "SAIFU",
  legalName: "北京赛蚨里奇科技有限公司",
  alternateName: ["赛蚨里奇", "Beijing Saifuliqi Technology Co., Ltd."],
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description:
    "SAIFU 专注 AI 视频生成工具、AI 视频应用与定制开发，为创作者、团队和企业打造真正可用的 AI 视频产品。",
  email: "hello@saifuliqi.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@saifuliqi.com",
    contactType: "business inquiries",
    availableLanguage: ["zh-CN", "en"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
