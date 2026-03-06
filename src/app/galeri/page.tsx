import gallery from "@/data/gallery.json";
import { Section } from "@/components/section";
import { LightboxGallery, type GalleryItem } from "@/components/lightbox-gallery";
import { buildMetadata } from "@/lib/metadata";

export const generateMetadata = () =>
  buildMetadata({
    title: "Galeri",
    description: "Kumpulan dokumentasi kegiatan Remaja Masjid Asiah: kajian, sosial, olahraga, dan kreatif.",
    canonicalPath: "/galeri",
  });

export default function GaleriPage() {
  return (
    <div className="bg-background text-foreground">
      <Section title="Galeri Kegiatan" subtitle="Visual perjalanan kami">
        <LightboxGallery items={gallery as GalleryItem[]} />
      </Section>
    </div>
  );
}
