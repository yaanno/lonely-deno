import Pill from "./pill.tsx";

export default function Related({
  tags,
  places,
}: {
  tags?: string[] | null;
  places?: string[] | null;
}) {
  return (
    <div className="mt-2">
      {tags?.length ? (
        <div className="flex flex-wrap w-full gap-1 mb-1.5 mt-4">
          {tags?.map((tag) => (
            <Pill color="green" type="tag">
              {tag}
            </Pill>
          ))}
        </div>
      ) : null}
      {places?.length ? (
        <div className="flex flex-wrap w-full gap-1 mb-1.5">
          {places?.map((place) => (
            <Pill color="red" type="place">
              {place}
            </Pill>
          ))}
        </div>
      ) : null}
    </div>
  );
}
