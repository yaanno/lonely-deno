import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Fresh articles in travel from Lonely Planet"
        />
        <title>Latest on Lonely Planet</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <props.Component />
    </>
  );
}
