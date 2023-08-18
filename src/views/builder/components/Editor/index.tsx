import EditBasicInfo from "./components/BasicInfo";
import EditExperience from "./components/Experience";
import FeaturedProject from "./components/FeaturedProject";

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
};
