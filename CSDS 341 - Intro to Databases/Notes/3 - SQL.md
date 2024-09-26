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

### Table Definition

The basic table creation query is structured as:

```SQL
CREATE TABLE tablename
	(attr1   type
	attr2    type NOT NULL
	attr3    type NOT NULL
	<constraints>
	PRIMARY KEY (attr1)
	FOREIGN KEY (attr2) references tablename2;
	FOREIGN KEY (attr3) references tablename2(attr3));
```

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

### Attribute Properties and Constraints

#### IDENTITY

When creating a table, you are able to specify an attribute to be an `IDENTITY`, where its values will be automatically generated upon adding a tuple to the table

It takes two arguments: $(\text{seed},\text{increment})$

```SQL
CREATE TABLE tablename
	(attr1   int IDENTITY (500, 1))
```

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

### String Operations

