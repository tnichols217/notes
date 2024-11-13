# Entities

An entity is the concept of a row in a specific table.

## Properties of existence

An entity is **dependent** upon another entity if it has a `NOT NULL` `FOREIGN KEY` constraint, meaning something else must exist in order for this entity to exist. A dependent entity is considered **weak** if part of its `PRIMARY KEY` is a `FOREIGN KEY`

If it does not necessarily depend on another entity, then it is considered an **independent** entity. This is also known as **strong** or **regular**.

## Degree of Relationship

A relationship is considered **unary** if a table references itself. It is also known as a **recursive** relationship.

A **binary** relationship is a relationship between two tables. This may include a third table if this is a many-to-many relationship.

A **ternary** relationship should be fairly self explanatory at this point. There most likely will require a fourth table to manage the relation.

## Partitipation

**Total participation** means that any all of an entity must contribute to the relationship.
**Partial participation** means it may be possible that an entity if that type does not participate in at least one relationship.

## Inheritance Design

There are two methods of inheritance design: specialization and generalization.

### Specialization

Specialization is a method of starting generally and specializing the design of your tables. This is considered a top-down approach.

1. Begin with a table or entity that can represent your wanted data
2. Create 'sub-tables' that contain additional information about specific information for this group of data.
3. Continue until all the information you want represented is represented

For example:

Begin with `person`, at a university you may split this into `student`, `employee`, `professor`, and `advisor`. These three sub-tables may have different values associated with them, like `GPA` for student or `pay` for employees. Both professors and advisors 'inherit' from `employee`, but maybe professors have data that advisors wouldn't have.

A way of designing this database would be:

$person(id, name)$
$student(pID, GPA)$
$employee(pID, pay)$
$professor(pID, department)$
$advisor(pID,years)$

This way each person has their respective data associated with them.

### Generalization

Generalization is essentially the opposite of specialization. It is considered a bottom-up approach.

1. You begin with tables for all the data you want to represent
2. Find things these tables have in common and generalize a table to hold that information.
3. Repeat until you cannot generalize further.
