import { Button } from "@/components/ui/button";
import { FC } from "react";

interface indexProps {}

const Hero: FC<indexProps> = ({}) => {
	return (
		<div className="min-h-[60vh] flex flex-col items-center justify-center">
			<div className="flex items-center flex-col justify-center leading-loose">
				<p className="mt-4 text-lg text-center text-gray-600 font-normal mb-1">
					Ultimate guide to successful landing on jobs
				</p>
				<h1 className="text-4xl text-center text-gray-800 tracking-wider font-bold">
					Resume/CV letter builder
				</h1>
				<p className="mt-4 text-lg text-center text-gray-400 font-light">
					For young starters, professionals, freelancers, and all levels of
					experience
				</p>
				<Button variant="outline" className="mt-8">
					View All Templates
				</Button>
			</div>
			<div></div>
		</div>
	);
};

export default Hero;
