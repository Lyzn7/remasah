"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  primary?: string;
  secondary?: string;
};

export function LoadingOverlay({
  primary = "/remasah.gif",
  secondary = "/lyzn-dev.gif",
}: Props) {
  const [visible, setVisible] = useState(true);
  const timeoutMs = 3000;

  useEffect(() => {
    // Hide after load or max timeoutMs
    const timer = setTimeout(() => setVisible(false), timeoutMs);
    return () => clearTimeout(timer);
  }, [timeoutMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      <div className="flex items-center gap-4">
        <div className="relative h-36 w-36 overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 shadow-lg">
          <Image
            src={secondary}
            alt="Loading animation secondary"
            fill
            sizes="144px"
            className="object-cover"
            priority
          />
        </div>
        <span className="text-3xl font-black text-neutral-400 select-none">×</span>
        <div className="relative h-36 w-36 overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 shadow-lg">
          <Image
            src={primary}
            alt="Loading animation"
            fill
            sizes="144px"
            className="object-cover"
            priority
            onLoadingComplete={() => {
              // once primary finishes loading, fade out soon
              setTimeout(() => setVisible(false), 1200);
            }}
          />
        </div>
      </div>
    </div>
  );
}
