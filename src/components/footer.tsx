import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Program", href: "/program" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Donasi", href: "/donasi" },
  { label: "Kontak", href: "/kontak" },
];

export function Footer() {
  const socialLinks = [
    { label: "WhatsApp", href: siteConfig.whatsappLink },
    { label: "Instagram", href: siteConfig.instagram },
    { label: "TikTok", href: siteConfig.social.tiktok },
    ...(siteConfig.social.youtube
      ? [{ label: "YouTube", href: siteConfig.social.youtube }]
      : []),
  ];

  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
        <div className="space-y-3 md:col-span-2">
          <h3 className="text-lg font-semibold text-brand">Remaja Masjid Asiah</h3>
          <p className="text-sm text-muted/90">
            Ruang kolaborasi dakwah, sosial, dan kreatif bagi pemuda Imogiri. Kami hadir
            untuk membersamai perjalanan iman dan kontribusi sosial generasi muda.
          </p>
          <div className="text-sm text-muted">
            <p className="break-words">{siteConfig.address}</p>
            <p className="break-words">WhatsApp: {siteConfig.whatsapp}</p>
            {siteConfig.email ? (
              <p className="break-words">Email: {siteConfig.email}</p>
            ) : null}
          </div>
        </div>

        <div className="min-w-0">
          <h4 className="mb-3 text-sm font-semibold text-foreground">Navigasi</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-muted sm:grid-cols-3 md:grid-cols-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-w-0 break-words hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h4 className="mb-3 text-sm font-semibold text-foreground">Ikuti Kami</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-muted sm:grid-cols-3 md:grid-cols-1">
            {socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="min-w-0 break-words hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-100 bg-brand text-center text-sm text-white">
        <div className="mx-auto max-w-6xl px-4 py-3 md:px-6">
          <div className="flex flex-col items-center gap-2">
            <span className="break-words">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </span>
            <span className="break-words text-white/80">Muda, Beriman, Berdaya.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
