# SQL Basics

SQL, standing for Structured Query Language, is a standardised way to interact to databases through SQL queries or definitions.

SQL is able to query, change, delete, or create data, whilst also having the ability to define permission control, restraints, and relations.

SQL is broken down into two "sub"-languages, Data definition language (DDL) and Data manipulation language (DML).

## DDL

SQL DDL exists to define:
- schemas for relations
- types for attributes
- constraints within a database and attributes
- permission control
- how to store data

### DDL Data Types

- **char(n)**/**character(n)**: A fixed length string with length of $n$
- **varchar(n)**: A variable length string with maximum length of $n$
- **int**/**integer**: An integer, size depends on host platform
- **smallint**: A small/short integer, size also depends on host platform
- **numeric(p,d)**: A fixed-point number, with $p$ total digits, of which $d$ are right of the point
- **real**: A floating-point number, size/precision depends on host platform
- **double precision**: A double floating-point number, size/precision depends on host platform
- **float(n)**: A floating-point number with at least $n$ digits of precision
- **date**: A calendar date containing a 4-digit year, month, and day
- **time(p?)**: A time of day, in hours, minutes, and seconds
	- $p$ being optional, specifying a value will define the number of decimal places to store for the seconds field
- **timestamp(p?)**: A combo of date and time (surprise). Additionally stores timezone information. The $p$ argument functions the same as for time
- **clob(s)**: Character data with maximum size of $s$
- **blob(s)**: Binary data with maximum size of $s$

#### User-defined types

##### CREATE TYPE

Types in SQL are strongly typed and only explicitly casted from one type to another

```SQL
CREATE TYPE typename AS numeric(12, 2) FINAL
```

Type creation is highly dependant on the DBMS, some support tables, arrays, or enums as types.

`DROP TYPE` and `ALTER TYPE` are also valid commands to edit types

##### CREATE DOMAIN\

Domains are optional restrictions for a row type, and are once again highly dependant on the DBMS

```SQL
CREATE DOMAIN domainname AS typename <attribute constraints>
```

An example of constraints could be:

```SQL
CREATE DOMAIN domainname AS typename NOT NULL
CONSTRAINT checkname CHECK(value >= 10)
```

Where `value` is the value in the domain

### Table Definition

The basic table creation query is structured as:

```SQL
CREATE TABLE tablename
	(attr1   type <attribute constraints>
	attr2    type NOT NULL
	attr3    type NOT NULL UNIQUE
	<table constraints>
	PRIMARY KEY (attr1)
	FOREIGN KEY (attr2) REFERENCES tablename2;
	FOREIGN KEY (attr3) REFERENCES tablename2(attr3));
```

Some DBMSes also allow you to specify tables from another table

```SQL
CREATE TABLE tablename LIKE othertable
```

#### Constraints

Not all constraints are covered in this section, as they are highly DBMS specific, but the few most common ones are listed below

##### Attribute Constraints

| Constraint       | Meaning                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `NOT NULL`       | Values for this column may not be `NULL`                                                                                       |
| `UNIQUE`         | Values for this column may not be equivalent with any other value within this column                                           |
| `DEFAULT`        | Set the default value for a column when it is not explicitly defined                                                           |
| `AUTO_INCREMENT` | Differs depending on the DBMS you are using, but automatically generates values for this column sometimes based off parameters |

###### AUTO_INCREMENT

The `s` argument is the starting value for the series, and the `i` argument is what to increment the value by

| DBMS       | AUTO INCREMENT                        |
| ---------- | ------------------------------------- |
| MS-SQL     | `IDENTITY(s, i)`                      |
| Access     | `AUTOINCREMENT(s, i)`                 |
| MySQL      | `AUTO_INCREMENT`                      |
| PostgreSQL | `SMALLSERIAL`, `SERIAL`, `BIGSERIAL`* |

For PostgreSQL, these arguments take the place of the type of the row. Instead of using `INT AUTO_INCREMENT`, use `SERIAL` instead

##### Table Constraints

| Constraint    | Meaning                                               |
| ------------- | ----------------------------------------------------- |
| `PRIMARY KEY` | Combines `NOT NULL` and `UNIQUE`                      |
| `FOREIGN KEY` | Prevents the DBMS from breaking relations             |
| `CHECK`       | Ensures the following conditions are always held true |

###### PRIMARY KEY

Marks this column as the primary key of a table, which also requires the column to be `NOT NULL` and `UNIQUE`

```SQL
CREATE TABLE tablename
	(attr1   type
	PRIMARY KEY (attr1));
```

###### FOREIGN KEY

The `FOREIGN KEY` table constraint may also have a `REFERENCES` argument, telling which table and column it is referencing:

```SQL
CREATE TABLE tablename
	(attr1   type
	FOREIGN KEY (attr1) REFERENCES tablename2(attr1));
```

###### CHECK

Ensures that a certain column always abides by the conditions set in this predicate

Depending on the DBMS, this may be an attribute or table constraint

```SQL
CREATE TABLE tablename
	(attr1   type
	CHECK (attr1 IN ('a', 'b')));
```

Any logical operator is valid

### Table Modification

To delete all tuples in a table:

```SQL
DELETE FROM tablename;
```

To add attributes to a table:

```SQL
ALTER TABLE tablename ADD COLUMN attr1 type;
```

To remove attributes from a table:

```SQL
ALTER TABLE tablename DROP COLUMN attr1;
```

To change the type of the attribute in a table:

```SQL
ALTER TABLE tablename ALTER COLUMN attr1 type;
```

### Table Deletion

To delete an entire table:

```SQL
DROP TABLE tablename;
```

### CREATE INDEX

Indexes accelerate lookups on a particular attribute

```SQL
CREATE INDEX indexname ON tablename(attr1)
```

If an attribute is unique, we may also use the `UNIQUE` attribute to accelerate it further

```SQL
CREATE UNIQUE INDEX indexname ON tablename(attr1)
```

`DROP INDEX` may also be used to remove indexes.

### Authorization

# TODO

## SQL

### FROM

The `FROM` command specifies which tables this query will be querying from

```SQL
SELECT * FROM tablename
```

### SELECT

The `SELECT` command chooses which columns to return from a table/tables.

```SQL
SELECT attr1 FROM tablename
```

`SELECT` supports arithmetic within the arguments as well.

```SQL
SELECT attr1 * 1.1 FROM tablename
```

All basic arithmetic operations are supported: `+`, `-`, `*`, `/`

`SELECT` also supports specifying `SELECT DISTINCT` or `SELECT ALL`, where only unique tuples or all tuples will be returned

```SQL
SELECT DISTINCT attr1 FROM tablename;
SELECT ALL attr1 FROM tablename;
```

### WHERE

The `WHERE` command specifies a condition to filter out tuples from the selection.

```SQL
SELECT attr1 FROM tablename WHERE attr2 > 5;
```

The other comparison operators include: `<`, `<=`, `>`, `<=`, `=`, `<>`
Boolean operators also include `AND`, `OR`, `NOT`

```SQL
SELECT attr1 FROM tablename WHERE attr2 > 5 AND attr3 = "name";
```

#### Multiple tables

You can query multiple tables simultaneously and use a `WHERE` clause to filter to have reasonable tuples

```SQL
SELECT tablename.attr1, tablename2.attr2
FROM tablename, tablename2
WHERE tablename.attr3 = tablename2.attr3;
```

### AS

The `AS` command renames a column to something else for a query

```SQL
SELECT attr1, attr1 * 1.1 AS attr1more FROM tablename
```

### INSERT

In order to add a tuple into a table:

```SQL
INSERT INTO tablename (
	attr1, attr2, attr3
) VALUES (
	"val1", "val2", "val3"
);
```

To insert from another query, you may select:

```SQL
INSERT INTO tablename (
	attr1, attr2, attr3
) SELECT a.attr1, b.attr2, a.attr3
FROM tablenamea as a, tablenameb as b
WHERE a.attr1 = b.attr1
```

### UPDATE

To update values in tuples:

```SQL
UPDATE tablename
SET attr1 = attr1 + 5
WHERE attr1 > (
	SELECT AVG(attr1) FROM tablename
)
```

### DELETE

To delete tuples from a table:

```SQL
DELETE FROM tablename
WHERE attr = "value";
```

### ORDER BY

You may specify columns to order the result by, with the first column taking precedence:

```SQL
SELECT * FROM tablename
ORDER BY attr1, attr2;
```

You may also specify a direction to sort it in

```SQL
SELECT * FROM tablename
ORDER BY attr1, attr2 DESC;

SELECT * FROM tablename
ORDER BY attr1, attr2 ASC;
```

### GROUP BY

You may group your selection via a column, this is useful for conditional aggregation

```SQL
SELECT * FROM tablename
GROUP BY attr1, attr2;
```

Multiple groups may be specified, by which each group will only contain items that all have the same attributes of which the columns are grouped by.

#### HAVING

You may use the `HAVING` clause to filter out particular groups

```SQL
SELECT * FROM tablename
GROUP BY attr1
HAVING AVG(attr2) > 100;
```

### Operations

#### Arithmetic Operations

The 5 most common operations in SQL are

| Operator | Definition     |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Modulus        |

Any operation involving `NULL` will also return `NULL`

#### Comparison Operators

| Operator | Definition       |
| -------- | ---------------- |
| `=`      | Equals           |
| `<>`     | Not equals       |
| `>`      | Greater than     |
| `>=`     | Greater or equal |
| `<`      | Less than        |
| `<=`     | Less or equal    |

Any operation involving `NULL` will also return `NULL`

#### Logical Operations

| Operator  | Type                                    | Definition                                                                                             |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `AND`     | bool, bool                              | `TRUE` if both Boolean expressions are `TRUE`, `FALSE` if either argument is `FALSE`, `NULL` otherwise |
| `IN`      | a, array(a)                             | `TRUE` if the first argument is in the second argument                                                 |
| `NOT`     | bool                                    | Inverts the argument, `NULL` if `NULL`                                                                 |
| `OR`      | bool, bool                              | `TRUE` if either Boolean expression is `TRUE`, `FALSE` if both arguments are `FALSE`, `NULL` otherwise |
| `LIKE`    | string, pattern                         | `TRUE` if the operand matches a pattern                                                                |
| `BETWEEN` | number, range                           | `TRUE` if the operand is within a range                                                                |
| `ALL`     | array or selection                      | `TRUE` if all of an array or selection is `TRUE`                                                       |
| `ANY`     | array or selection                      | `TRUE` if any of an array or selection `TRUE`                                                          |
| `EXISTS`  | array or selection                      | `TRUE` if an array or selection is non-empty                                                           |
| `SOME`    | comparison operator, array or selection | `TRUE` if any item within the array or selection satisfies the comparison                              |

##### BETWEEN

The `BETWEEN` operator requires specifying a range as its second argument, which is defined as `a AND b`

```SQL
SELECT * FROM tablename WHERE id BETWEEN 0 AND 100;
```

### Functions

#### Aggregate Functions

| Function | Definition                                  |
| -------- | ------------------------------------------- |
| `MIN`    | Returns the smallest in the column or array |
| `MAX`    | Returns the largest in the column or array  |
| `COUNT`  | Returns the number of elements or rows      |
| `SUM`    | Returns the total of a column               |
| `AVG`    | Returns the average of a column             |

#### String Operations

# TODO