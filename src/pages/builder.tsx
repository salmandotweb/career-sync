import Builder from "@/views/builder";
import Head from "next/head";

export default function BuilderPage() {
  return (
    <>
      <Head>
        <title>Career Sync</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>

      <Builder />
    </>
  );
}
