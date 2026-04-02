import Link from "next/link";
import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  ariaLabel?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
};

export function CTAButton({
  href,
  children,
  variant = "solid",
  ariaLabel,
  target,
  rel,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const styles =
    variant === "solid"
      ? "bg-btn text-white hover:bg-btn-dark shadow-soft"
      : "border border-brand/50 bg-white text-brand hover:border-brand hover:bg-brand-light/70";

  return (
    <Link
      href={href}
      className={clsx(base, styles)}
      aria-label={ariaLabel}
      target={target}
      rel={target === "_blank" ? rel ?? "noreferrer" : rel}
    >
      {children}
    </Link>
  );
}
