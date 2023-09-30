import { FC } from "react";
import { cn } from "@/lib/utils";

interface indexProps {
	children: React.ReactNode;
	className?: string;
}

const SectionWrapper: FC<indexProps> = (props) => {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center gap-4 text-center min-h-[50vh]",
				props.className
			)}>
			{props.children}
		</div>
	);
};

export default SectionWrapper;
