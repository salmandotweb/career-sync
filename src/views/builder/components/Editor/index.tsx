import EditBasicInfo from "./components/BasicInfo";

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
	"skills-and-expertise": {
		title: "Skills and expertise",
		templates: ["prisma"],
		component: () => <div>Skills and expertise</div>,
	},
	education: {
		title: "Education",
		templates: ["prisma"],
		component: () => <div>Skills and expertise</div>,
	},
	experience: {
		title: "Experience",
		templates: ["prisma"],
		component: () => <div>Skills and expertise</div>,
	},
	activities: {
		title: "Activities",
		templates: ["prisma"],
		component: () => <div>Skills and expertise</div>,
	},
	volunteering: {
		title: "Volunteering",
		templates: ["prisma"],
		component: () => <div>Skills and expertise</div>,
	},
	awards: {
		title: "Awards",
		templates: ["prisma"],
		component: () => <div>Skills and expertise</div>,
	},
};
