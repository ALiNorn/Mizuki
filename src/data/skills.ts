// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills

	// Backend Skills
	{
		id: "python",
		name: "Python",
		description:
			"人工智能数学原理与算法实验课学的皮毛.",
		icon: "logos:python",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#3776AB",
	},
	{
		id: "c",
		name: "C",
		description:
			"程序设计和数据结构课学的.",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#A8B9CC",
	},

	// Database Skills

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"部署Mizuki才下载的.",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"微软大战代码.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 2, months: 6 },
		color: "#007ACC",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"在平板上搞了个Linux.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},

	// Other Skills
	
];
