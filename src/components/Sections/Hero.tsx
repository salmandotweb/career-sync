import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import FancyText from "../FancyText";

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
		<div className="min-h-[70vh] text-center flex flex-col items-center justify-center relative">
			<div className="flex flex-col gap-6 items-center justify-center">
				<h1 className="text-[70px] font-bold leading-[80px]">
					The home to get your <br />
					<FancyText text="dream" underlineText="job" />
				</h1>
				<p className="font-[18px]">
					Reshape Your Future: Effortless Resumes, Boundless Opportunities
				</p>
				<div className="flex w-full max-w-md items-center space-x-2">
					<div className="relative w-80">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<Input
							type="text"
							placeholder="Job title or keyword"
							className="pl-12 pr-4"
						/>
					</div>
					<Button type="submit">Search</Button>
				</div>
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
