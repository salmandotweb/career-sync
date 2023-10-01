import FancyText from "../FancyText";

const data = [
	{
		image: "",
		name: "Prisma",
		description:
			"Prisma Resume is a modern resume template. It is a great fit for any type of resume.",
		tags: ["Developer", "Designer"],
	},
	{
		image: "",
		name: "Prisma",
		description:
			"Prisma Resume is a modern resume template. It is a great fit for any type of resume.",
		tags: ["Developer", "Designer"],
	},
	{
		image: "",
		name: "Prisma",
		description:
			"Prisma Resume is a modern resume template. It is a great fit for any type of resume.",
		tags: ["Developer", "Designer"],
	},
	{
		image: "",
		name: "Prisma",
		description:
			"Prisma Resume is a modern resume template. It is a great fit for any type of resume.",
		tags: ["Developer", "Designer"],
	},
	{
		image: "",
		name: "Prisma",
		description:
			"Prisma Resume is a modern resume template. It is a great fit for any type of resume.",
		tags: ["Developer", "Designer"],
	},
	{
		image: "",
		name: "Prisma",
		description:
			"Prisma Resume is a modern resume template. It is a great fit for any type of resume.",
		tags: ["Developer", "Designer"],
	},
];

const Featured: React.FC = () => {
	return (
		<div className="bg-[#F6F9FF] min-h-screen w-full my-[100px] py-[100px] px-[200px] flex flex-col items-start gap-8">
			<div className="flex flex-col items-start gap-2">
				<p className="uppercase text-[#864BD8] font-semibold">
					Best of the best
				</p>
				<h1 className="text-5xl font-bold">Featured</h1>
			</div>

			<div className="flex items-center justify-start gap-12 flex-wrap">
				{data?.map((item, index) => (
					<div
						key={index}
						className="bg-white w-[330px] min-h-[320px] rounded-lg overflow-hidden border">
						<div className="w-full h-[200px] bg-gradient-to-r from-[#864BD8] to-[#C01C8A]"></div>
						<div className="flex flex-col items-start gap-2 p-4">
							<h1 className="font-semibold text-[20px]">{item.name}</h1>
							<p className="text-[#6B7280]">{item.description}</p>
							<div className="flex items-center gap-2">
								{item.tags?.map((tag, index) => (
									<p key={index}>
										<span className="text-[#864BD8] font-medium text-[14px]">
											{tag}
										</span>
									</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Featured;
