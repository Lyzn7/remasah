# Remaja Masjid Asiah — Landing Page (Next.js 16, App Router)

Landing page modern, mobile-first, dan SEO-friendly untuk komunitas **Remaja Masjid Asiah** di Imogiri. Dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS (v4).

## Fitur Utama
- Struktur halaman lengkap: beranda one-page, tentang, program, jadwal, galeri, artikel (list & detail), donasi, kontak.
- Konten statis mudah diedit: JSON untuk data program/jadwal/galeri/faq, Markdown untuk artikel.
- Optimasi performa: `next/image`, font `Plus Imogiri Sans` (`next/font`), lazy load, minimal JS.
- SEO: Metadata API per halaman, Open Graph, Twitter Card, sitemap, robots.txt, JSON-LD (Organization & Article).
- Aksesibilitas: alt text, fokus ring, kontras aman, navigasi keyboard, 1 h1 per halaman.
- UI sesuai tema hijau-putih dengan aksen emas, adaptasi dari desain `stitch/screen.png`.

## Struktur Proyek
```
src/
  app/
    (halaman)... page.tsx
    artikel/[slug]/page.tsx
    layout.tsx, globals.css, sitemap.ts, robots.ts
  components/
    navbar, footer, section, card, cta-button, breadcrumb,
    article-card, faq-accordion, whatsapp-floating,
    lightbox-gallery, testimonial-carousel, schedule-list, countdown
  lib/
    site.ts, metadata.ts, articles.ts, date.ts
data/
  programs.json, schedule.json, gallery.json, faqs.json, testimonials.json
content/articles/
  *.md (dengan frontmatter)
public/
  logo, icons/whatsapp.svg, images/*.svg (hero, galeri, avatar)
```

## Persiapan & Jalankan
1. **Install dependency**
   ```bash
   npm install
   ```
2. **Dev server**
   ```bash
   npm run dev
   ```
   Buka http://localhost:3000
3. **Build produksi**
   ```bash
   npm run build
   npm start
   ```
4. **Lint**
   ```bash
   npm run lint
   ```

## Deploy ke Vercel
1. Push repo ke GitHub.
2. Buat project di Vercel, pilih repo ini.
3. Framework = Next.js, root = `.` (default).
4. Setelah deploy, set `siteConfig.url` di `src/lib/site.ts` ke domain produksi agar canonical/OG benar.

## Update Konten
- **Program/Jadwal/Galeri/FAQ/Testimoni**: edit file di `data/*.json`.
- **Artikel**: tambah file markdown di `content/articles/slug.md` dengan frontmatter:
  ```md
  ---
  title: "Judul"
  description: "Deskripsi singkat"
  date: "2026-02-20"
  tags: ["tag1","tag2"]
  cover: "/images/gallery-1.svg"
  author: "Nama"
  ---
  Isi artikel di sini...
  ```
- **Info organisasi & kontak**: `src/lib/site.ts`.
- **Warna/tema**: `src/app/globals.css` (CSS custom + token Tailwind v4).

## SEO Checklist Cepat
- [x] Metadata per halaman via `buildMetadata`.
- [x] Canonical URL & title template.
- [x] Open Graph & Twitter Card dengan cover lokal.
- [x] JSON-LD Organization di `layout.tsx`.
- [x] JSON-LD Article di halaman detail artikel.
- [x] `sitemap.xml` otomatis termasuk artikel dinamis.
- [x] `robots.txt` membuka semua halaman.
- [x] Struktur heading semantik, 1x `h1` per halaman.
- [x] Alt text semua gambar, tombol penting ada `aria-label`.
- [x] Internal linking (navbar + breadcrumb + prev/next artikel).

## Catatan Desain/UX
- Mobile-first, menu navbar collapsible, tombol WA mengambang.
- Lightbox galeri sederhana, carousel testimoni auto-rotate (4.5s).
- Countdown event otomatis pakai jadwal pertama di `data/schedule.json`.
- Warna utama: hijau `#1B805B`, aksen emas `#E7B84C`, latar putih lembut.

## Performa & Aksesibilitas
- `next/image` untuk semua gambar statis, lazy loading default.
- Font `Plus Imogiri Sans` dengan `display: swap`.
- Minim JS di halaman statis; hanya komponen interaktif yang jadi client component.
- Fokus ring & kontras mengikuti token tema.

Selamat menggunakan! 🎉
