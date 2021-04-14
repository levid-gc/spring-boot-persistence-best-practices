---
slug: using-cascadetype-and-what-to-avoid
title: CascadeType.ALL 的使用及其注意项 
author: Guan Chao
author_title: 全栈工程师
author_url: https://github.com/levid-gc
author_image_url: https://avatars.githubusercontent.com/u/6498582?v=4
tags: []
---

`CascadeType.ALL` 的含义是指持久化上下文会将所有的 `EntityManager` 操作（`PERSIST`, `REMOVE`, `REFRESH`, `MERGE` 和 `DETACH`）传递（级联）给所有与之关联的实体。

具体的 `Cascade` 类型描述如下：

- `PERSIST`：如果父级实体被持久化到持久化上下文中，那么所有相关的实体同样会被持久化。
- `MERGE`：如果父级实体合并到持久化上下文中，那么相关的实体都会被合并。
- `REFRESH`：如果在当前持久化上下文中刷新了父级实体，那么所有相关的实体都会被刷新。
- `DETACH`：如果父级实体脱离当前持久化上下文，那么所有相关的实体都会脱离。
- `REMOVE`：如果父级实体从当前的持久化上下文中移除，那么所有相关的实体都会被移除。
- `ALL`：所有描述都会被应用到关联的实体上。

级联是最敏感的设置，因为在更新或者删除的时候，常常会发生意外的事情。在 `CascadeType.REMOVE` 的例子中，有时你希望父级被删除的时候，不要影响子表中的行，特别是在子表还和其他的表存在关联的情况。

TODO

[Reference: Rapid Java Persistence and Microservices]

