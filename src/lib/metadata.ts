import type { Metadata } from "next";
import { siteConfig } from "./site";

type MetaOptions = {
  title: string;
  description?: string;
  canonicalPath?: string;
  images?: { url: string; alt?: string }[];
};

export function buildMetadata({
  title,
  description,
  canonicalPath = "/",
  images = [
    {
      url: `${siteConfig.url}/images/hero.svg`,
      alt: siteConfig.description,
    },
  ],
}: MetaOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = `${siteConfig.url}${canonicalPath}`;
  return {
    title: fullTitle,
    description: description ?? siteConfig.description,
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
