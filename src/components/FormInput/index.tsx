import { FC } from "react";
import { Label } from "../ui/label";

interface indexProps {
	children: React.ReactNode;
	label: string;
	name: string;
}

const FormInput: FC<indexProps> = ({ children, label, name }) => {
	return (
		<div className="grid w-[100%] max-w-sm items-center gap-3">
			<Label htmlFor={name}>{label}</Label>
			{children}
		</div>
	);
};

export default FormInput;
