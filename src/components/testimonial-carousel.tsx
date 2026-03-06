"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

export type Testimonial = {
  name: string;
  role: string;
  message: string;
  avatar: string;
};

type Props = {
  items: Testimonial[];
};

export function TestimonialCarousel({ items }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-neutral-100">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-brand/30">
          <Image
            src={items[index].avatar}
            alt={items[index].name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-foreground">{items[index].name}</p>
          <p className="text-sm text-muted">{items[index].role}</p>
        </div>
      </div>
      <p className="mt-4 text-base text-foreground">“{items[index].message}”</p>
      <div className="mt-4 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Lihat testimoni ${i + 1}`}
            className={clsx(
              "h-2 w-6 rounded-full transition",
              i === index ? "bg-brand" : "bg-neutral-200",
            )}
          />
        ))}
      </div>
    </div>
  );
}
