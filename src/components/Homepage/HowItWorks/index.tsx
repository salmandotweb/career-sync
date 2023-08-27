import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface indexProps {}

const HowItWorks: FC<indexProps> = ({}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-6 mt-28">
			<p className="mt-4 text-lg text-center text-gray-600 font-normal">
				How It Works
			</p>
			<h1 className="text-center text-gray-800 font-bold my-3 text-5xl">
				Simple <span>3</span> Step Process To Get Started
			</h1>

			<div className="flex flex-col items-center justify-center mt-20 max-w-5xl gap-10">
				<Step
					title="Step 1. Choose"
					description="Choose the best plan for you and your team. We have a plan for every budget."
					image="/images/hero.png"
				/>
				<Step
					title="Step 2. Customize"
					description="Replace with your own information and personalize as much as you want."
					image="/images/hero.png"
					reverse
				/>
				<Step
					title="Step 3. Download"
					description="Hassle free downloads. Download your resume in one click."
					image="/images/hero.png"
					button
				/>
			</div>
		</div>
	);
};

export default HowItWorks;

const Step = ({
	title,
	description,
	image,
	reverse = false,
	button = false,
}: {
	title: string;
	description: string;
	image: StaticImageData | string;
	reverse?: boolean;
	button?: boolean;
}) => {
	return (
		<div
			className={`flex items-center justify-between gap-4 w-full ${
				reverse ? "flex-row-reverse" : "flex-row"
			}`}>
			<div className="flex flex-col items-start justify-start gap-4">
				<h1 className="text-gray-800 font-bold text-4xl">{title}</h1>
				<p className="text-gray-600 font-normal">{description}</p>
				{button && (
					<Button variant="default" size="lg">
						<Link href="/builder">Get Started</Link>
					</Button>
				)}
			</div>

			<div className="flex items-center justify-center">
				<Image src={image} alt="hero" width={500} height={500} />
			</div>
		</div>
	);
};
