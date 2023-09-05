import EditBasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import EditExperience from "./components/Experience";
import FeaturedProject from "./components/FeaturedProject";
import SkillsTools from "./components/SkillsTools";

export type Templates = "prisma" | "spectrum";

export const headers: {
	[key: string]: {
		title: string;
		templates: Templates[];
		component: () => JSX.Element;
	};
} = {
	"basic-details": {
		title: "Basic details",
		templates: ["prisma", "spectrum"],
		component: EditBasicInfo,
	},
	education: {
		title: "Education",
		templates: ["prisma", "spectrum"],
		component: Education,
	},
	experience: {
		title: "Experience",
		templates: ["prisma", "spectrum"],
		component: EditExperience,
	},
	featuredProject: {
		title: "Featured project",
		templates: ["prisma"],
		component: FeaturedProject,
	},
	skillsTools: {
		title: "Skills & Tools",
		templates: ["prisma", "spectrum"],
		component: SkillsTools,
	},
};
