import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { ArticleMeta } from "@/lib/articles";

type Props = {
  article: ArticleMeta;
};

export function ArticleCard({ article }: Props) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{formatDate(article.date)}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-neutral-300"></span>
          <span>{article.readingTime} menit baca</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-brand">
          {article.title}
        </h3>
        <p className="text-sm text-muted/90 line-clamp-3">{article.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 text-xs text-brand">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-light px-3 py-1 text-brand-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
