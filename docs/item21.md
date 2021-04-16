---
title: 项 21：如何使用直接获取
---

如果已知一个实体的标识符并且在当前的持久化上下文中不会导航到它的延迟关联，那么获取实体的最佳方式就是 **直接获取**。

默认情况下，直接获取会根据默认的或指定的 `FetchType` 载入实体。你始终要记得，默认情况下，JPA 的 `@OneToMany` 和 `@ManyToMany` 关联都是 **LAZY** 型的，而 `@OneToOne` 和 `@ManyToOne` 关联却是 **EAGER** 型的。

所以，通过 ID 获取一个实体，如果它有 **EAGER** 关联，即使用不到这个关联，它也会被载入到当前的持久化上下文中，而这会导致性能问题。同样，如果获取的实体有 **LAZY** 型的关联，一旦在当前持久化上下文中访问了这个关联，就会触发额外的查询，而这同样又导致了性能问题。

:::note
最好的方式就是所有 **LAZY** 型的关联依赖于手动获取策略（参见 [项 39]，[项 41]，[项 43]）。仅在不打算在当前持久化上下文中访问这些 **LAZY** 型的关联的时候，才使用直接获取。
:::

我们看一下使用多种方式根据 ID 来获取一个实体。以下面的 `Author` 实体为例：

```java
@Entity
public class Author implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Integer age;

  private String name;

  private String genre;

  // 省略 getter 与 setter

}
```

下面的三个例子就是使用直接获取载入 ID 为 `1` 的实体。

## 使用 Spring Data 获取

定义 `AuthorRepository` 类型：

```java
@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {}
```

使用 Spring Data 内建的 `findById()` 方法：

```java
Optional<Author> author = authorRepository.findById(1L);
```

生成的 SQL `SELECT` 语句：

```sql
select
    author0_.id as id1_0_0_,
    author0_.age as age2_0_0_,
    author0_.genre as genre3_0_0_,
    author0_.name as name4_0_0_
from
    author author0_
where
    author0_.id=?
```

## 使用 EntityManager 获取

`EntityManager` 可以通过 `@PersistenceContext` 注入。

```java
@PersistenceContext
private EntityManager entityManager;

@Override
public Optional<T> find(Class<T> clazz, ID id) {
  if (id == null) {
    throw new IllegalArgumentException("ID cannot be null");
  }
  return Optional.ofNullable(entityManager.find(clazz, id));
}
```

生成的 SQL 语句同上。

## 使用 Hibernate Session 获取

使用 Hibernate 的 `Session.get()` 方法，我们需要将 `Session` 从 `EntityManager` 中解封装：

```java
@PersistenceContext
private EntityManager entityManager;

@Override
public Optional<Author> findViaSession(Class<Author> clazz, Long id) {
  if (id == null) {
    throw new IllegalArgumentException("ID can not be null");
  }

  Session session = entityManager.unwrap(Session.class);
  return Optional.ofNullable(session.get(clazz, id));
}
```

生成的 SQL 语句也同上。

:::note
JPA 持久化实现方（Hibernate）通过 `findById()`，`find()`，`get()` 方法获取实体的时候，查找顺序是：

- 当前持久化上下文（如果没有找到，执行下一步）。
- 二级缓存（如果没有找到，执行下一步）。
- 数据库。

这个顺序会严格遵循。
:::

## 直接获取和会话级可重复读

## 通过 ID 直接获取多个实体