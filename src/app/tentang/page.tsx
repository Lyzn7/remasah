import Link from "next/link";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import {
  managementPeriod,
  managementStructure,
  shortTermPrograms,
} from "@/data/organization";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const generateMetadata = () =>
  buildMetadata({
    title: "Tentang",
    description:
      `Profil Remaja Masjid Asiah Imogiri, struktur kepengurusan ${managementPeriod}, dan program jangka pendek pemuda masjid.`,
    canonicalPath: "/tentang",
  });

export default function TentangPage() {
  return (
    <div className="bg-background text-foreground">
      <Section
        title="Tentang Remaja Masjid Asiah"
        subtitle={`Profil dan Kepengurusan ${managementPeriod}`}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold">Visi</h3>
            <p className="mt-2 text-sm text-muted">
              Menjadi wadah pemuda masjid yang aktif, amanah, dan bermanfaat bagi jamaah
              melalui dakwah, sosial, dan media yang relevan.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Misi</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
              <li>Menumbuhkan budaya belajar Al-Qur&apos;an dan kajian yang terarah.</li>
              <li>Menguatkan bakti sosial sebagai bentuk kepedulian jamaah muda.</li>
              <li>Membangun media sosial untuk publikasi kegiatan dan dakwah digital.</li>
              <li>Menjaga kolaborasi antar pengurus selama periode amanah 2026-2030.</li>
            </ul>
          </Card>
        </div>

        <Card className="mt-6">
          <h3 className="text-xl font-semibold">Struktur Kepengurusan {managementPeriod}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {managementStructure.map((division) => (
              <div
                key={division.title}
                className="rounded-xl border border-neutral-200 bg-white p-4"
              >
                <p className="font-semibold text-foreground">{division.title}</p>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {division.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <h3 className="text-xl font-semibold">Program Jangka Pendek</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {shortTermPrograms.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Kontak & Media Sosial</h3>
            <p className="text-sm text-muted">{siteConfig.address}</p>
            <p className="text-sm text-muted">WhatsApp: {siteConfig.whatsapp}</p>
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
              <CTAButton href={siteConfig.instagram} target="_blank">
                Instagram
              </CTAButton>
              <CTAButton href={siteConfig.social.tiktok} target="_blank" variant="ghost">
                TikTok
              </CTAButton>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
