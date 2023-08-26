import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

interface indexProps {}

const Hero: FC<indexProps> = ({}) => {
	return (
		<div className="min-h-[60vh] flex flex-col items-center justify-center relative mt-16">
			<div className="flex items-center flex-col justify-center leading-loose">
				<p className="mt-4 text-lg text-center text-gray-600 font-normal">
					Ultimate guide to successful landing on jobs
				</p>
				<h1 className="text-center text-gray-800 font-bold my-3 text-5xl">
					Your Dream Job Is Just A <span>Resume</span> Away
				</h1>
				<p className="text-center text-gray-400 text-base font-normal">
					For young starters, professionals, freelancers, and all levels of
					experience
				</p>
				<Button variant="outline" className="mt-4">
					View All Templates
				</Button>
			</div>
			<div className="mt-8 relative rounded-lg overflow-hidden w-[1200px] h-[800px]">
				<Image
					src="/images/hero.png"
					fill
					objectFit="contain"
					alt="CareerSync"
				/>
			</div>
		</div>
	);
};

export default Hero;
