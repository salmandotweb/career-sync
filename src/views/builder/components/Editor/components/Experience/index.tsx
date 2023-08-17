import { CustomCalendar } from "@/components/Calendar";
import { CheckboxWithText } from "@/components/Checkbox";
import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
	selectExperience,
	updateExperience,
} from "@/stores/slices/experiences/experienceSlice";
import { useState } from "react";

const EditExperience = () => {
	const experience = useAppSelector(selectExperience);
	const dispatch = useAppDispatch();

	const [joiningDate, setJoiningDate] = useState<Date | undefined>(undefined);
	const [endingDate, setEndingDate] = useState<Date | undefined>(undefined);

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
					<ScrollArea className="h-[68vh] w-full border-none">
						<div className="grid w-full max-w-sm items-center gap-4">
							<FormInput label="Company Name" name="companyName">
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
							</FormInput>
							<FormInput label="Position" name="position">
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
							</FormInput>
							<FormInput label="Joining Date" name="joiningDate">
								<CustomCalendar date={joiningDate} setDate={setJoiningDate} />
							</FormInput>
							<FormInput label="Ending Date" name="endingDate">
								<CustomCalendar date={endingDate} setDate={setEndingDate} />
							</FormInput>
							<div className="flex items-center justify-end">
								<CheckboxWithText
									id="currentlyWorkHere"
									label="I currently work here"
								/>
							</div>
							<FormInput label="Skills" name="skills">
								<MultiSelect />
							</FormInput>
							<FormInput label="Responsibilities" name="experience">
								<Textarea
									className="resize-none"
									placeholder="
								Tell us about your responsibilities in this position
							"
									rows={8}
								/>
							</FormInput>
						</div>
					</ScrollArea>
				</TabsContent>
			</Tabs>
		</>
	);
};

export default EditExperience;
