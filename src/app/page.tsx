import programs from "@/data/programs.json";
import gallery from "@/data/gallery.json";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { Card } from "@/components/card";
import { LightboxGallery, type GalleryItem } from "@/components/lightbox-gallery";
import { ArticleCard } from "@/components/article-card";
import { HeroMedia } from "@/components/hero-media";
import { Reveal } from "@/components/reveal";
import { getArticles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";
import { BlurText } from "@/components/blur-text";
import { AnimatedCounter } from "@/components/animated-counter";
import { TiltCard } from "@/components/tilt-card";
import { MagneticButton } from "@/components/magnetic-button";

export default async function Home() {
  const articles = getArticles().slice(0, 3);

  return (
    <div className="bg-[url('/images/background.webp')] bg-cover bg-center bg-fixed h-screem text-foreground">
      <section className=" bg-[url('/images/background.webp')] bg-cover bg-center">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
          <Reveal className="space-y-6 bg-gradient-to-br from-white/80 to-white/60 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
            <span className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-sm font-semibold text-brand-dark">
              Remaja Masjid Asiah - Kerten, Imogiri
            </span>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              <BlurText text="Muda, Bertauhid, Berbagi" as="span" />
            </h1>
            <p className="text-lg text-muted">
              <BlurText
                text="Komunitas pemuda yang aktif berdakwah, berkolaborasi sosial, dan berkarya kreatif. Mari bertumbuh bersama di Masjid Asiah."
                as="span"
                delay={0.3}
              />
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton>
                <CTAButton href={siteConfig.whatsappLink} ariaLabel="Hubungi via WhatsApp">
                  Hubungi Kami
                </CTAButton>
              </MagneticButton>
              <MagneticButton>
                <CTAButton href="#program" variant="ghost">
                  Lihat Kegiatan
                </CTAButton>
              </MagneticButton>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-muted">
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter target={30} suffix="+" />
                </p>
                <p>Program per tahun</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter target={120} />
                </p>
                <p>Relawan aktif</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter target={8} />
                </p>
                <p>Divisi kolaboratif</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="relative" delay={0.12}>
            <div className="grid-pattern absolute inset-0 rounded-[28px] opacity-50" />
            <HeroMedia
              alt="Logo animasi Remasah"
              className="bg-white shadow-2xl ring-1 ring-neutral-100"
            />
          </Reveal>
        </div>
      </section>

      <Section id="tentang" subtitle="Tentang Kami" title="Singkat Profil Remaja Masjid" className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Berbasis Masjid",
              desc: "Berakar di Masjid An-Nur Imogiri, menjadi pusat kegiatan dan kolaborasi.",
            },
            {
              title: "Fokus Pemuda",
              desc: "Program disusun oleh dan untuk pemuda agar relevan dengan tantangan hari ini.",
            },
            {
              title: "Transparan",
              desc: "Laporan program dan donasi dirilis rutin agar jamaah merasa tenang.",
            },
          ].map((item, idx) => (
            <Reveal
              key={item.title}
              delay={0.04 * idx}
              y={idx === 1 ? 12 : 24}
              x={idx === 0 ? -10 : idx === 2 ? 10 : 0}
              duration={0.9}
            >
              <Card>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="program" subtitle="Program Unggulan" title="Belajar, Berbagi, Berkarya" className="bg-white">
        <div className="grid gap-4 md:grid-cols-3">
          {programs.map((program, idx) => (
            <Reveal
              key={program.title}
              delay={0.05 * idx}
              y={idx % 2 === 0 ? 28 : -18}
              x={idx % 3 === 0 ? -18 : idx % 3 === 1 ? 12 : 0}
              duration={0.8}
            >
              <TiltCard tiltStrength={8}>
                <Card className="flex flex-col gap-3">
                  <span className="text-2xl">{program.icon}</span>
                  <h3 className="text-lg font-semibold">{program.title}</h3>
                  <p className="text-sm text-muted">{program.description}</p>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>



      <Section id="galeri" subtitle="Galeri" title="Cuplikan Kegiatan">
        <Reveal y={10} duration={1.1}>
          <LightboxGallery items={gallery as GalleryItem[]} />
        </Reveal>
      </Section>

      <Section id="artikel" subtitle="Artikel" title="Baca Insight Terbaru" className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, idx) => (
            <Reveal
              key={article.slug}
              delay={0.06 * idx}
              y={idx % 2 === 0 ? 24 : 36}
              x={idx % 2 === 0 ? -8 : 8}
              duration={0.85}
            >
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </Section>



      <Section
        id="kontak"
        className="pb-20 bg-gradient-to-br from-white/100 to-white/20 shadow-lg backdrop-blur-sm"
        title="Dukung & Terhubung"
        subtitle="Donasi dan Kontak"
      >
        <div className="mx-auto w-full max-w-xl md:max-w-5xl grid gap-5 sm:gap-6 md:grid-cols-[1.2fr_1fr]">
          <Reveal y={30} x={-12}>
            <Card className="flex w-full min-w-0 flex-col gap-3">
              <h3 className="text-xl font-semibold text-foreground">
                Salurkan Infak & Donasi
              </h3>
              <p className="text-sm text-muted">
                Gunakan QRIS atau transfer rekening. Kirim bukti ke WhatsApp untuk laporan
                transparansi bulanan.
              </p>

              <div className="flex min-w-0 flex-wrap gap-4">
                <div className="min-w-0 rounded-xl bg-brand-light px-4 py-3 text-sm text-brand-dark break-words">
                  Bank Syariah: 1234 5678 90 a.n. Remaja Masjid An-Nur
                </div>

                <div className="min-w-0 rounded-xl border border-dashed border-brand/40 px-4 py-3 text-sm text-muted break-words">
                  <span className="font-semibold text-brand">QRIS</span> (placeholder)
                </div>
              </div>

              <CTAButton href="/donasi">Detail Donasi</CTAButton>
            </Card>
          </Reveal>

          <Reveal delay={0.1} y={22} x={10}>
            <Card className="w-full min-w-0">
              <h3 className="text-lg font-semibold text-foreground">Kontak</h3>
              <p className="text-sm text-muted">{siteConfig.address}</p>
              <p className="text-sm text-muted">WhatsApp: {siteConfig.whatsapp}</p>
              <p className="text-sm text-muted">Instagram: {siteConfig.instagram}</p>

              <div className="mt-4">
                <iframe
                  title="Lokasi Masjid An-Nur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.448!2d106.828!3d-6.200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDknNDAuMCJF!5e0!3m2!1sen!2sid!4v00000000000"
                  width="100%"
                  height="auto"
                  className="w-full rounded-xl border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
