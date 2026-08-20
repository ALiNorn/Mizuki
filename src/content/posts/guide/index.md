---
title: Mizuki文章编写教程
published: 2026-04-25
description: "告诉你文章怎么写以及塞哪个位置."
image: "./cover.webp"
tags: ["Mizuki"]
category: MD
draft: false
---

# 下面的是自带的，懒得改了


This blog template is built with [Astro](https://astro.build/). For the things that are not mentioned in this guide, you may find the answers in the [Astro Docs](https://docs.astro.build/).

## Front-matter of Posts

```yaml
---
title: 标题
published: 时间
description: 描述
image: ./cover.jpg
tags: [标,签]
category: 分类
draft: false
---
```


| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章标题                                                                                                                                                                                     |
| `published`   | 发布日期                                                                                                                                                                            |
| `pinned`      | 是否顶置.                                                                                                                                                   |
| `priority`    | 顶置优先级                                                                                                                          |
| `description` | 简单描述                                                                                                                                                   |
| `image`       | 封面图片路径：<br/>1. 开头是 `http://` 或 `https://`: 用网上图片（图床）<br/>2. 开头是 `/`: 放在 `public`的图片  |
| `tags`        | 标签                                                                                                                                                                                      |
| `category`    | 分类                                                                                                                                                                                   |
| `licenseName` | 文章许可证名称                                                                                                                                                                    |
| `author`      | 作者                                                                                                                                                                                     |
| `sourceLink`  |源码链接                                                                                                                                                          |
| `draft`       | 是不是草稿                                                                                                                                                   |

## 文章放在哪里？



文章要放在 `src/content/posts/` .

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.webp  这是封面
    └── index.md    这是文章
```