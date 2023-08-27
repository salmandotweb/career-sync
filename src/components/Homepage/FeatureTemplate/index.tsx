import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeatureTemplate = () => {
	return (
		<div className="flex items-center justify-center min-h-[50vh] mx-auto max-w-screen-xl mt-22 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
			<div className="flex-1 flex flex-col items-start justify-start gap-3">
				<h1 className="text-4xl font-bold">PRISMA</h1>
				<p className="text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<div className="flex flex-col my-4 gap-3">
					<div className="flex items-center gap-3">
						<div className="h-[8px] w-[8px] rounded-xl bg-black" />
						<p>
							Recommended for applicants with more than 2 years of experience
						</p>
					</div>
					<div className="flex items-center gap-3">
						<div className="h-[8px] w-[8px] rounded-xl bg-black" />
						<p>
							Recommended for applicants with more than 2 years of experience
						</p>
					</div>
					<div className="flex items-center gap-3">
						<div className="h-[8px] w-[8px] rounded-xl bg-black" />
						<p>
							Recommended for applicants with more than 2 years of experience
						</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="default">Customize this template</Button>
					<Button variant="outline">Browse all</Button>
				</div>
			</div>
			<div className="flex-1 flex items-center justify-end">
				<Image
					src="/images/featureTemplate.png"
					width={1000}
					height={500}
					alt="Feature Template"
				/>
			</div>
		</div>
	);
};

export default FeatureTemplate;
