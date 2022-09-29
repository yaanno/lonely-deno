import { ArticleCondensed } from "../routes/index.tsx";
import Meta from "./meta.tsx";
import Related from "./related.tsx";
import Title from "./title.tsx";

export default function Card({
  url,
  title,
  excerpt,
  published_at,
  tags,
  related_place_names,
}: ArticleCondensed) {
  return (
    <div className="flex-1 min-w-full md:min-w-[25%] max-w-[50%] md:first-of-type:min-w-[50%] rounded-2xl ring-1 ring-green-100 hover:ring-green-300 p-4 flex flex-col">
      <Title url={url} title={title} />
      <p className="font-light mb-1.5">{excerpt}</p>
      <Meta
        published_at={new Date(published_at).toDateString()}
        source="Lonely Planet"
      />
      <Related tags={tags} places={related_place_names} />
    </div>
  );
}
