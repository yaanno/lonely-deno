import * as Icon from "@geist-ui/icons";

export default function Title({ url, title }: { url: string; title: string }) {
  return (
    <h2 className="text-2xl mb-1.5">
      <a
        target="_blank"
        className="text-green(600 hover:800) hover:(underline) flex gap-x-1"
        href={url}
      >
        <span className="flex-1">{title}</span>
        <span className="hover:animate-pulse">
          <Icon.ExternalLink />
        </span>
      </a>
    </h2>
  );
}
