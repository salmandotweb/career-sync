import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";

const trendingSearches = [
	{
		name: "Remote Job",
	},
	{
		name: "Frontend Developer",
	},
	{
		name: "Backend Developer",
	},
	{
		name: "Fullstack Developer",
	},
	{
		name: "UI/UX Designer",
	},
];

const Hero = () => {
	return (
		<div className="min-h-[70vh] text-center flex flex-col items-center justify-center">
			<div className="flex flex-col gap-6 items-center justify-center">
				<h1 className="text-[70px] font-bold leading-[80px]">
					The home to get your <br />
					dream job
				</h1>
				<p className="font-[18px]">
					You do not have the right to remain silent… let us know <br /> what it
					takes to challenge you
				</p>
				<Button>
					<Link href="/builder">Get Started</Link>
				</Button>
			</div>

			<div className="flex flex-col items-center justify-center gap-6 mt-[100px]">
				<h1 className="text-[20px] font-bold">Trending searches</h1>
				<div className="flex flex-wrap items-center gap-6">
					{trendingSearches.map((search, index) => (
						<Badge variant="outline" className="rounded-full py-2 px-4">
							<Link href="/builder">{search.name}</Link>
						</Badge>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
