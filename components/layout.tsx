import { ComponentChildren } from "preact";

import * as Icon from "@geist-ui/icons";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <div className="w-full h-full min-h-screen bg-green-400 flex flex-col items-center gap-y-8 py-4">
      <h1 className="text(2xl sm:4xl md:5xl lg:6xl)">
        <a className="inline-flex items-center gap-x-1" href="/">
          Latest on Lonely <Icon.Globe size={40} /> Planet
        </a>
      </h1>
      <div className="max-w-screen-xl w-full px-4">{children}</div>
      <footer className="max-w-screen-xl py-4 w-full flex gap-x-8 items-center px-8"></footer>
    </div>
  );
}
