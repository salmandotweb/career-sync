import { Button } from "@/components/ui/button";

const Pricing = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-10 mt-14">
			<h1 className="text-3xl font-bold text-gray-900">
				How much you have to pay?
			</h1>
			<div className="flex flex-col items-center gap-7">
				<h1 className="text-6xl font-bold text-gray-900">
					Nothing, it's free! 🎉
				</h1>
				<Button variant="default">Get Started</Button>
			</div>
		</div>
	);
};

export default Pricing;
