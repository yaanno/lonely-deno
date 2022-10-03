import { useState } from "preact/hooks";
import PillStack from "../components/pill-stack.tsx";

export default function PlaceFilter({
  places,
  selectedPlace,
}: {
  places: string[];
  selectedPlace?: string[];
}) {
  const [localPlaces, setTags] = useState(places);
  const [localSelected, setSelectedPlaces] = useState(selectedPlace);

  const onInput = (e: Partial<InputEvent>) => {
    const exp = (e.target as HTMLInputElement).value;
    const filter = new RegExp(exp, "i");
    const filteredTags = places.filter((place) => filter.test(place));
    setTags(filteredTags);
  };

  const onSelect = (e: Partial<InputEvent>) => {
    const places = Array.from((e.target as HTMLSelectElement).selectedOptions);
    setSelectedPlaces(places.map((place) => place.value));
  };
  return (
    <div className="flex flex-col gap-y-1 w-full flex-1">
      <input
        className="p-2 rounded"
        type="text"
        onInput={onInput}
        placeholder="Search places"
      />
      <select
        className="hover:cursor-pointer p-2"
        multiple
        name="place"
        onChange={onSelect}
      >
        {localPlaces.map((place) => (
          <option
            className="p-2 hover:bg-gray-100 "
            value={place.toLowerCase()}
            selected={selectedPlace?.includes(place.toLowerCase())}
          >
            {place}
          </option>
        ))}
      </select>
      {localSelected ? (
        <PillStack stack={localSelected} type="tag" classNames="mt-2" />
      ) : null}
    </div>
  );
}
