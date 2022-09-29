export default function Meta({
  published_at,
  source,
}: {
  published_at: string;
  source: string;
}) {
  return (
    <p className="font-light mb-1.5">
      <span className="italic">{published_at}</span> |{" "}
      <span className="font-bold">{source}</span>
    </p>
  );
}
