import { Menu } from "@/views/builder/components/Menu";
import { FC } from "react";
import { Sidebar } from "./components/Sidebar";
import Prisma from "@/templates/Prisma";

interface indexProps {}

const Builder: FC<indexProps> = ({}) => {
	return (
		<>
			<div className="hidden md:block max-h-screen overflow-hidden">
				<Menu />
				<div className="border-t">
					<div className="grid lg:grid-cols-5">
						<Sidebar className="hidden lg:block" />
						<div className="col-span-3 lg:col-span-4 lg:border-l flex items-start justify-center p-6 w-full max-h-screen overflow-y-scroll">
							<Prisma />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Builder;
