import { useRef } from "preact/hooks";

export default function PlaceFilter({
  places,
  selectedPlace,
}: {
  places: string[];
  selectedPlace?: string;
}) {
  const form = useRef(null);
  // @ts-ignore: proper typing needed for the ref
  const onChange = () => form.current && form.current.submit();
  return (
    <form ref={form} method="GET" className="rounded-xl">
      <select
        className="py-2 px-4 rounded-xl hover:cursor-pointer bg-green-50"
        name="place"
        onChange={onChange}
      >
        {places.map((place) => (
          <option
            value={place.toLowerCase()}
            selected={place.toLowerCase() === selectedPlace}
          >
            {place}
          </option>
        ))}
      </select>
    </form>
  );
}
