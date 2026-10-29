import { GuidePage } from "@/app/components/ContentPage";
import { guide } from "@/app/lib/content";
import { pageMetadata } from "@/app/lib/site";
export const metadata = pageMetadata("en", "/guides/planning-an-ai-video-project", guide.en.title, guide.en.description);
export default function Page() { return <GuidePage language="en" />; }
