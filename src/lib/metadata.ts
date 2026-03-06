import type { Metadata } from "next";
import { siteConfig } from "./site";

type OgImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: string;
};

type MetaOptions = {
  title: string;
  description?: string;
  canonicalPath?: string;
  images?: OgImage[];
  keywords?: string[];
};

// Gambar default untuk OG/WhatsApp preview — harus berukuran min. 300×300
const defaultOgImages: OgImage[] = [
  {
    url: `${siteConfig.url}/og-image.png`,
    alt: siteConfig.name,
    width: 1200,
    height: 630,
    type: "image/png",
  },
];

export function buildMetadata({
  title,
  description,
  canonicalPath = "/",
  images = defaultOgImages,
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
