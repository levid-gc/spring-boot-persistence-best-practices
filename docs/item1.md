---
title: 项 1：如何高效使用 @OneToMany 关联
---

在领域模型中，双向 `@OneToMany` 估计是最常见到的关联。

下面两个实体，`Author` 和 `Book` 使用的就是双向延迟 @OneToMany 关联。

![Figure 1-1. The @OneToMany table relationship](/img/figure1-1.png)

`author` 表对 `book` 表的关系是 `@OneToMany`。表 `author` 中一行可以被表 `book` 中多行引用。`author_id` 列通过外键引用 `author` 表中主键来映射这样的关系。一本书在不关联作者的情况下是不会存在的，因此 `author` 是父级一方（`@OneToMany`），而 `book` 是子级一方（`@ManyToOne`）。`@ManyToOne` 用于负责在持久化上下文中同步外键列（一级缓存）。

## 永远从父级一方级联到子级一方

```java
@OneToMany(cascade = CascadeType.ALL)
```

:::caution

在这种上下文中，永远不要在 `@ManyToOne` 上使用 `CascadeType.*`，因为实体状态应该是从父级一方传播到子级一方的。

:::

## 不要忘记在父级一方设置 `mappedBy`

`mappedBy` 属性用于标示双向关联，并且必须设置在父级一方。换句话说，双向 `@OneToMany` 关联，是通过在父级一方的 `@OneToMany` 中设置 `mappedBy` 以及在子级一方被 `mappedBy` 引用的地方添加 `@ManyToOne` 实现的。

```java
@OneToMany(cascade = CascadeType.ALL, mappedBy = "author")
```

## 在父级一方设置 `orphanRemoval`

在父级一方设置 `orphanRemoval` 会保证子级在缺失父级引用时会被删除掉。

```java
@OneToMany(cascade = CascadeType.ALL, mappedBy = "author", orphanRemoval = true)
```

## 保持双方关联的同步

## 覆写 `equals()` 和 `hashCode()` 方法

## 在关联的双方使用延迟获取

## 注意 `toString()` 方法的覆写

## 使用 `@JoinColumn` 指定 JOIN 列的名称

## 示例