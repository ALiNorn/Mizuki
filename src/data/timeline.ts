import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "Studying Electronic Information Engineering",
		description:
			"Currently studying Electronic Information Engineering, focusing on nothing.",
		type: "education",
		startDate: "2024-09-01",
		location: "Hefei",
		organization: "University of Science and Technology of China",
		skills: ["C", "Python"],
		achievements: [
			"Current GPA: **/4.3",
			"Completed data structures and algorithms course project",
		],
		links: [
			{
				name: "中国科学技术大学",
		        url: "https://www.ustc.edu.cn/",
		        type: "website",
			}
	    ],
		icon: "material-symbols:school",
		color: "#3a96fe",
		featured: true,
	},
	{
		id: "Senior High",
		title: "高中",
		description:
			"老高考，理科.",
		type: "education",
		startDate: "2021-09-01",
		endDate: "2024-06-08",
		location: "Mianyang",
		organization: "四川省绵阳中学",
		skills: ["语文", "数学", "英语","物理","化学","生物"],
		achievements: [
			"高考成绩: ***/750",
			"考上了中国科学技术大学",
		],
		links: [
			{
				name: "绵阳中学",
		        url: "https://scmyzx.fandom.com/zh/wiki/",
		        type: "website",
			}
	    ],
		icon: "material-symbols:school",
		color: "#e63131",
		featured: true,
	},
	{
		id: "Junior High",
		title: "初中",
		description:
			"绵阳东辰国际大监狱.",
		type: "education",
		startDate: "2018-09-01",
		endDate: "2021-06-13",
		location: "Mianyang",
		organization: "绵阳东辰",
		skills: ["语文", "数学", "英语","物理","化学","生物"],
		achievements: [
			"中考成绩: ***/900",
			"考上了绵阳中学",
		],
		icon: "material-symbols:school",
		color: "#00eeff",
		featured: true,
	},
];
