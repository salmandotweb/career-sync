import { cn } from "@/lib/utils";
import { useState } from "react";
import { headers } from "../Editor";
import EditSection from "../Editor/EditSection";
import EditHeaders from "../Editor/EditHeaders";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
	const [link, setLink] = useState("");
	const section = headers[link];

	const linkClickHandler = (link: string) => {
		setLink(link);
	};

	const displayElement = link ? (
		<EditSection section={section} onLinkClick={linkClickHandler} />
	) : (
		<EditHeaders onLinkClick={linkClickHandler} />
	);

	return (
		<div className={cn("pb-0", className)}>
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<div className="py-5 flex items-center mb-4 rounded-sm bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
						<h2 className="px-4 font-semibold tracking-tight text-2xl text-white">
							Primsa
						</h2>
					</div>
					<div className="space-y-1">{displayElement}</div>
				</div>
			</div>
		</div>
	);
}
