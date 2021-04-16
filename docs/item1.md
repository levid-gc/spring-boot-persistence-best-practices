---
title: 项 1：如何高效使用 @OneToMany 关联
slug: /
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

## 在关联的双方使用 LAZY 获取

## 注意 `toString()` 方法的编写

如果重载 `toString()` 方法，要特别注意那些关联，特别是 **LAZY** 型的。因为在访问它们的时候，会触发额外的 SQL 语句来获取对应的数据，或抛出 `LazyInitializationException`。

## 使用 `@JoinColumn` 指定 JOIN 列的名称

这个注解用于指定 **JOIN** 列的名称，比如在 `Book` 实体中，声明了一个名为 `author_id` 的 **JOIN** 列：

```java
@JoinColumn(name = "author_id")
private Author author;
````

在测试的过程中，如果没有加此注解，默认生成的列名为 `author_id`。

## 示例

```sql
# Insert author with books  ...
# Hibernate:
    insert
    into
        author
        (age, genre, name)
    values
        (?, ?, ?)
# Hibernate:
    insert
    into
        book
        (author_id, isbn, title)
    values
        (?, ?, ?)

# Delete a book of an author...
# Hibernate:
    select
        author0_.id as id1_0_0_,
        books1_.id as id1_1_1_,
        author0_.age as age2_0_0_,
        author0_.genre as genre3_0_0_,
        author0_.name as name4_0_0_,
        books1_.author_id as author_i4_1_1_,
        books1_.isbn as isbn2_1_1_,
        books1_.title as title3_1_1_,
        books1_.author_id as author_i4_1_0__,
        books1_.id as id1_1_0__
    from
        author author0_
    inner join
        book books1_
            on author0_.id=books1_.author_id
    where
        author0_.name=?
# Hibernate:
    delete
    from
        book
    where
        id=?

# Delete all book of an author...
# Hibernate:
    select
        author0_.id as id1_0_0_,
        books1_.id as id1_1_1_,
        author0_.age as age2_0_0_,
        author0_.genre as genre3_0_0_,
        author0_.name as name4_0_0_,
        books1_.author_id as author_i4_1_1_,
        books1_.isbn as isbn2_1_1_,
        books1_.title as title3_1_1_,
        books1_.author_id as author_i4_1_0__,
        books1_.id as id1_1_0__
    from
        author author0_
    inner join
        book books1_
            on author0_.id=books1_.author_id
    where
        author0_.name=?
# Hibernate:
    delete
    from
        book
    where
        id=?
# Hibernate:
    delete
    from
        book
    where
        id=?
```