import { Article } from "../data/models.ts";
import Meta from "./meta.tsx";
import Related from "./related.tsx";
import Title from "./title.tsx";

export default function Card({
  url,
  title,
  excerpt,
  published_at,
  tags,
  places,
}: Article) {
  return (
    <div className="min-w(full md:[33%] lg:[25%]) max-w-[50%] ring(1 green(50 hover:200)) hover:shadow-sm rounded p(2 md:4) flex-1 flex flex-col">
      <Title url={url} title={title} />
      <p className="font-light mb-1.5">{excerpt}</p>
      <Meta
        published_at={new Date(published_at).toDateString()}
        source="Lonely Planet"
      />
      <Related tags={tags} places={places} />
    </div>
  );
}
