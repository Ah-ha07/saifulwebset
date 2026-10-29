import { FaqPage, faqMeta } from "@/app/components/ContentPage";
import { pageMetadata } from "@/app/lib/site";
export const metadata = pageMetadata("zh", "/faq", faqMeta.zh.title, faqMeta.zh.description);
export default function Page() { return <FaqPage language="zh" />; }
