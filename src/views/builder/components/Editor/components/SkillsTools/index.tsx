import FormInput from "@/components/FormInput";
import MultiSelect from "@/components/MultiSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ISkillsItem } from "@/stores/slices/experiences/interfaces";
import { useState } from "react";

const SkillsTools = () => {
	const [selectedSkills, setSelectedSkills] = useState<
		ISkillsItem[] | null | any
	>([]);
	return (
		<>
			<Tabs defaultValue="languages" className="w-[100%]">
				<TabsList className="w-full mb-5">
					<TabsTrigger value="languages" className="w-full">
						Languages
					</TabsTrigger>
					<TabsTrigger value="technologies" className="w-full">
						Technologies
					</TabsTrigger>
					<TabsTrigger value="toolsSoftware" className="w-full">
						Tools & Softwares
					</TabsTrigger>
				</TabsList>
				<TabsContent
					value="languages"
					className="w-full flex items-start flex-col gap-5">
					<FormInput label="Frontend Related" name="frontendRelated">
						<MultiSelect
							selectSkills={selectedSkills}
							setSelectSkills={setSelectedSkills}
						/>
					</FormInput>
					<FormInput label="Backend Related" name="backendRelated">
						<MultiSelect
							selectSkills={selectedSkills}
							setSelectSkills={setSelectedSkills}
						/>
					</FormInput>
				</TabsContent>
				<TabsContent
					value="technologies"
					className="w-full flex items-start flex-col gap-5">
					<FormInput label="UI Related" name="UIRelated">
						<MultiSelect
							selectSkills={selectedSkills}
							setSelectSkills={setSelectedSkills}
						/>
					</FormInput>
					<FormInput label="Frontend Related" name="frontendRelated">
						<MultiSelect
							selectSkills={selectedSkills}
							setSelectSkills={setSelectedSkills}
						/>
					</FormInput>
					<FormInput label="Backend Related" name="backendRelated">
						<MultiSelect
							selectSkills={selectedSkills}
							setSelectSkills={setSelectedSkills}
						/>
					</FormInput>
				</TabsContent>
				<TabsContent
					value="toolsSoftware"
					className="w-full flex items-start flex-col gap-5">
					<FormInput label="Coder Related" name="codeRelated">
						<MultiSelect
							selectSkills={selectedSkills}
							setSelectSkills={setSelectedSkills}
						/>
					</FormInput>
					<FormInput label="Designer Related" name="designerRelated">
						<MultiSelect
							selectSkills={selectedSkills}
							setSelectSkills={setSelectedSkills}
						/>
					</FormInput>
				</TabsContent>
			</Tabs>
		</>
	);
};

export default SkillsTools;
