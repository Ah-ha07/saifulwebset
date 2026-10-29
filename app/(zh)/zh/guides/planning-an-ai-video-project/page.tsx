import { GuidePage } from "@/app/components/ContentPage";
import { guide } from "@/app/lib/content";
import { pageMetadata } from "@/app/lib/site";
export const metadata = pageMetadata("zh", "/guides/planning-an-ai-video-project", guide.zh.title, guide.zh.description);
export default function Page() { return <GuidePage language="zh" />; }
