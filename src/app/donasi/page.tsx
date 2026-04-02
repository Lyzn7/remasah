import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const generateMetadata = () =>
  buildMetadata({
    title: "Donasi",
    description: "Salurkan donasi untuk mendukung program dakwah, sosial, dan pendidikan Remaja Masjid Asiah.",
    canonicalPath: "/donasi",
  });

export default function DonasiPage() {
  return (
    <div className="bg-background text-foreground">
      <Section title="Donasi & Dukungan" subtitle="Transparansi & kemudahan">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Saluran Donasi</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>
                Informasi rekening dan QRIS terbaru dibagikan langsung oleh pengurus
                agar data donasi yang diterima tetap benar dan aman.
              </p>
              <p>
                Hubungi WhatsApp pengurus untuk meminta detail donasi, lalu kirim bukti
                transfer setelah pembayaran.
              </p>
            </div>
            <CTAButton href={siteConfig.whatsappLink}>Minta Info Donasi</CTAButton>
          </Card>

          <Card className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Konfirmasi & Update</h3>
            <p className="text-sm text-muted">
              Update kegiatan dan publikasi donasi juga dibagikan melalui media sosial
              resmi Remaja Masjid Asiah.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={siteConfig.instagram} target="_blank" variant="ghost">
                Instagram
              </CTAButton>
              <CTAButton href={siteConfig.social.tiktok} target="_blank" variant="ghost">
                TikTok
              </CTAButton>
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <h3 className="text-lg font-semibold">Transparansi Singkat</h3>
          <ul className="mt-3 grid gap-3 text-sm text-muted md:grid-cols-3">
            <li>
              <p className="font-semibold text-foreground">Program Dakwah</p>
              <p>Materi kajian, honor pemateri, dokumentasi.</p>
            </li>
            <li>
              <p className="font-semibold text-foreground">Sosial</p>
              <p>Paket sembako, beasiswa santri, bakti lingkungan.</p>
            </li>
            <li>
              <p className="font-semibold text-foreground">Operasional</p>
              <p>Perawatan alat, konsumsi relawan, media dakwah.</p>
            </li>
          </ul>
        </Card>
      </Section>
    </div>
  );
}
