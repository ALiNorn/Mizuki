---
title: Markdown 高级教程
published: 2026-04-25
updated: 2026-04-25
description: '一个简单的Markdown高级教程'
image: ''
tags: [Markdown, Mizuki]
category: MD
draft: false 
---

## GitHub 仓库卡片
可以添加链接到GitHub存储库的动态卡片，在页面加载时，将从GitHub API获取存储库信息。

::github{repo="ALiNorn/tripletic-tac-toe"}

Markdown里这样写 `::github{repo="ALiNorn/tripletic-tac-toe"}`.

```markdown
::github{repo="ALiNorn/tripletic-tac-toe"}
```

## 警告

支持以下类型的警告: `note` `tip` `important` `warning` `caution`

### 基本语法

```markdown
:::note
这是note
:::
```
:::note
这是note
:::

```markdown
:::tip
这是tip
:::
```
:::tip
这是tip
:::

```markdown
:::important
这是important
:::
```
:::important
这是important
:::

```markdown
:::warning
这是warning
:::
```
:::warning
这是warning
:::

```markdown
:::caution
这是caution
:::
```
:::caution
这是caution
:::



### 自定义标题

警告的标题可以自定义

:::note[自定义标题]
这个note的标题是自定义的
:::

```markdown
:::note[自定义标题]
这个note的标题是自定义的
:::
```

### GitHub语法

> [!TIP]
> 支持[GitHub 语法](https://github.com/orgs/community/discussions/16925) 

```
> [!TIP]
> 支持GitHub语法.
```

### 防剧透

支持 **Markdown** 语法.

鼠标放这里才显示→:spoiler[这里被隐藏]!

```markdown
鼠标放这里才显示→:spoiler[这里被隐藏]!
