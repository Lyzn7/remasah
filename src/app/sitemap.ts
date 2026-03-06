import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages = [
    "",
    "/tentang",
    "/program",
    "/jadwal",
    "/galeri",
    "/artikel",
    "/donasi",
    "/kontak",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const articlePages = getArticles().map((article) => ({
    url: `${base}/artikel/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticPages, ...articlePages];
}
