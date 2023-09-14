import { FC, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { useAppSelector } from "@/stores/hooks";
import { AVAILABLE_TEMPLATES } from "@/lib/availableTemplates";
import { selectTemplate } from "@/stores/slices/templates/templateSlice";
import { Menu } from "./components/Menu";

import { Plus_Jakarta_Sans } from "@next/font/google";

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin-ext"],
	variable: "--font-jakarta",
});

const Builder: FC = () => {
	const templateId = useAppSelector(selectTemplate).id;
	const Template = AVAILABLE_TEMPLATES[templateId].component;

	return (
		<div className="flex flex-col h-screen">
			<Menu />
			<main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
				<aside className="w-[420px] print:hidden border-r-2">
					<Sidebar selectedTemplate={templateId} />
				</aside>
				<div
					className={`${jakarta.variable} font-jakarta flex flex-col flex-1 justify-center`}>
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
