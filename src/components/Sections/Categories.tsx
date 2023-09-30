import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const data = [
	{
		title: "Design",
		description: "3 Resume Templates",
		icon: "/icons/design.svg",
	},
	{
		title: "Business",
		description: "6 Resume Templates",
		icon: "/icons/business.svg",
	},
	{
		title: "Development",
		description: "11 Resume Templates",
		icon: "/icons/development.svg",
	},
	{
		title: "Communication",
		description: "4 Resume Templates",
		icon: "/icons/communication.svg",
	},
];

const Categories: React.FC = () => {
	return (
		<SectionWrapper className="min-h-[80vh]">
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="uppercase text-[#F57343] font-medium">9+ Jobs Category</p>
				<h1 className="text-[50px] font-bold leading-[80px]">
					Choose by <span className="fancy">category</span>
				</h1>
			</div>
			<div className="flex items-center justify-center gap-8 flex-wrap mt-12">
				{data?.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						description={item.description}
						icon={item.icon}
					/>
				))}
			</div>
		</SectionWrapper>
	);
};

export default Categories;

const Card = ({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: string;
}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-2 w-[250px] px-6 py-10 rounded-md border">
			<div className="mb-6">
				<Image src={icon} width={60} height={60} alt={title} />
			</div>
			<h1 className="text-xl font-semibold">{title}</h1>
			<p className="text-[#6F6F75] text-[15px]">{description}</p>
		</div>
	);
};
