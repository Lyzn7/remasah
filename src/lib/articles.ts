import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { readingTimeMinutes } from "./date";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  author: string;
  readingTime: number;
};

export type Article = ArticleMeta & {
  contentHtml: string;
};

const articlesDir = path.join(process.cwd(), "content", "articles");

export function getArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDir).filter((file) => file.endsWith(".md"));
  const articles = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(articlesDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      tags: (data.tags as string[]) ?? [],
      cover: data.cover as string,
      author: data.author as string,
      readingTime: readingTimeMinutes(content),
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getArticle(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    cover: data.cover as string,
    author: data.author as string,
    readingTime: readingTimeMinutes(content),
    contentHtml,
  };
}
