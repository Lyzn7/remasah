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
    template: "%s | Remaja Masjid An-Nur",
    default: "Remaja Masjid An-Nur",
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/Remasah.png`,
    address: siteConfig.address,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.whatsapp,
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian"],
      },
    ],
    sameAs: [siteConfig.instagram, siteConfig.social.youtube, siteConfig.social.tiktok],
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
