import { motion } from "framer-motion";
import { headers } from ".";
import { Separator } from "@/components/ui/separator";

const animation = {
	initial: { x: -25, opacity: 0 },
	animate: { x: 0, opacity: 1 },
};

const EditHeaders = ({
	onLinkClick,
	selectedTemplate,
}: {
	onLinkClick: (link: string) => void;
	selectedTemplate: string;
}) => {
	return (
		<motion.div initial={animation.initial} animate={animation.animate}>
			{Object.entries(headers).map(([link, { title, templates }]) => {
				if (templates.includes(selectedTemplate)) {
					return (
						<a
							onClick={() => onLinkClick(link)}
							key={title}
							className="cursor-pointer">
							<div className="flex items-center justify-start px-4 py-4 space-x-2 rounded-md hover:bg-gray-100">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path>
								</svg>
								<span className="text-lg font-semibold">{title}</span>
							</div>
							<Separator />
						</a>
					);
				}
				return null;
			})}
		</motion.div>
	);
};

export default EditHeaders;
