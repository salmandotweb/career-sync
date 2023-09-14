import { FC } from "react";
import { Label } from "../ui/label";

interface indexProps {
	children: React.ReactNode;
	label: string;
	name: string;
	render?: React.ReactNode;
}

const FormInput: FC<indexProps> = ({ children, label, name, render }) => {
	return (
		<div className="grid w-[100%] max-w-sm items-center gap-3">
			<div className="flex items-center justify-between w-full">
				<Label htmlFor={name}>{label}</Label>
				{render}
			</div>
			{children}
		</div>
	);
};

export default FormInput;
