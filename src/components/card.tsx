import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-card p-6 shadow-soft ring-1 ring-neutral-200 border border-neutral-200/80",
        className,
      )}
    >
      {children}
    </div>
  );
}
