import DocumentRoot from "@/app/components/DocumentRoot";
import { homeMeta, pageMetadata } from "@/app/lib/site";
import "@/app/globals.css";
export const metadata = pageMetadata("en", "", homeMeta.en.title, homeMeta.en.description);
export default function Layout({ children }: { children: React.ReactNode }) { return <DocumentRoot language="en">{children}</DocumentRoot>; }
