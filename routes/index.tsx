import { Handlers, PageProps } from "$fresh/server.ts";

import Card from "../components/card.tsx";
import Layout from "../components/layout.tsx";

import articleData from "../data/articles.json" assert { type: "json" };

interface Article {
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
  categories: string[];
  type: string;
  url: string;
  published_at: string;
  related_place_names: string[] | null;
  related_place_slugs: string[] | null;
}

export type ArticleCondensed = Omit<Article, "type" | "slug" | "categories">;

interface Data {
  results: ArticleCondensed[];
  query: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("order") || "desc";
    const sorted = articleData.sort((a1, a2) => {
      if (query === "asc") {
        return Date.parse(a1.published_at) - Date.parse(a2.published_at);
      }
      return Date.parse(a2.published_at) - Date.parse(a1.published_at);
    });
    const results = sorted.slice(0, 10);
    return await ctx.render({ results, query });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { results } = data;
  return (
    <Layout>
      <div className="flex flex-wrap w-full p-6 bg-white gap-4 rounded-xl">
        {results.map((article) => (
          <Card {...article} />
        ))}
      </div>
    </Layout>
  );
}
