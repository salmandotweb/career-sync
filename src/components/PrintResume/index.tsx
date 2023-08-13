import { Button } from "../ui/button";

const generatePDF = () => {};

const PrintResume = () => {
	return (
		<Button onClick={generatePDF} variant="ghost">
			Download as PDF
		</Button>
	);
};

export default PrintResume;
