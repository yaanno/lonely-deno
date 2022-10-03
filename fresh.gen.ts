// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/PlaceFilter.tsx";
import * as $$1 from "./islands/SearchForm.tsx";
import * as $$2 from "./islands/TagFilter.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/PlaceFilter.tsx": $$0,
    "./islands/SearchForm.tsx": $$1,
    "./islands/TagFilter.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
