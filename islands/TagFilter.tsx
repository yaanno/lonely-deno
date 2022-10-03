import { useState } from "preact/hooks";
import PillStack from "../components/pill-stack.tsx";

export default function TagFilter({
  tags,
  selectedTag,
}: {
  tags: string[];
  selectedTag?: string[];
}) {
  const [localTags, setTags] = useState(tags);
  const [localSelected, setSelectedTags] = useState(selectedTag);
  const onInput = (e: Partial<InputEvent>) => {
    const exp = (e.target as HTMLInputElement).value;
    const filter = new RegExp(exp, "i");
    const filteredTags = tags.filter((tag) => filter.test(tag));
    setTags(filteredTags);
  };

  const onSelect = (e: Partial<InputEvent>) => {
    const tags = Array.from((e.target as HTMLSelectElement).selectedOptions);
    setSelectedTags(tags.map((tag) => tag.value));
  };

  return (
    <div className="flex flex-col gap-y-1 w-full flex-1">
      <input
        className="p-2 rounded"
        type="text"
        onInput={onInput}
        placeholder="Search tags"
      />
      <select
        multiple
        className="hover:cursor-pointer p-2"
        name="tag"
        onChange={onSelect}
      >
        {localTags.map((tag) => (
          <option
            className="hover:bg-gray-100 p-2"
            value={tag}
            selected={selectedTag?.includes(tag)}
          >
            {tag}
          </option>
        ))}
      </select>
      {localSelected ? (
        <PillStack stack={localSelected} type="tag" classNames="mt-2" />
      ) : null}
    </div>
  );
}
