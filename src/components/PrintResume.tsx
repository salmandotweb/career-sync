import { useEffect } from "react";
import { Button } from "./ui/button";

export const PrintResume = () => {
	useEffect(() => {
		globalThis?.addEventListener("beforeprint", () => {
			globalThis.document.title = `Resume_Builder_${Date.now()}`;
		});

		globalThis?.addEventListener("afterprint", () => {
			globalThis.document.title = "Single Page Resume Builder";
		});
	}, []);

	return (
		<Button onClick={globalThis?.print} variant="ghost">
			Download as PDF
		</Button>
	);
};
