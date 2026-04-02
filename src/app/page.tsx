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
import { managementPeriod, managementSummary } from "@/data/organization";

export default async function Home() {
  const articles = getArticles().slice(0, 3);
  const articleGridClass =
    articles.length <= 1
      ? "grid gap-6"
      : articles.length === 2
        ? "grid gap-6 md:grid-cols-2"
        : "grid gap-6 md:grid-cols-3";

  return (
    <div className="min-h-screen bg-[url('/images/background.webp')] bg-cover bg-center bg-fixed text-foreground">
      <section className="bg-[url('/images/background.webp')] bg-cover bg-center">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6">
          <Reveal className="space-y-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 p-6 shadow-lg backdrop-blur-sm">
            <span className="inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-sm font-semibold text-brand-dark">
              Remaja Masjid Asiah - Periode {managementPeriod}
            </span>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
              <BlurText text="Muda, Bertauhid, Berbagi" as="span" />
            </h1>
            <p className="text-lg text-muted">
              <BlurText
                text="Komunitas pemuda Masjid Asiah yang bergerak di kajian Al-Qur'an, bakti sosial, dan media sosial dakwah untuk jamaah sekitar."
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
                  <AnimatedCounter target={managementSummary.totalPrograms} />
                </p>
                <p>Program prioritas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter target={managementSummary.totalMembers} />
                </p>
                <p>Pengurus aktif</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter target={managementSummary.totalDivisions} />
                </p>
                <p>Bidang amanah</p>
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

      <Section
        id="tentang"
        subtitle="Tentang Kami"
        title="Singkat Profil Remaja Masjid"
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Berbasis Masjid",
              desc: "Berakar di Masjid Asiah Imogiri, menjadi pusat kegiatan dan kolaborasi.",
            },
            {
              title: "Fokus Pemuda",
              desc: "Program disusun oleh dan untuk pemuda agar relevan dengan kebutuhan jamaah muda hari ini.",
            },
            {
              title: "Aktif Bermedia",
              desc: "Instagram dan TikTok dimanfaatkan untuk publikasi kegiatan dan dakwah digital.",
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

      <Section
        id="program"
        subtitle="Program Jangka Pendek"
        title="Kajian, Sosial, dan Media"
        className="bg-white"
      >
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

      <Section id="galeri" >
        <h1 className="text-white text-bold " >
          cuplikan kegiatan
        </h1>
        <Reveal y={10} duration={1.1}>
          <LightboxGallery items={gallery as GalleryItem[]} />
        </Reveal>
      </Section>

      <Section id="artikel" subtitle="Artikel" title="Baca Insight Terbaru" className="bg-white">
        <div className={articleGridClass}>
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
        className="bg-gradient-to-br from-white/100 to-white/20 pb-20 shadow-lg backdrop-blur-sm"
        title="Dukung & Terhubung"
        subtitle="Donasi dan Kontak"
      >
        <div className="mx-auto grid w-full max-w-xl gap-5 sm:gap-6 md:max-w-5xl md:grid-cols-[1.2fr_1fr]">
          <Reveal y={30} x={-12}>
            <Card className="flex w-full min-w-0 flex-col gap-3">
              <h3 className="text-xl font-semibold text-foreground">
                Salurkan Infak & Donasi
              </h3>
              <p className="text-sm text-muted">
                Hubungi pengurus via WhatsApp untuk mendapatkan informasi rekening atau
                QRIS terbaru, lalu kirim bukti transfer untuk pencatatan transparansi.
              </p>

              <div className="flex min-w-0 flex-wrap gap-4">
                <div className="min-w-0 break-words rounded-xl bg-brand-light px-4 py-3 text-sm text-brand-dark">
                  Informasi rekening dan QRIS dibagikan langsung oleh pengurus agar data
                  donasi selalu benar dan terbaru.
                </div>

                <div className="min-w-0 break-words rounded-xl border border-dashed border-brand/40 px-4 py-3 text-sm text-muted">
                  <span className="font-semibold text-brand">Konfirmasi</span> kirim
                  bukti donasi ke WhatsApp untuk pencatatan dan laporan.
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
              <p className="text-sm text-muted">
                Instagram: {siteConfig.instagramHandle}
              </p>
              <p className="text-sm text-muted">
                TikTok: {siteConfig.social.tiktokHandle}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <CTAButton href={siteConfig.instagram} target="_blank" variant="ghost">
                  Instagram
                </CTAButton>
                <CTAButton href={siteConfig.social.tiktok} target="_blank" variant="ghost">
                  TikTok
                </CTAButton>
              </div>

              <div className="mt-4">
                <iframe
                  title="Lokasi Masjid Asiah"
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="260"
                  className="w-full rounded-xl border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
