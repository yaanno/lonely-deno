import { UnknownPageProps } from "$fresh/server.ts";
import Layout from "../components/layout.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Layout>
      <p>404 not found: {url.pathname}</p>
    </Layout>
  );
}
