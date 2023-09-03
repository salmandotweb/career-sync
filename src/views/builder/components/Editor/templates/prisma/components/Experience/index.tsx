import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/stores/hooks";
import Fields from "./Fields";
import { IExperienceItem } from "@/stores/slices/experiences/interfaces";
import { selectExperience } from "@/stores/slices/experiences/experienceSlice";

const EditExperience = () => {
	const experiences = useAppSelector(selectExperience);

	return (
		<>
			<Tabs defaultValue="1" className="w-full">
				<TabsList className="w-full mb-5">
					{experiences?.map((experience: IExperienceItem) => (
						<TabsTrigger
							key={experience.id}
							value={experience.id.toString()}
							className="w-full">
							{`Experience ${experience.id}`}
						</TabsTrigger>
					))}
				</TabsList>

				<ScrollArea className="h-[67vh] w-full">
					{experiences?.map((experience: IExperienceItem) => (
						<TabsContent
							key={experience.id}
							value={experience.id.toString()}
							className="w-full flex items-start flex-col gap-5">
							<Fields experience={experience} />
						</TabsContent>
					))}
				</ScrollArea>
			</Tabs>
		</>
	);
};

export default EditExperience;
