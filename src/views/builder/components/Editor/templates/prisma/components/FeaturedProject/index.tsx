import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
	selectFeaturedProject,
	updateFeaturedProject,
} from "@/stores/slices/featuredProject/featuredProjectSlice";

const FeaturedProject = () => {
	const featuredProject = useAppSelector(selectFeaturedProject);

	const dispatch = useAppDispatch();

	return (
		<div className="w-full flex items-start flex-col gap-5">
			<FormInput label="Project Name" name="projectName">
				<Input
					type="text"
					id="projectName"
					placeholder="Enter the project name"
					value={featuredProject.projectName}
					onChange={(e) => {
						dispatch(
							updateFeaturedProject({
								...featuredProject,
								projectName: e.target.value,
							})
						);
					}}
				/>
			</FormInput>
			<FormInput
				label="Skills you used in this project"
				name="featuredProjectSkills">
				<MultiSelect
					maxSkills={6}
					selectSkills={featuredProject.skills}
					setSelectSkills={(skills) => {
						dispatch(
							updateFeaturedProject({
								...featuredProject,
								skills: skills,
							})
						);
					}}
				/>
			</FormInput>
			<FormInput label="About your project" name="aboutProject">
				<Textarea
					className="resize-none"
					value={featuredProject.description}
					placeholder="Tell us about your project"
					rows={6}
					onChange={(e) => {
						dispatch(
							updateFeaturedProject({
								...featuredProject,
								description: e.target.value,
							})
						);
					}}
				/>
			</FormInput>
			<FormInput label="Project Link" name="projectLink">
				<Input
					type="url"
					id="projectLink"
					placeholder="Enter the project link"
					value={featuredProject.projectLink}
					onChange={(e) => {
						dispatch(
							updateFeaturedProject({
								...featuredProject,
								projectLink: e.target.value,
							})
						);
					}}
				/>
			</FormInput>
			<FormInput label="Portfolio Link" name="portfolioLink">
				<Input
					type="url"
					id="portfolioLink"
					placeholder="Enter the portfolio link"
					value={featuredProject.portfolioLink}
					onChange={(e) => {
						dispatch(
							updateFeaturedProject({
								...featuredProject,
								portfolioLink: e.target.value,
							})
						);
					}}
				/>
			</FormInput>
		</div>
	);
};

export default FeaturedProject;
