---
slug: jpa-fundamentals
title: JPA (Hibernate) 基础
author: Guan Chao
author_title: 全栈工程师
author_url: https://github.com/levid-gc
author_image_url: https://avatars.githubusercontent.com/u/6498582?v=4
tags: [JPA, Hibernate, EntityManager, EntityManagerFactory]
---

## 持久化单元是什么？

可以将持久化单元想象成一个盒子，它里面装下了需要创建一个 `EntityManagerFactory` 实例所有必要的信息。

![Figure A-1. Persistence unit](/img/figureA-1.png)
_Figure A-1. Persistence unit_

这些信息中，有关于数据源的详细信息（JDBC URL，用户名，密码，SQL dialect，等等），被托管的实体列表，以及一些其他的属性。当然，持久化单元类型可以是 **本地资源** （单数据源）或者 **JTA** （多数据源）。你可以通过你设定的名称来区分持久化单元。在同一个应用中，你可以拥有多个持久化单元，然后通过各自的名称来识别，因此，可以在同一个应用中连接不同的数据库。

<!--truncate-->

## EntityManagerFactory 是什么？

如名称所示，它是一个用于创建 `EntityManager` 实例的工厂。

`EntityManagerFactory` 所需的信息是通过持久化单元传递的，它向外暴露了一个名为 `createEntityManager()` 的方法，而这个方法在每次调用的时候都会返回了一个新的由应用托管的 `EntityManager` 实例。

我们可以通过注入（`@PersistenceUnit`）或者 `Persistence#createEntityManagerFactory()` 来打开一个 `EntityManagerFactory` 实例。其中，`isOpen()` 方法可以用于检查状态，`close()` 方法可以用于关闭。如果关闭了 `EntityManagerFactory`，那么它的所有实体管理器都应该是关闭的。

## EntityManager 是什么？

在理解 `EntityManager` 前，我们先讨论一下数据从数据库中提取出来时发生了什么。

- 从数据库获取数据会在内存中产生一个数据副本（通常指的就是 JDBC **结果集**，简言之，就是 **数据集** 或者 **数据快照**）。那么这个内存区块保存的获取到的数据就被称为 **持久化上下文** 或者 **一级缓存**，简言之 **缓存**。

![Figure A-2. Persistence Context](/img/figureA-2.png)
_Figure A-2. Persistence Context_

- 在获取操作完成之后，获取到的 **结果集** 就脱离数据库存储到了内存中。在应用，我们可以通过实体（也就是，通过 Java 对象）访问或者管理这个 **结果集**，为了实现这样的上下文，Hibernate JPA 借助了特定的技术来将这个获取到的 **结果集** 转化为一个 **原生** 数据（`Object[]` - hydrated/loaded state）数组，然后再到被称为 **托管实体** 的可管理的表现对象。

- 一个活动的持久化上下文应该被分配给当前活动的数据库事务。在当前数据库事务生命周期内，你可以通过 `EntityManager` 方法来管理实体，而 Hibernate JPA 将会缓冲实体状态的转换。其实，我们直接说 `EntityManager` 实例就是持久化上下文也没有什么错，但是，在每个数据库物理事务上，避免使用一个以上的持久化上下文。

![Figure A-3. Persistence Context operations](/img/figureA-3.png)
_Figure A-3. Persistence Context operations_

- 我们通过实体状态管理工具（比如：`persist()`，`remove()`，等等）修改了内存中的持久化上下文后，你肯定会期待在数据库中看到你做的那些修改。这个操作就被称为 **flush**，它可以是自动地，也可以是手动地（不推荐）在事务生命周期内触发多次。我么说，在 flush 时间内，我们将持久化上下文同步到底层数据库中。flush 策略有多种。最常见的也就是 Hibernate JPA 的 `AUTO`（flush 会在每个查询以及事务提交前操作）和 `COMMIT`（flush 仅会在事务提交前触发）。可以粗略地将 flush 操作看作是向数据库传送的用于传递修改的批量 SQL 声明（DML）。

![Figure A-4. Persistence Context flush time](/img/figureA-4.png)
_Figure A-4. Persistence Context flush time_

- 一旦当前的事务完成了（通过提交或者回滚的方式），那么持久化上下文中的对象将都处于脱离状态，这都是发生在调用 `EntityManager` 的 `clear()` 或者 `close()` 方法后。也可以调用名为 `detach()` （在 Hibernate 中调用 `evict()`）的方法来脱离特定的实体。这也就意味着，你后续再对这些对象做修改都不会反应到数据库中。传递后续的变更仅能在当前活动事务的上下文中重新 **合并** （通过 `merge()` 方法）或者 **重新附加** （通过 Hibernate ORM 的 `update()`，`saveOrUpdate()` 或者 `lock()` 操作）对象。这是 **事务型作用域** `EntityManager` （也就是事务型持久化上下文）的默认行为。同样也存在一个跨多个事务的 `EntityManager`，被称为扩展的持久化上下文。

:::caution 注意

不要认为 JPA 的 **合并** 与 Hibernate 的 **重附加** 操作是一样的。

JPA 的合并操作是从数据库中载入新的实体对象（从底层数据库中获取实体的最新状态），并使用脱离的实体的内部状态更新这个新的实体。但是在载入这个新的实体前，JPA 合并会考虑到当前上下文中托管的实体，如果当前持久化上下文中已经托管了这个需要用到的实体，那么就不会从数据库中载入这个新的实体。它只是利用了会话级别的重复读取功能。但是需要注意的是，这个操作会覆盖掉你在当前会话中对这个托管的实体已经做出的修改记录（脱离实体的属性将会被拷贝到这个托管的实体上）。`merge()` 方法会返回最新更新的托管实例。

Hibernate 的重附加是 Hibernate 相关的操作。这个操作主要在脱离的实体本身起作用。它的目的就是将实体对象从脱离的状态转换到托管（持久化）的状态。如果在当前持久化上下文中试着重附加一个 **transient** 实体或者已经载入的实体，那么就会抛出异常。这个操作会绕过脏检查机制并且在持久化上下文 flush 期间触发的 `UPDATE` 操作中具例化。由于 Hibernate 并不会从底层数据库中读取最新的实体状态，那么它就不会执行脏检查。换句话说，这个 `UPDATE` 操作在所有时机都会触发，即使实体和数据库是同步的（含有相同的数据）。这可以通过在实体上标注 `@SelectBeforeUpdate` 修复。正如这个标注的名字所示，它会指示 Hibernate 在为这个实体生成 `UPDATE` 语句前触发 `SELECT` 查询并且执行脏检查。这个 `update()` 方法返回的是 `void`。

需要记住的是，标注了 `@SelectBeforeUpdate` 的情况下调用 `update(obj)` 仅会查找 `obj`，而调用 `merge(obj)` 不仅会查找 `obj`，还会查找所有使用 `CascadeType.MERGE` 标注了的关联实体。这也就说明了 JPA 的合并是实体图的正确选择。

一般而言，尽量遵守以下的规则：

- 如果你想要拷贝脱离的实体状态，那么就使用 JPA 的 `merge()` 方法。
- 对于批处理，使用 Hibernate 的 `update()` 方法。
- 使用 JPA 的 `persist()` 来持久化一个实体。

:::

- 一旦脱离，对象将会离开持久化上下文并将持续在外部存在。这就意味持久化上下文不再管理它们了，它们也就不再得到特殊对待并且仅仅是普通的 Java 对象，举个例子，调用 `EntityManager#remove(detached_entity)` 将抛出异常。

![Figure A-5. Persistence Context with detached entities](/img/figureA-5.png)
_Figure A-5. Persistence Context with detached entities_

你可以通过注入（`@PersistenceContext`）或者 `EntityManagerFactory#createEntityManager()` 方法打开一个 `EntityManager`。`isOpen()` 方法用于检查状态，`clear()` 方法用于清理，`close()` 方法用于关闭。

## 实体状态转换

JPA 实体可以处于以下任意状态：

- _Transient (or New)_：数据库完全不知道这个新的实体存在（在 flush 期间，Hibernate 会对其使用 `INSERT` 语句）.
- _Managed (or Persistent)_：在数据库中，这个实体有其对应的行，并且目前已被载入到了持久化上下文中。在 read-write 模式中，flush 期间，Hibernate 会对这个实体运行脏检查机制，如果它侦测到了变更，就会运行对应的 `UPDATE` 语句。
- _Detached_：实体存在于持久化上下文中，但是持久化上下文被关闭了，或者实体已被清理/驱逐（任何在脱离了的实体所作的更改都不会自动传递到数据库中）出了持久化上下文。
- _Removed_：在持久化上下文中，实体已被标记为删除（flush 期间，Hibernate 会使用 `DELETE` 语句在数据库中删除对应的行）。

:::tip 提示

实体从 _transient_ 变为 _managed_ 会被翻译为一条 `INSERT` 语句。

实体从 _managed_ 变为 _removed_ 会被翻译为一条 `DELETE` 语句。

实体是 _managed_ 并且脏检查侦测出修改，会被翻译为一条 `UPDATE` 语句。

:::

下面展示了实体状态在 Hibernate JPA 和 Hibernate Core ORM 中的转换。

![Figure A-6. Hibernate JPA entity state transitions and Spring Data built-in counterparts](/img/figureA-6.png)
_Figure A-6. Hibernate JPA entity state transitions and Spring Data built-in counterparts_

![Figure A-7. Hibernate ORM entity state transitions](/img/figureA-7.png)
_Figure A-7. Hibernate ORM entity state transitions_

## 参考

- Spring Boot Persistence Best Practices