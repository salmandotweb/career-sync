import { CustomCalendar } from "@/components/Calendar";
import { CheckboxWithText } from "@/components/Checkbox";
import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
	selectExperience,
	updateExperience,
} from "@/stores/slices/experiences/experienceSlice";
import { ISkillsItem } from "@/stores/slices/experiences/interfaces";
import { useState } from "react";

const EditExperience = () => {
	const experience = useAppSelector(selectExperience);
	const dispatch = useAppDispatch();

	const [selectedSkills, setSelectedSkills] = useState<ISkillsItem[]>([]);

	const experience1 = experience[0];

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
				<ScrollArea className="h-[67vh] w-[100%]">
					<TabsContent
						value="experience1"
						className="w-[100%] flex items-start flex-col gap-5">
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
								<CustomCalendar
									date={new Date(experience1.joiningDate)}
									setDate={(date) => {
										dispatch(
											updateExperience({
												index: 0,
												updatedInfo: {
													...experience1,
													joiningDate: formatDate(date as Date),
												},
											})
										);
									}}
								/>
							</FormInput>
							<FormInput label="Leaving Date" name="leavingDate">
								<CustomCalendar
									date={new Date(experience1.endDate)}
									disabled={experience1.currentlyWorkHere}
									setDate={(date) => {
										dispatch(
											updateExperience({
												index: 0,
												updatedInfo: {
													...experience1,
													endDate: formatDate(date as Date),
												},
											})
										);
									}}
								/>
							</FormInput>
							<div className="flex items-center justify-end">
								<CheckboxWithText
									id="currentlyWorkHere"
									label="I currently work here"
									value={experience1.currentlyWorkHere}
									onChange={(value) => {
										dispatch(
											updateExperience({
												index: 0,
												updatedInfo: {
													...experience1,
													currentlyWorkHere: value,
												},
											})
										);
									}}
								/>
							</div>
							<FormInput label="Skills" name="skills">
								<MultiSelect
									maxSkills={3}
									selectSkills={experience1.skills}
									setSelectSkills={(skills) => {
										dispatch(
											updateExperience({
												index: 0,
												updatedInfo: {
													...experience1,
													skills,
												},
											})
										);
									}}
								/>
							</FormInput>
							<FormInput label="Responsibilities" name="experience">
								<Textarea
									className="resize-none"
									placeholder="1."
									rows={2}
									value={experience1.responsibilities[0].responsibility ?? ""}
									onChange={(e) => {
										dispatch(
											updateExperience({
												index: 0,
												updatedInfo: {
													...experience1,
													responsibilities: [
														{
															...experience1.responsibilities[0],
															responsibility: e.target.value,
														},
													],
												},
											})
										);
									}}
								/>
								<Textarea
									className="resize-none"
									placeholder="2."
									rows={2}
									value={experience1.responsibilities[1].responsibility ?? ""}
									onChange={(e) => {
										dispatch(
											updateExperience({
												index: 0,
												updatedInfo: {
													...experience1,
													responsibilities: [
														{
															...experience1.responsibilities[1],
															responsibility: e.target.value,
														},
													],
												},
											})
										);
									}}
								/>
							</FormInput>
						</div>
					</TabsContent>
				</ScrollArea>
			</Tabs>
		</>
	);
};

export default EditExperience;
