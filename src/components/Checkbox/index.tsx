import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxWithText({
	label,
	id,
	value,
	onChange,
	...props
}: {
	label: string;
	id: string;
	value?: boolean;
	onChange?: (e: any) => void;
}) {
	return (
		<div className="items-top flex space-x-2" {...props}>
			<Checkbox
				id={id}
				checked={value}
				onCheckedChange={(e) => {
					onChange && onChange(e);
				}}
			/>
			<div className="grid gap-1.5 leading-none">
				<label
					htmlFor={id}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
					{label}
				</label>
			</div>
		</div>
	);
}
