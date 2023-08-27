import Hero from "@/components/Homepage/Hero";
import HowItWorks from "@/components/Homepage/HowItWorks";
import Testimonials from "@/components/Homepage/Testimonial";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Career Sync</title>
				<meta name="description" content="Single Page Resume Builder" />
				<link rel="icon" type="image/png" href="favicon.png" />
			</Head>

			<Navbar />
			<Hero />
			<HowItWorks />
			<Testimonials />
		</>
	);
}
