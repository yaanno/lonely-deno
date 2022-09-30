import { Handlers, PageProps } from "$fresh/server.ts";

import Card from "../components/card.tsx";
import Layout from "../components/layout.tsx";

import { Article } from "../data/models.ts";
import db from "../data/models.ts";

export type ArticleCondensed = Omit<Article, "type" | "slug" | "categories">;

interface Data {
  results: ArticleCondensed[];
  order: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const order = url.searchParams.get("order") || "desc";
    const tag = url.searchParams.get("tag");
    const place = url.searchParams.get("place");
    let results;
    if (tag) {
      results = await db.getByTag(tag);
    } else if (place) {
      results = await db.getByPlace(place);
    } else {
      results = await db.getLatest(order);
    }
    return await ctx.render({ results, order });
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
