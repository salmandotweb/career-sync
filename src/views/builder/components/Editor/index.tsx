import EditBasicInfo from "./components/BasicInfo";

export const headers: {
	[key: string]: { title: string; component: () => JSX.Element };
} = {
	"basic-details": {
		title: "Basic details",
		component: EditBasicInfo,
	},
	"skills-and-expertise": {
		title: "Skills and expertise",
		component: () => <div>Skills and expertise</div>,
	},
	education: {
		title: "Education",
		component: () => <div>Skills and expertise</div>,
	},
	experience: {
		title: "Experience",
		component: () => <div>Skills and expertise</div>,
	},
	activities: {
		title: "Activities",
		component: () => <div>Skills and expertise</div>,
	},
	volunteering: {
		title: "Volunteering",
		component: () => <div>Skills and expertise</div>,
	},
	awards: { title: "Awards", component: () => <div>Skills and expertise</div> },
};
