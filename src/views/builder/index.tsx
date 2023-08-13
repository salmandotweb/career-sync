import { Menu } from "@/views/builder/components/Menu";
import { FC } from "react";
import { Sidebar } from "./components/Sidebar";
import { useAppSelector } from "@/stores/hooks";
import { AVAILABLE_TEMPLATES } from "@/lib/availableTemplates";
import { selectTemplate } from "@/stores/slices/templates/templateSlice";

const Builder: FC = () => {
	const templateId = useAppSelector(selectTemplate).id;
	const Template = AVAILABLE_TEMPLATES[templateId].component;

	return (
		<div className="flex flex-col h-screen">
			<Menu />
			<main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
				<aside className="w-[25vw] min-w-[20rem] print:hidden border-r-2">
					<Sidebar />
				</aside>
				<div className="flex flex-col flex-1 justify-center">
					<div className="overflow-auto no-scrollbar">
						<div className="mx-5 print:mx-0 print:mb-0">
							<div className="w-[210mm] h-[297mm] my-0 mx-auto">
								{Template && <Template />}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Builder;
