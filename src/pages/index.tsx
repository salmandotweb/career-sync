import Navbar from "@/components/Layout/Navbar";
import Categories from "@/components/Sections/Categories";
import Featured from "@/components/Sections/Featured";
import Hero from "@/components/Sections/Hero";
import HowItWorks from "@/components/Sections/HowItWorks";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Career Sync</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <main className="px-40">
        <Navbar />
        <Hero />
        <HowItWorks />
      </main>
      <Featured />
      <section className="px-40">
        <Categories />
      </section>
    </>
  );
}
