"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/program", label: "Program" },
  { href: "/galeri", label: "Galeri" },
  { href: "/artikel", label: "Artikel" },
  { href: "/donasi", label: "Donasi" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand/20 bg-brand-light">
            <Image
              src="/Remasah.png"
              alt="Logo Remaja Masjid"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight text-sm font-semibold text-foreground">
            <span>Remaja Masjid</span>
            <span className="text-brand">Asiah</span>
          </div>
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand/20 text-brand md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-brand"></span>
            <span className="block h-0.5 w-5 bg-brand"></span>
            <span className="block h-0.5 w-5 bg-brand"></span>
          </div>
        </button>

        <nav
          className={`${open ? "flex" : "hidden"
            } absolute left-0 top-full w-full flex-col gap-4 border-b border-neutral-100 bg-white px-4 py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-none md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${active ? "text-brand" : "text-muted hover:text-brand"
                  }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={siteConfig.whatsappLink}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-btn px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-btn-dark"
            aria-label="Hubungi kami via WhatsApp"
          >
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </header>
  );
}
