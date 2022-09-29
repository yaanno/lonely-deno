export default function Title({ url, title }: { url: string; title: string }) {
  return (
    <h2 className="text-2xl mb-1.5">
      <a target="_blank" className="text-green-800 hover:underline" href={url}>
        {title}
      </a>
    </h2>
  );
}
