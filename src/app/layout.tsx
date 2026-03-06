import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating";
import { LoadingOverlay } from "@/components/loading-overlay";
import { siteConfig } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | Remaja Masjid Asiah Kerten Imogiri",
    default: "Remaja Masjid Asiah – Kerten, Imogiri | Komunitas Pemuda Islam",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Remaja Masjid Asiah",
    alternateName: ["Remasah", "Remaja Masjid Kerten", "Remaja Masjid Imogiri"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/Remasah.png`,
    image: `${siteConfig.url}/Remasah.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kerten",
      addressLocality: "Imogiri",
      addressRegion: "Bantul, Daerah Istimewa Yogyakarta",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Imogiri" },
      { "@type": "City", name: "Bantul" },
      { "@type": "State", name: "Daerah Istimewa Yogyakarta" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.whatsapp,
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian"],
      },
    ],
    sameAs: [
      siteConfig.instagram,
      siteConfig.social.youtube,
      siteConfig.social.tiktok,
    ],
  };

  return (
    <html lang="id">
      <body className={`${jakarta.variable} antialiased`}>
        <LoadingOverlay />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </body>
    </html>
  );
}
