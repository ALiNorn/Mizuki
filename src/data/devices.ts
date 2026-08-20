// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Honor: [
		{
			name: "Honor 400pro",
			image: "/images/device/honor400p.webp",
			specs: "Gray / 12G + 512GB",
			description:
				"AI 2亿超清写真人像.",
			link: "https://www.honor.com/cn/shop/product/10086929500688.html#",
		},
	],
};
