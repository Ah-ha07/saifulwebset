import { FaqPage, faqMeta } from "@/app/components/ContentPage";
import { pageMetadata } from "@/app/lib/site";
export const metadata = pageMetadata("en", "/faq", faqMeta.en.title, faqMeta.en.description);
export default function Page() { return <FaqPage language="en" />; }
