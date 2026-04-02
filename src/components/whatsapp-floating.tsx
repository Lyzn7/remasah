import Link from "next/link";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={siteConfig.whatsappLink}
      target="_blank"
      aria-label="Hubungi via WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition hover:-translate-y-1 hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2"
    >
      <span className="relative h-7 w-7">
        <Image src="/icons/whatsapp.svg" alt="WhatsApp" fill sizes="28px" />
      </span>
    </Link>
  );
}
