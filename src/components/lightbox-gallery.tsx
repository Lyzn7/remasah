"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
};

type Props = {
  items: GalleryItem[];
};

export function LightboxGallery({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item, idx) => (
          <button
            key={item.src}
            onClick={() => setOpenIndex(idx)}
            className="group relative h-36 overflow-hidden rounded-2xl ring-1 ring-neutral-100"
            aria-label={`Buka foto ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 200px, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-6 top-6 text-3xl leading-none text-white"
            onClick={() => setOpenIndex(null)}
            aria-label="Tutup lightbox"
          >
            ×
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={items[openIndex].src}
              alt={items[openIndex].alt}
              fill
              sizes="(min-width: 1024px) 800px, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
