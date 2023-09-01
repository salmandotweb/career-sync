import EditBasicInfo from "./templates/prisma/components/BasicInfo";
import Education from "./templates/prisma/components/Education";
import EditExperience from "./templates/prisma/components/Experience";
import FeaturedProject from "./templates/prisma/components/FeaturedProject";
import SkillsTools from "./templates/prisma/components/SkillsTools";

export const headers: {
	[key: string]: {
		title: string;
		templates: string[];
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
