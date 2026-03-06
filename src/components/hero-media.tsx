"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  className?: string;
  videoSrc?: string;
  fallbackSrc?: string;
  alt: string;
};

export function HeroMedia({
  className = "",
  videoSrc = "/animasion.mp4",
  fallbackSrc = "/images/Remasah.png",
  alt,
}: Props) {
  const [showFallback, setShowFallback] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay when video is present
  useEffect(() => {
    if (!showFallback && videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay blocked, fallback to image
        setShowFallback(true);
      });
    }
  }, [showFallback]);

  const restartWithSound = () => {
    setMuted(false);
    setShowFallback(false);
    // allow React to render video before playing
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        setShowFallback(true);
      });
    });
  };

  return (
    <div className={`relative aspect-square overflow-hidden rounded-[28px] ${className}`}>
      {!showFallback ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted={muted}
          playsInline
          poster={fallbackSrc}
          onEnded={() => setShowFallback(true)}
          onError={() => setShowFallback(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <button
          type="button"
          className="absolute inset-0 h-full w-full"
          onClick={restartWithSound}
          aria-label="Putar video dengan suara"
        >
          <Image
            src={fallbackSrc}
            alt={alt}
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
            priority
          />
        </button>
      )}
    </div>
  );
}
