import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { getArticle, getArticles } from "@/lib/articles";
import { formatDate } from "@/lib/date";
import { siteConfig } from "@/lib/site";

type Params = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Params) {
  const { slug } = params;
  const article = await getArticle(slug);
  if (!article) return notFound();
  return buildMetadata({
    title: article.title,
    description: article.description,
    canonicalPath: `/artikel/${slug}`,
    images: [{ url: `${siteConfig.url}${article.cover}`, alt: article.title }],
  });
}

export default async function ArticleDetail({ params }: Params) {
  const { slug } = params;
  const article = await getArticle(slug);
  if (!article) return notFound();

  const allArticles = getArticles();
  const currentIndex = allArticles.findIndex((a) => a.slug === slug);
  const prev = allArticles[currentIndex + 1];
  const next = allArticles[currentIndex - 1];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.cover}`,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/Remasah.png`,
      },
    },
  };

  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Artikel", href: "/artikel" },
              { label: article.title },
            ]}
          />
          <h1 className="mt-4 text-3xl font-bold">{article.title}</h1>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted">
            <span>{formatDate(article.date)}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <span>{article.author}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <span>{article.readingTime} menit baca</span>
          </div>
          <div className="relative mt-6 h-80 overflow-hidden rounded-2xl ring-1 ring-neutral-100">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="(min-width: 768px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-10 text-lg leading-8 text-foreground md:px-6">
        <div
          className="[&>h2]:mt-6 [&>h2]:text-2xl [&>h3]:mt-4 [&>h3]:text-xl [&>p]:mb-4 [&>p]:text-base [&>ul]:ml-5 [&>ul]:list-disc [&>ul]:text-base"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>

      <div className="mx-auto flex max-w-4xl flex-wrap gap-3 px-4 pb-10 text-sm text-muted md:px-6">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-brand-light px-3 py-1 text-brand-dark">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 pb-14 md:px-6">
        <div>
          {prev && (
            <a href={`/artikel/${prev.slug}`} className="text-sm text-brand hover:underline">
              ← {prev.title}
            </a>
          )}
        </div>
        <div>
          {next && (
            <a href={`/artikel/${next.slug}`} className="text-sm text-brand hover:underline">
              {next.title} →
            </a>
          )}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </div>
  );
}
