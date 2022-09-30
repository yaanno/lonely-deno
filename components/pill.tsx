import { ComponentChild } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

export default function Pill({
  children,
  classNames = "",
  color,
  type,
}: {
  children: ComponentChild;
  classNames?: string;
  color: string;
  type: string;
}) {
  return (
    <div
      className={`${classNames} bg-${color}-50 hover:bg-${color}-100 rounded-xl py-1 px-2`}
    >
      <a href={`?${type}=${children?.toString().toLowerCase()}`}>{children}</a>
    </div>
  );
}
