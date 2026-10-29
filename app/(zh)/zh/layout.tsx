import DocumentRoot from "@/app/components/DocumentRoot";
import { homeMeta, pageMetadata } from "@/app/lib/site";
import "@/app/globals.css";
export const metadata = pageMetadata("zh", "", homeMeta.zh.title, homeMeta.zh.description);
export default function Layout({ children }: { children: React.ReactNode }) { return <DocumentRoot language="zh">{children}</DocumentRoot>; }
