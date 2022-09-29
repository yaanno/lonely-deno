import { ComponentChildren } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";
import { useState } from "preact/hooks";

export default function Pill({
  children,
  classNames = "",
  color,
}: {
  children: ComponentChildren;
  classNames?: string;
  color: string;
}) {
  const [click, clickHandler] = useState(null);
  return (
    <div
      className={`${classNames} bg-${color}-50 hover:bg-${color}-100 rounded-xl py-1 px-2`}
    >
      <a href="#" onClick={(e) => console.log(e)}>
        {children}
      </a>
    </div>
  );
}
