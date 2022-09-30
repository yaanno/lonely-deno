import { useRef } from "preact/hooks";

export default function TagFilter({
  tags,
  selectedTag,
}: {
  tags: string[];
  selectedTag?: string;
}) {
  const form = useRef(null);
  // @ts-ignore: proper typing needed for the ref
  const onChange = () => form.current && form.current.submit();
  return (
    <form ref={form} method="GET" className="rounded-xl">
      <select
        className="py-2 px-4 rounded-xl hover:cursor-pointer bg-green-50"
        name="tag"
        onChange={onChange}
      >
        {tags.map((tag) => (
          <option value={tag} selected={tag === selectedTag}>
            {tag}
          </option>
        ))}
      </select>
    </form>
  );
}
