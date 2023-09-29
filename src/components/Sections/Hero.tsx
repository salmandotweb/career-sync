import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="w-full min-h-[80vh] my-8 bg-gray-900 py-4 px-16 rounded-lg flex items-center justify-between relative overflow-hidden">
			<div className="flex flex-col items-start gap-4 w-[50%]">
				<p className="font-thin text-slate-200">
					Level Up Your Career in Tech with CareerSync: The Ultimate Resume
					Builder
				</p>
				<h1 className="text-5xl text-white">
					Create a jaw-dropping resume effortlessly, customized for tech
					professionals.
				</h1>
				<Link href="/builder">
					<Button
						size="sm"
						className="bg-white text-primary hover:bg-slate-300">
						Build My Resume Now
					</Button>
				</Link>
			</div>
			<div className="flex items-center justify-end w-[50%]">
				<div className="h-[700px] w-[595px] rounded-lg relative">
					<Image
						src="/images/Figmer.png"
						layout="fill"
						objectFit="contain"
						alt="Figmer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
