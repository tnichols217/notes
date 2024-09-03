# Intro to Databases and SQL

> [!Def]
> **Database**: An organised structure of information or data — typically stored on a computer system.
> 
> **Database Management System**: A set of interrelated data and sets of APIs/programs to interact with it.

## Anomalies

1. **Insert**: A tuple or row could not be inserted due to Nulls.
2. **Delete**: Linked data has been lost unintentionally
3. **Update**: A single update requires multiple operations to complete.

## ACID

ACID is a set of principles that all tranactions within a 

1. **A**tomicity: Transactions will either complete or fail completely, with no half completions
2. **C**onsistency: The database must be consistent before and after a transaction
3. **I**solation: Transactions should not interfere with each other
4. **D**urability: No data loss even after a failure

## Data Modelling

Data modelling is using tools in order to organise and store data in a meaningful way.

Often this includes storing the actual data with constraints, as well as relations between data

There are multiple techniques to modelling data:
1. Relational (Most common for SQL databases)
2. Entity-relationship
3. Object-based
4. Semi-structured/unstructured (JSON...)

## Data Abstractions

### Physical Level

The physical level of data abstraction is the actual data, the order its stored in and its composition in bytes

The independence of the physical level implies that the schema or storage technique may change without the other levels being effected by it.

### Logical Level

The logical level of data abstraction handles the types of sub fields, and the relation between multiple pieces of data within a database.

The independence of the logical level means that when data is changed, updated, or removed, the logical structure of the database as a whole is not compromised.

### View Level

The actual data that gets used when presenting data in a certain way, whether it be on a website or in reports. Often times, data will be redacted before being sent to a client to protect secrets and confidential data.

## SQL

SQL (sometimes pronounced sequel), standing for Structured Query Language, is a language that standardizes the updating, creating, and querying of data from databases. Some DBMS's may use an SQL like query, but the main ideas remain the same.

SQL is made up of two "sub" languages — DDL and DML

### DDL

DDL (Data Definition Language) is a part of SQL that focuses on the definition of database logic, relations, constraints, and view security

DDL queries or updates will update the **data dictionary** (metadata) of a database system, which holds rules, relationships, and types for databases.

The data dictionary stores metadata such as
- DB schemas
- Integrity Constraints
- Authorization

### DML

DML (Data Manipulation Language) is the other part of SQL that focuses on the updating, retrieval, deletion, and reorganization of data within a database without effecting its core logic.

### Accessing SQL data from applications

Most SQL servers/databases do not offer expansive data protection/security features, and as such you should **never** let front-end users have direct access to databases.

Updating, retrieving, or deleting data should be done though a secured, trusted API that you control, in order to check permissions and data integrity before updating a database. 

## DBMS's

DBMS's are intended to provide access to databases while maintaining their core functions and reliability. Their requirements include:

- Data Redundancy
- Data Inconsistency
- Accessing data
- Data Isolation
- Integrity Problems
- Atomicity Problems
- Concurrent Access
- Security Problems

Different concerns of the DBMS are often separated into different functional components, such as the:
1. Storage manager
2. Query processing manager
3. Transaction management component

### Storage Manager

The storage manager is in charge of:
- Interacting with OS-level files
- Storing data efficiently and quickly
- Transaction, file, buffer, and authority management

### Query Processing Manager

The Query processor will need to
- Update metadata based on DDL
- Compile DML intro a set of instructions
- Optimize a evaluation plan from DML
- Execute an evaluation plan on the actual data

### Transaction management

A transaction is a set of instructions that define an update to the data in a database

The transaction management need to ensure that the database:
- Maintains data integrity even after system failure
- Controls and manages concurrent transactions to prevent conflicts
