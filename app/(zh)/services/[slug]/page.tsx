import { notFound } from "next/navigation";
import { ServicePage } from "@/app/components/ContentPage";
import { services } from "@/app/lib/content";
import { pageMetadata } from "@/app/lib/site";
const known = (slug: string) => Object.hasOwn(services, slug);
export function generateStaticParams() { return Object.keys(services).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!known(slug)) notFound(); const copy = services[slug].zh; return pageMetadata("zh", `/services/${slug}`, copy.title, copy.description); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!known(slug)) notFound(); return <ServicePage language="zh" slug={slug} />; }
