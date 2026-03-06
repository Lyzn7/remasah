import Image from "next/image";
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
                <span className="font-semibold text-foreground">Rekening:</span> Bank
                Syariah 1234 5678 90 a.n. Remaja Masjid Asiah
              </p>
              <p>
                <span className="font-semibold text-foreground">QRIS:</span> gunakan
                kode di samping, lalu kirim bukti ke WhatsApp.
              </p>
            </div>
            <CTAButton href={siteConfig.whatsappLink}>Konfirmasi via WhatsApp</CTAButton>
          </Card>

          <Card className="flex flex-col items-center gap-3">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-brand-light">
              <Image
                src="/images/hero.svg"
                alt="QRIS placeholder"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-muted">Scan QRIS untuk infak cepat</p>
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
