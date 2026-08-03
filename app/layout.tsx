import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SAIFU｜AI 视频生成工具与应用开发",
    template: "%s｜SAIFU",
  },
  description:
    "SAIFU 专注 AI 视频生成工具、AI 视频应用与定制开发，为创作者、团队和企业打造真正可用的 AI 视频产品。",
  applicationName: "SAIFU",
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
