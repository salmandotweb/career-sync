import EditBasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import EditExperience from "./components/Experience";
import FeaturedProject from "./components/FeaturedProject";
import SkillsTools from "./components/SkillsTools";

export const headers: {
	[key: string]: {
		title: string;
		templates: string[];
		component: () => JSX.Element;
	};
} = {
	"basic-details": {
		title: "Basic details",
		templates: ["prisma"],
		component: EditBasicInfo,
	},
	education: {
		title: "Education",
		templates: ["prisma"],
		component: Education,
	},
	experience: {
		title: "Experience",
		templates: ["prisma"],
		component: EditExperience,
	},
	featuredProject: {
		title: "Featured project",
		templates: ["prisma"],
		component: FeaturedProject,
	},
	skillsTools: {
		title: "Skills & Tools",
		templates: ["prisma"],
		component: SkillsTools,
	},
};
