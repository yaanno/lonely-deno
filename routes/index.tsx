import { Handlers, PageProps } from "$fresh/server.ts";

import { Article, Place, Tag } from "../data/models.ts";
import db from "../data/models.ts";

import Card from "../components/card.tsx";
import Layout from "../components/layout.tsx";
import SearchForm from "../islands/SearchForm.tsx";

interface Data {
  results: Article[];
  order?: string;
  tags: Tag[];
  places: Place[];
  selectedTag?: string[];
  selectedPlace?: string[];
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const order = url.searchParams.get("order") || "desc";
    const tag = url.searchParams.getAll("tag");
    const place = url.searchParams.getAll("place");
    const tags = await db.getAllTags();
    const places = await db.getAllPlaces();

    const results = await db.getLatestByMulti(place, tag);

    return await ctx.render({
      results,
      order,
      tags,
      places,
      selectedPlace: place,
      selectedTag: tag,
    });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { results, tags, places, selectedPlace, selectedTag } = data;
  const searchFormProps = { tags, places, selectedPlace, selectedTag };
  return (
    <Layout>
      <div className="w-full my-4">
        <SearchForm {...searchFormProps} />
      </div>
      <div className="flex flex(wrap row) w-full p(2 sm:4) bg-white gap-4 rounded shadow-sm">
        {results.map((article) => (
          <Card {...article} />
        ))}
      </div>
    </Layout>
  );
}
