import PlaceFilter from "./PlaceFilter.tsx";
import TagFilter from "./TagFilter.tsx";

import { Tag, Place } from "../data/models.ts";

export default function SearchForm({
  tags,
  places,
  selectedPlace,
  selectedTag,
}: {
  tags: Tag[];
  places: Place[];
  selectedPlace?: Place[];
  selectedTag?: Tag[];
}) {
  return (
    <form method="GET" className="flex gap-x-4 flex-wrap justify-between">
      <TagFilter tags={tags} selectedTag={selectedTag} />
      <PlaceFilter places={places} selectedPlace={selectedPlace} />
      <div className="min-w-full flex mb-4 justify-end gap-4">
        <button action="?index" className="rounded bg-red-200 p-2">
          Clear
        </button>
        <button type="submit" className="rounded bg-green-200 p-2">
          Submit
        </button>
      </div>
    </form>
  );
}
