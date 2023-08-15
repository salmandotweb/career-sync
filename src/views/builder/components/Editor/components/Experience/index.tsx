import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
	selectExperience,
	updateExperience,
} from "@/stores/slices/experiences/experienceSlice";

const EditExperience = () => {
	const experience = useAppSelector(selectExperience);
	const dispatch = useAppDispatch();

	const experience1 = experience[0];
	const experience2 = experience[1];
	const experience3 = experience[2];

	return (
		<>
			<Tabs defaultValue="experience1" className="w-[100%]">
				<TabsList className="w-full mb-5">
					<TabsTrigger value="experience1" className="w-full">
						Experience 1
					</TabsTrigger>
					<TabsTrigger value="experience2" className="w-full">
						Experience 2
					</TabsTrigger>
					<TabsTrigger value="experience3" className="w-full">
						Experience 3
					</TabsTrigger>
				</TabsList>
				<TabsContent
					value="experience1"
					className="w-full flex items-start flex-col gap-5">
					<div className="grid w-full max-w-sm items-center gap-2">
						<div className="grid w-full max-w-sm items-center gap-2">
							<Label htmlFor="companyName">Company Name</Label>
							<Input
								type="text"
								id="companyName"
								placeholder="Enter your first experience"
								value={experience1.name}
								onChange={(e) => {
									dispatch(
										updateExperience({
											index: 0,
											updatedInfo: {
												...experience1,
												name: e.target.value,
											},
										})
									);
								}}
							/>
						</div>
						<div className="grid w-full max-w-sm items-center gap-2">
							<Label htmlFor="position">Position</Label>
							<Input
								type="text"
								id="position"
								placeholder="Enter the position you held"
								value={experience1.position}
								onChange={(e) => {
									dispatch(
										updateExperience({
											index: 0,
											updatedInfo: {
												...experience1,
												position: e.target.value,
											},
										})
									);
								}}
							/>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</>
	);
};

export default EditExperience;
