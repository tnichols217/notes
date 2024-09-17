| $CK$         | $SK$         | $K$ | $\to$     |
| ------------ | ------------ | --- | --------- |
|              |              | A   | A         |
|              |              | B   | A,B       |
| $\checkmark$ | $\checkmark$ | C   | A,B,C,D,E |
|              |              | D   | D         |
|              |              | E   | D,E       |
|              |              | AB  | A,B       |
|              | $\checkmark$ | AC  | A,B,C,D,E |
|              |              | AD  | A,D       |
|              | $\checkmark$ | AE  | A,B,C,D,E |
|              | $\checkmark$ | BD  | A,B,C,D,E |
|              | $\checkmark$ | BE  | A,B,C,D,E |
|              |              | DE  | D,E       |
|              | $\checkmark$ | ABD | A,B,C,D,E |
|              | $\checkmark$ | ABE | A,B,C,D,E |
|              | $\checkmark$ | BDE | A,B,C,D,E |
^1

```mermaid
erDiagram
    RATING {
        string rating PK
        string description
        integer minAge
    }
    GENRE {
        integer id PK
        string genre
        string description
    }
    MOVIE {
        integer id PK
        string title
        string ageRating FK
        integer genreId FK "?"
        integer actors FK "[]"
    }
    ACTOR {
	    integer id PK
	    string firstName
	    string lastName
	    string fullName "derived"
	    boolean isActive
	    date birthDate
    }
	MOVIE }|--|| RATING : "ageRating—rating"
	MOVIE }|--o| GENRE : "genreId—id"
	MOVIE }o--|{ ACTOR : "actors—id"
```
^2c

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR

subgraph MOVIE
movId[_id_]
movTitle[title]
movAgeRating[ageRating]
movGenreId[genreId]
movActors[actors]
end
subgraph RATING
ratingRating[_rating_]
ratingDescription[description]
ratingMinAge[minAge]
end
subgraph GENRE
genreId[_id_]
genreGenre[genre]
genreDescription[description]
end
subgraph ACTOR
actorId[_id_]
actorFirstName[firstName]
actorLastName[lastName]
actorIsActive[isActive]
actorBirthDate[birthDate]
end
movAgeRating --> ratingRating
movGenreId --> genreId
movActors --> actorId
```
^2b

```mermaid

flowchart LR

MOVIE[MOVIE]
movId((_id_))
movTitle((title))

MOVIE --- movId
MOVIE --- movTitle

RATING[RATING]
ratingRating((_rating_))
ratingDescription((description))
ratingMinAge((minAge))

RATING --- ratingRating
RATING --- ratingDescription
RATING --- ratingMinAge

GENRE[GENRE]
genreId((_id_))
genreGenre((genre))
genreDescription((description))

GENRE --- genreId
GENRE --- genreGenre
GENRE --- genreDescription

ACTOR[ACTOR]
actorId((_id_))
actorFirstName((firstName))
actorLastName((lastName))
actorIsActive((isActive))
actorBirthDate((birthDate))

ACTOR --- actorId
ACTOR --- actorFirstName
ACTOR --- actorLastName
ACTOR --- actorIsActive
ACTOR --- actorBirthDate

ageRating{{"Is assigned a"}}
genre{{"Is assigned a"}}
actors{{"Are assigned multiple"}}

MOVIE --"M"--> ageRating -.-> RATING
MOVIE --"M"--> genre --"1"--> GENRE
MOVIE --"N"--> actors --"M"--> ACTOR
```
^2d

```col-md

| MOVIES |       |           |         |         |
| ------ | ----- | --------- | ------- | ------- |
| id     | title | ageRating | genreId | actors  |
| 1      | Lost  | G         | 1       | [1,2,3] |
| 2      | Found | R         | 2       | [2,4,5] |


| RATING |             |        |
| ------ | ----------- | ------ |
| rating | description | minAge |
| G      | General     | 0      |
| R      | Restricted  | 18     |


| GENRE |        |                 |
| ----- | ------ | --------------- |
| id    | genre  | description     |
| 1     | rom    | Romance         |
| 2     | sci-fi | Science Fiction |


| ACTOR |           |          |          |            |
| ----- | --------- | -------- | -------- | ---------- |
| id    | firstName | lastName | isActive | birthDate  |
| 1     | John      | Doe      | true     | 1950-01-01 |
| 2     | Johnny    | Dohe     | true     | 1953-03-01 |
| 3     | Jon       | Do       | true     | 1959-02-01 |
| 4     | Jhon      | Dhoe     | false    | 1955-08-01 |
| 5     | Joe       | Dohn     | true     | 1952-04-01 |
| 6     | Joey      | Doey     | true     | 1957-01-01 |

```
^2e


```mermaid
erDiagram
    RATING {
        string rating PK
        string description
        integer minAge
    }
    GENRE {
        integer id PK
        string genre
        string description
    }
    MOVIE {
        integer id PK
        string title
        string ageRating FK
        integer genreId FK "[]"
        integer actors FK "[]"
    }
    ACTOR {
	    integer id PK
	    string firstName
	    string lastName
	    string fullName "derived"
	    boolean isActive
	    date birthDate
    }
	MOVIE }|--|| RATING : "ageRating—rating"
	MOVIE }|--|{ GENRE : "genreId—id"
	MOVIE }|--|{ ACTOR : "actors—id"
```
^2f

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR

subgraph MOVIE
movId[_id_]
movTitle[title]
movAgeRating[ageRating]
movGenreId[genreId]
movActors[actors]
end
subgraph RATING
ratingRating[_rating_]
ratingDescription[description]
ratingMinAge[minAge]
end
subgraph GENRE
genreId[_id_]
genreGenre[genre]
genreDescription[description]
end
subgraph ACTOR
actorId[_id_]
actorFirstName[firstName]
actorLastName[lastName]
actorIsActive[isActive]
actorBirthDate[birthDate]
end
movAgeRating --> ratingRating
movGenreId --> genreId
movActors --> actorId
```
^2g

```mermaid

flowchart LR

MOVIE[MOVIE]
movId((_id_))
movTitle((title))

MOVIE --- movId
MOVIE --- movTitle

RATING[RATING]
ratingRating((_rating_))
ratingDescription((description))
ratingMinAge((minAge))

RATING --- ratingRating
RATING --- ratingDescription
RATING --- ratingMinAge

GENRE[GENRE]
genreId((_id_))
genreGenre((genre))
genreDescription((description))

GENRE --- genreId
GENRE --- genreGenre
GENRE --- genreDescription

ACTOR[ACTOR]
actorId((_id_))
actorFirstName((firstName))
actorLastName((lastName))
actorIsActive((isActive))
actorBirthDate((birthDate))

ACTOR --- actorId
ACTOR --- actorFirstName
ACTOR --- actorLastName
ACTOR --- actorIsActive
ACTOR --- actorBirthDate

ageRating{{"Is assigned a"}}
genre{{"Is assigned a"}}
actors{{"Are assigned multiple"}}

MOVIE --"M"--> ageRating --> RATING
MOVIE --"M"--> genre --"M"--> GENRE
MOVIE --"M"--> actors --"M"--> ACTOR
```
^2h

```col-md

| MOVIES |       |           |         |         |
| ------ | ----- | --------- | ------- | ------- |
| id     | title | ageRating | genreId | actors  |
| 1      | Lost  | G         | [1,2]   | [1,2,3] |
| 2      | Found | R         | [2]     | [2,4,5] |


| RATING |             |        |
| ------ | ----------- | ------ |
| rating | description | minAge |
| G      | General     | 0      |
| R      | Restricted  | 18     |


| GENRE |        |                 |
| ----- | ------ | --------------- |
| id    | genre  | description     |
| 1     | rom    | Romance         |
| 2     | sci-fi | Science Fiction |


| ACTOR |           |          |          |            |
| ----- | --------- | -------- | -------- | ---------- |
| id    | firstName | lastName | isActive | birthDate  |
| 1     | John      | Doe      | true     | 1950-01-01 |
| 2     | Johnny    | Dohe     | true     | 1953-03-01 |
| 3     | Jon       | Do       | true     | 1959-02-01 |
| 4     | Jhon      | Dhoe     | false    | 1955-08-01 |
| 5     | Joe       | Dohn     | true     | 1952-04-01 |

```
^2i