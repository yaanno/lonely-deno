import { Handlers, PageProps } from "$fresh/server.ts";

import { Article, Place, Tag } from "../data/models.ts";
import db from "../data/models.ts";

import Card from "../components/card.tsx";
import Layout from "../components/layout.tsx";
import TagFilter from "../islands/TagFilter.tsx";
import PlaceFilter from "../islands/PlaceFilter.tsx";

interface Data {
  results: Article[];
  order?: string;
  tags: Tag[];
  places: Place[];
  selectedTag?: string;
  selectedPlace?: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const order = url.searchParams.get("order") || "desc";
    const tag = url.searchParams.get("tag");
    const place = url.searchParams.get("place");

    const tags = await db.getAllTags();
    const places = await db.getAllPlaces();

    let results: Article[];

    if (tag && !place) {
      results = await db.getByTag(tag);
    } else if (place && !tag) {
      results = await db.getByPlace(place);
    } else if (tag && place) {
      results = await db.getLatestByMulti(place, tag);
    } else {
      results = await db.getLatest(order);
    }

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
  return (
    <Layout>
      <div className="flex flex-wrap w-full p-2 gap-4 rounded-xl">
        <TagFilter tags={tags} selectedTag={selectedTag} />
        <PlaceFilter places={places} selectedPlace={selectedPlace} />
      </div>
      <div className="flex flex-wrap w-full p-6 bg-white gap-4 rounded-xl">
        {results.map((article) => (
          <Card {...article} />
        ))}
      </div>
    </Layout>
  );
}
