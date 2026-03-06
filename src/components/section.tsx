import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={clsx("py-14 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {(title || subtitle) && (
          <header className="mb-8 space-y-2 text-center">
            {subtitle && <p className="text-sm font-semibold text-brand">{subtitle}</p>}
            {title && (
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
