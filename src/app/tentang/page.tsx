import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const generateMetadata = () =>
  buildMetadata({
    title: "Tentang",
    description:
      "Profil Remaja Masjid Asiah Imogiri, visi misi, struktur organisasi, dan arah gerak dakwah pemuda.",
    canonicalPath: "/tentang",
  });

export default function TentangPage() {
  return (
    <div className="bg-background text-foreground">
      <Section title="Tentang Remaja Masjid Asiah" subtitle="Profil Singkat">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold">Visi</h3>
            <p className="mt-2 text-sm text-muted">
              Menjadi komunitas pemuda masjid yang unggul dalam iman, ilmu, dan aksi
              sosial di Imogiri.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Misi</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
              <li>Menumbuhkan budaya belajar Al-Qur’an dan kajian tematik.</li>
              <li>Mendorong gerakan sosial berkelanjutan dan transparan.</li>
              <li>Memfasilitasi kreativitas dakwah digital dan media.</li>
              <li>Memperkuat ukhuwah melalui olahraga dan kegiatan kebersamaan.</li>
            </ul>
          </Card>
        </div>
        <Card className="mt-6">
          <h3 className="text-xl font-semibold">Struktur Ringkas</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-3 text-sm text-muted">
            <div>
              <p className="font-semibold text-foreground">Pembina</p>
              <p>Ust. Ahmad Syaifuddin</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Ketua</p>
              <p>Rizky Harits</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Sekretaris</p>
              <p>Aisyah Purnama</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Bendahara</p>
              <p>Fajar Lazuardi</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Divisi</p>
              <p>Kajian, Sosial, Media, Kreatif, Olahraga, Dana Usaha</p>
            </div>
          </div>
        </Card>
        <Card className="mt-6">
          <h3 className="text-xl font-semibold">Kontak</h3>
          <p className="text-sm text-muted">{siteConfig.address}</p>
          <p className="text-sm text-muted">WhatsApp: {siteConfig.whatsapp}</p>
          <p className="text-sm text-muted">Email: {siteConfig.email}</p>
        </Card>
      </Section>
    </div>
  );
}
