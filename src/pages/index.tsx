import Navbar from "@/components/Layout/Navbar";
import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Career Sync</title>
				<meta name="description" content="Single Page Resume Builder" />
				<link rel="icon" type="image/png" href="favicon.png" />
			</Head>
			<div className="px-24">
				<Navbar />
				<Hero />
				<Features />
			</div>
		</>
	);
}
