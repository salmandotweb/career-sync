import { Button } from "../ui/button";

import { useEffect } from "react";

const PrintResume = () => {
	useEffect(() => {
		globalThis?.addEventListener("beforeprint", () => {
			globalThis.document.title = `CareerSync_${Date.now()}`;
		});

		globalThis?.addEventListener("afterprint", () => {
			globalThis.document.title = "CareerSync";
		});
	}, []);
	return (
		<Button onClick={globalThis?.print} variant="default" size="sm">
			Download as PDF
		</Button>
	);
};

export default PrintResume;
