import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
	selectSkills,
	updateSkills,
} from "@/stores/slices/skills/educationSlice";
import { SkillsTools as Skills } from "@/stores/slices/skills/interfaces";

const SkillsTools = () => {
	const skills = useAppSelector(selectSkills);
	const dispatch = useAppDispatch();

	return (
		<>
			<Tabs defaultValue="Languages" className="w-[100%]">
				<TabsList className="w-full mb-5">
					{skills?.map((skill) => {
						return (
							<TabsTrigger
								key={skill.title}
								value={skill.title.toString()}
								className="w-full">
								{skill.title}
							</TabsTrigger>
						);
					})}
				</TabsList>
				<ScrollArea className="h-[67vh] w-full">
					{skills?.map((skill: Skills) => (
						<TabsContent
							key={skill.title}
							value={skill.title.toString()}
							className="w-full flex items-start flex-col gap-5">
							{skill.frontendRelated && (
								<FormInput label="Frontend Related" name="frontendRelated">
									<MultiSelect
										selectSkills={skill.frontendRelated}
										setSelectSkills={(skills) => {
											dispatch(
												updateSkills({
													index: 0,
													updatedInfo: {
														...skill,
														frontendRelated: skills,
													},
												})
											);
										}}
									/>
								</FormInput>
							)}

							{skill.uiRelated && (
								<FormInput label="UI Related" name="UIRelated">
									<MultiSelect
										selectSkills={skill.uiRelated}
										setSelectSkills={(skills) => {
											dispatch(
												updateSkills({
													index: 0,
													updatedInfo: {
														...skill,
														uiRelated: skills,
													},
												})
											);
										}}
									/>
								</FormInput>
							)}

							{skill.backendRelated && (
								<FormInput label="Backend Related" name="backendRelated">
									<MultiSelect
										selectSkills={skill.backendRelated}
										setSelectSkills={(skills) => {
											dispatch(
												updateSkills({
													index: 0,
													updatedInfo: {
														...skill,
														backendRelated: skills,
													},
												})
											);
										}}
									/>
								</FormInput>
							)}

							{skill.coderRelated && (
								<FormInput label="Coder Related" name="coderRelated">
									<MultiSelect
										selectSkills={skill.coderRelated}
										setSelectSkills={(skills) => {
											dispatch(
												updateSkills({
													index: 0,
													updatedInfo: {
														...skill,
														coderRelated: skills,
													},
												})
											);
										}}
									/>
								</FormInput>
							)}

							{skill.designerRelated && (
								<FormInput label="Designer Related" name="designerRelated">
									<MultiSelect
										selectSkills={skill.designerRelated}
										setSelectSkills={(skills) => {
											dispatch(
												updateSkills({
													index: 0,
													updatedInfo: {
														...skill,
														designerRelated: skills,
													},
												})
											);
										}}
									/>
								</FormInput>
							)}
						</TabsContent>
					))}
				</ScrollArea>
			</Tabs>
		</>
	);
};

export default SkillsTools;
