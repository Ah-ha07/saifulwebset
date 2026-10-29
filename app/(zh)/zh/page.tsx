import CompanyHome from "@/app/components/CompanyHome";
import JsonLd from "@/app/components/JsonLd";
import { homeMeta, pageData } from "@/app/lib/site";
export default function Home() { return <><JsonLd data={{ "@context": "https://schema.org", ...pageData("zh", "", homeMeta.zh.title, homeMeta.zh.description) }} /><CompanyHome initialLanguage="zh" /></>; }
