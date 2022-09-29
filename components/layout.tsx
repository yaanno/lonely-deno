import { ComponentChildren } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <div className="w-full h-full min-h-screen bg-green-200 flex flex-col items-center gap-y-4 py-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl">
        <a href="/">Latest on Lonely Planet</a>
      </h1>
      <div className="max-w-screen-xl mx-4">{children}</div>
      <footer className="max-w-screen-xl py-4 w-full flex gap-x-8 items-center px-8"></footer>
    </div>
  );
}
