import PillStack from "./pill-stack.tsx";

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
        <PillStack stack={tags} type="tag" classNames="mt-4" />
      ) : null}
      {places?.length ? <PillStack stack={places} type="place" /> : null}
    </div>
  );
}
