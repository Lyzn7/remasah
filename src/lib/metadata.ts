import type { Metadata } from "next";
import { siteConfig } from "./site";

type MetaOptions = {
  title: string;
  description?: string;
  canonicalPath?: string;
  images?: { url: string; alt?: string }[];
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  canonicalPath = "/",
  images = [
    {
      url: `${siteConfig.url}/Remasah.png`,
      alt: siteConfig.description,
    },
  ],
  keywords,
}: MetaOptions): Metadata {
  const fullTitle = `${title} | Remaja Masjid Asiah Kerten Imogiri`;
  const canonical = `${siteConfig.url}${canonicalPath}`;
  const mergedKeywords = [
    ...(keywords ?? []),
    ...siteConfig.keywords,
  ];
  return {
    title: fullTitle,
    description: description ?? siteConfig.description,
    keywords: mergedKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: description ?? siteConfig.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description ?? siteConfig.description,
      images: images.map((img) => img.url),
    },
  };
}
