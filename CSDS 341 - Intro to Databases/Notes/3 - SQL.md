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

