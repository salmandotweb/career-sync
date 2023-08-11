import Head from "next/head";
import Builder from "../views/builder";

export default function Home() {
	return (
		<>
			<Head>
				<title>Career Sync</title>
				<meta name="description" content="Single Page Resume Builder" />
				<link rel="icon" type="image/png" href="/icons/resume-icon.png" />
			</Head>

			<Builder />
		</>
	);
}
