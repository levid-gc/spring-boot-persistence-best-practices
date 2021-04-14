---
slug: sql-phenomena
title: SQL 异象
author: Guan Chao
author_title: 全栈工程师
author_url: https://github.com/levid-gc
author_image_url: https://avatars.githubusercontent.com/u/6498582?v=4
tags: [SQL]
---

SQL 异象是指：

- 脏读（Dirty Read）
- 不可重复读（Non-Repeatable Read）
- 幻象读（Phantom Read）
- 脏写（Dirty Write）
- 读偏移（Read Skew）
- 写偏移（Write Skew）
- 更新丢失（Lost Update）

正如这些名称所示，这些现象表示的都是一些数据完整性异常，而导致这些问题的原因就是开发者为了压榨事务并发的性能而放宽了 `SERIALIZABLE` 隔离等级，使用了其他的隔离等级。

:::note 

在选择事务隔离级别和事务并发性性能之间总是存在权衡。

:::

## 脏写

脏写同样也是更新丢失。在脏写的情况下，一个事务会覆写另一个并发的事务，也就是这两个事务在同一时间都可以允许影响同样的行。

![Figure E-1. Dirty write](/img/figureE-1.png)
_Figure E-1. Dirty write_

第一步：John 尝试付 Mary 的账单。首先，他的事务触发了一个 `SELECT` 语句查询账单总额。Mary 同时也准备付这个账单。因此她触发了一个同样的查询，得到的结果和 John 一样（$345）。

第二步：John 的事务付完了整个账单欠款。因此，待付金额更新为了 $0。

第三步：Mary 的事务并没有意识到这个更新，并且她尝试付了一半的欠款并且成功了（她的事务提交了）。她触发了 `UPDATE` 语句并将待付金额更新为了 $173。

第四步：不幸的是，John 的事务没法提交成功了，必须回滚。因此，待付金额恢复到了 $345。这就意味着 Mary 损失了 $172。