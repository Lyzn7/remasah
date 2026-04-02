import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/tentang`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/program`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/galeri`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/artikel`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/donasi`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/kontak`, priority: 0.7, changeFrequency: "monthly" as const },
  ].map((p) => ({ ...p, lastModified: new Date() }));

  const articlePages: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: `${base}/artikel/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
