# Fun with fresh & deno

SSR of a list of "articles" from a static `json` datasource just for fun.
Checking out the `islands` concept.

### Usage

Get Deno & Fresh first:

```
brew install deno
```

Start the project in `dev` mode:

```
deno task start
```

This will watch the project directory and restart as necessary.

Start the project in `build` mode:

```
deno task serve
```

This will disable the watch function and simply serve the latest "build". In
reality just loads the latest project files (super fast) in SSR mode.

### TODO

- proper composed filtering
- normalled data
