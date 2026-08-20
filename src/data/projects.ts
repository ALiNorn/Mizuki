// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "mizuki",
		title: "Mizuki",
		description:
			"用的LyraVoid/Mizuki的开源项目.",
		image: "/assets/projects/mizuki.webp",
		category: "web",
		techStack: ["Astro"],
		status: "completed",
		sourceCode: "https://github.com/ALiNorn/myweb",
		visitUrl: "https://alinweb.netlify.app/",
		startDate: "2026-04-21",
		endDate: "2026-06-01",
		featured: true,
		tags: ["Theme", "Open Source"],
	},
	{
		id: "tictactoe",
		title: "归井棋",
		description:
			"用AI还原的一个小游戏.",
		image: "/assets/projects/ttt.webp",
		category: "web",
		techStack: ["Html"],
		status: "completed",
		sourceCode: "https://github.com/alinorn/tripletic-tac-toe",
		visitUrl: "https://alinorn.github.io/tripletic-tac-toe/",
		startDate: "2026-04-21",
		featured: true,
		tags: ["Html","Game"],
	},
	{
		id: "tictactoe-link",
		title: "归井棋-联机版",
		description:
			"用AI还原的一个小游戏.",
		image: "/assets/projects/link.png",
		category: "web",
		techStack: ["Html"],
		status: "completed",
		sourceCode: "https://github.com/alinorn/tripletic-tac-toe",
		visitUrl: "https://triple-tictactoe-link.netlify.app/",
		startDate: "2026-04-21",
		featured: true,
		tags: ["Html","Game"],
	},
	{
		id: "hechengustc",
		title: "合成中科大",
		description:
			"魔改的一个小游戏.",
		image: "/assets/projects/ustc.png",
		category: "web",
		techStack: ["Html"],
		status: "completed",
		sourceCode: "https://github.com/alinorn/hechengustc",
		visitUrl: "https://alinorn.github.io/hechengustc/",
		startDate: "2026-08-17",
		featured: true,
		tags: ["Html","Game","JavaScript"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
