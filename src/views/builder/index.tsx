import { Menu } from "@/views/builder/components/Menu";
import { FC } from "react";
import { Sidebar } from "./components/Sidebar";

interface indexProps {}

const Builder: FC<indexProps> = ({}) => {
	return (
		<>
			<div className="hidden md:block">
				<Menu />
				<div className="border-t">
					<div className="bg-background">
						<div className="grid lg:grid-cols-5">
							<Sidebar className="hidden lg:block" />
							<div className="col-span-3 lg:col-span-4 lg:border-l"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Builder;
