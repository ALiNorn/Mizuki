// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "GB",
		imgurl: "https://www.sevenless.ink/_vercel/image?url=_astro%2Favatar.CaUeQkI6.jpg&w=640&q=100",
		desc: "高中同桌的博客",
		siteurl: "https://sevenless.ink",
		tags: ["Deskmate"],
	},
	{
		id: 2,
		title: "壮壮妈",
		imgurl: "https://neutralised.github.io/images/avatar.webp",
		desc: "高中同桌室友的博客",
		siteurl: "https://neutralised.github.io/",
		tags: ["Neighbor"],
	},
	{
		id: 3,
		title: "栖迟月",
		imgurl: "https://cdn.jsdelivr.net/gh/ALiNorn/PicGo@main/pic/lxy.webp",
		desc: "好朋友的头像？",
		siteurl: "https://cdn.jsdelivr.net/gh/ALiNorn/PicGo@main/pic/lxy.webp",
		tags: ["FireFlower"],
	},
	{
		id: 4,
		title: "Leisuer",
		imgurl: "https://blowingwind.top/img/avatar.jpg",
		desc: "折纸社老登",
		siteurl: "https://blowingwind.top/",
		tags: ["折纸社"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
