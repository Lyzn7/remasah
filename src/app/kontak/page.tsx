import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { CTAButton } from "@/components/cta-button";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const generateMetadata = () =>
  buildMetadata({
    title: "Kontak",
    description: "Hubungi Remaja Masjid Asiah via WhatsApp, email, atau datang langsung ke masjid.",
    canonicalPath: "/kontak",
  });

export default function KontakPage() {
  return (
    <div className="bg-background text-foreground">
      <Section title="Kontak" subtitle="Terhubung dengan cepat">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <Card>
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <p className="mt-2 text-sm text-muted">
              WhatsApp: {siteConfig.whatsapp} <br />
              Email: {siteConfig.email}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CTAButton href={siteConfig.whatsappLink}>Chat WhatsApp</CTAButton>
              <CTAButton href={`mailto:${siteConfig.email}`} variant="ghost">
                Kirim Email
              </CTAButton>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.448!2d106.828!3d-6.200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknNDAuMCJF!5e0!3m2!1sen!2sid!4v00000000000"
              width="100%"
              height="260"
              className="rounded-xl border-0"
              loading="lazy"
              allowFullScreen
            />
          </Card>
        </div>
      </Section>
    </div>
  );
}
