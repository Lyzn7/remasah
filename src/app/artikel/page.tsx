import { ArticleCard } from "@/components/article-card";
import { Section } from "@/components/section";
import { getArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export const generateMetadata = () =>
  buildMetadata({
    title: "Artikel",
    description: "Kumpulan artikel dan catatan kegiatan Remaja Masjid Asiah.",
    canonicalPath: "/artikel",
  });

export default function ArtikelPage() {
  const articles = getArticles();
  const articleGridClass =
    articles.length <= 1
      ? "grid gap-6"
      : articles.length === 2
        ? "grid gap-6 md:grid-cols-2"
        : "grid gap-6 md:grid-cols-3";

  return (
    <div className="bg-background text-foreground">
      <Section title="Artikel" subtitle="Belajar & berbagi insight">
        <div className={articleGridClass}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>
    </div>
  );
}
