import { ComponentChild } from "preact";

import * as Icon from "@geist-ui/icons";

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
      className={`${classNames} bg-${color}-50 hover:bg-${color}-100 rounded-xl py-1 px-2 flex items-baseline`}
    >
      {type === "tag" ? <Icon.Hash size={12} /> : <Icon.Globe size={12} />}

      <a
        className="pl-1"
        href={`?${type}=${children?.toString().toLowerCase()}`}
      >
        {children}
      </a>
    </div>
  );
}
