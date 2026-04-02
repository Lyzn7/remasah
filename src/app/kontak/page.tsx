import Link from "next/link";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const generateMetadata = () =>
  buildMetadata({
    title: "Kontak",
    description:
      "Hubungi Remaja Masjid Asiah via WhatsApp atau ikuti Instagram dan TikTok resmi kami.",
    canonicalPath: "/kontak",
  });

export default function KontakPage() {
  return (
    <div className="bg-background text-foreground">
      <Section title="Kontak" subtitle="Terhubung dengan cepat">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <Card>
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <p className="mt-2 text-sm text-muted">WhatsApp: {siteConfig.whatsapp}</p>
            <div className="mt-2 space-y-1 text-sm text-muted">
              <p>
                Instagram:{" "}
                <Link
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:underline"
                >
                  {siteConfig.instagramHandle}
                </Link>
              </p>
              <p>
                TikTok:{" "}
                <Link
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:underline"
                >
                  {siteConfig.social.tiktokHandle}
                </Link>
              </p>
              {siteConfig.email ? <p>Email: {siteConfig.email}</p> : null}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <CTAButton href={siteConfig.whatsappLink}>Chat WhatsApp</CTAButton>
              <CTAButton href={siteConfig.instagram} target="_blank" variant="ghost">
                Instagram
              </CTAButton>
              <CTAButton href={siteConfig.social.tiktok} target="_blank" variant="ghost">
                TikTok
              </CTAButton>
              {siteConfig.email ? (
                <CTAButton href={`mailto:${siteConfig.email}`} variant="ghost">
                  Kirim Email
                </CTAButton>
              ) : null}
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-foreground">Alamat</h4>
              <p className="text-sm text-muted">{siteConfig.address}</p>
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Lokasi</h3>
            <iframe
              title="Lokasi Masjid Asiah"
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="320"
              className="w-full rounded-xl border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </Section>
    </div>
  );
}
