import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppSelector } from "@/stores/hooks";
import { ISkillsItem } from "@/stores/slices/experiences/interfaces";
import { selectFeaturedProject } from "@/stores/slices/featuredProject/featuredProjectSlice";
import { useState } from "react";

const FeaturedProject = () => {
	const featuredProject = useAppSelector(selectFeaturedProject);

	const [selectedSkills, setSelectedSkills] = useState<
		ISkillsItem[] | null | any
	>([]);

	return (
		<div className="w-full flex items-start flex-col gap-5">
			<FormInput label="Project Name" name="projectName">
				<Input
					type="text"
					id="projectName"
					placeholder="Enter the project name"
					value={featuredProject.projectName}
					onChange={(e) => {}}
				/>
			</FormInput>
			<FormInput
				label="Skills you used in this project"
				name="featuredProjectSkills">
				<MultiSelect
					selectSkills={selectedSkills}
					setSelectSkills={setSelectedSkills}
				/>
			</FormInput>
			<FormInput label="About your project" name="aboutProject">
				<Textarea
					className="resize-none"
					value={featuredProject.description}
					placeholder="
        Tell us about your project
							"
					rows={6}
				/>
			</FormInput>
			<FormInput label="Project Link" name="projectLink">
				<Input
					type="url"
					id="projectLink"
					placeholder="Enter the project link"
					value={featuredProject.projectLink}
					onChange={(e) => {}}
				/>
			</FormInput>
			<FormInput label="Portfolio Link" name="portfolioLink">
				<Input
					type="url"
					id="portfolioLink"
					placeholder="Enter the portfolio link"
					value={featuredProject.portfolioLink}
					onChange={(e) => {}}
				/>
			</FormInput>
		</div>
	);
};

export default FeaturedProject;
