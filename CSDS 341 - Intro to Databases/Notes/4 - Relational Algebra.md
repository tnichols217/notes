# Relational Algebra

## Select $\sigma$

Often represented as $\sigma_a(t)$

The select operator filters all tuples from a table by a particular predicate.

The predicate is often the subscript of the operator, such as:

$\sigma_{attribute=a}(table)$

In SQL, this is more commonly known as the $\text{WHERE}$ clause, for example:

```SQL
SELECT * FROM table WHERE attribute="a";
```

## Project $\Pi$

Often represented as $\Pi_a(t)$

The project operator selects attributes of tuples to return, instead of returning them all.

The predicate is also in the subscript of the operator

$\Pi_{attr1,attr2}(table)$

In SQL, this is more commonly known as the $\text{SELECT}$ clause

```SQL
SELECT attr1, attr2 FROM tablename;
```

## Cartesian Product $\times$

The Cartesian product, represented as $t\times t$, takes all combinations of tuples in one table with all tuples in another table.

$table1\times table2$

Would return a number of tuples equal to the product of the number of tuples in the two tables, as every combination between the two tables are tuples in the output.

In SQL, the Cartesian product is implied when selecting from multiple tables or using the $\text{JOIN}$ clause

```SQL
SELECT table1.*, table2.* FROM table1, table2;
SELECT table1.attr1, table2.attr2 FROM table1 JOIN table2 ON table1.t2=table2.t1;
```

## Join $\Join$

The binary join operation is denoted with $t\Join_{a}t$, with a relational predicate in the subscript.

$table1\Join_{table1.attr1=table2.attr2}table2$

The join operation is a combination of the Cartesian product and a condition through an $\text{ON}$ clause or a $\text{WHERE}$ clause

This operation is equivalent with 

$\sigma_{table1.attr1=table2.attr2}(table1\times table2)$

### Types of Joins

| Type  | Symbol  |
| ----- | ------- |
| Inner | $\Join$ |
| Left  | $⟕$     |
| Right | $⟖$     |
| Full  | $⟗$     |

![[3 - SQL#^joins]]

Natural joins simply do not have anything in their subscript.

## Assignment $\leftarrow$

The assignment operator, represented as $v\leftarrow n$, creates a variable with that name, storing a value.

$variable \leftarrow 1$

In SQL, this would be the equivalent of a variable, temporary table, or table variable

```SQL
DECLARE @FloatVar AS FLOAT = 12312.1232;
```

Temporary tables must begin with $\#$, with global temporary tables starting with $\#\#$. Temporary tables support all the same features a normal table would, but would only last for the session the table was created in.

```SQL
SELECT attribute INTO #temporary_table FROM tablename
```
Table variables are variables that are tables (namely). Table variables may be treated like a normal table mostly. They do not support all the SQL functions that a regular table would have, but is useful for small amounts of data.

```SQL
DECLARE @TABLE_VAR TABLE
(column_1 DATATYPE, 
 column_2 DATATYPE, 
 column_N DATATYPE
)
```

## Rename $\rho$

Represented as $\rho_{a(b)}(t)$, rename selects the $b$ attributes from table $t$ and renames them as $a$

$\rho_{t2(attr1, attr2)}(table)$

In SQL, this would be the $\text{AS}$ clause, where you can call attributes or tables by a different name.

```SQL
SELECT attr1, attr2 AS newattr FROM tablename;
SELECT a.attr1, b.attr2 FROM tablename AS a, tablename AS b;
```
## Operations

All the same arithmetic operations available in SQL are also available

All the same comparison operations are also available, however `<>` is often stylised as `!=` instead

### Boolean Operators

| Symbol  | Meaning |
| ------- | ------- |
| $\lnot$ | `NOT`   |
| $\land$ | `AND`   |
| $\lor$  | `OR`    |

### Set Operators

Set operators allow you to join multiple selections together.

This is not a recommended way of doing operations as you have no guarantee that the two operations are of compatible values, instead do your logic within your select statement

| Symbol             | Meaning                                                    |
| ------------------ | ---------------------------------------------------------- |
| $\cup$             | Joins two selections                                       |
| $\cap$             | Takes only rows that are in both selections                |
| $\setminus$ or $-$ | Removes the second argument's rows from the first argument |
