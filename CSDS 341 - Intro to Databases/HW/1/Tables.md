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
    }
    ACTOR {
	    integer id PK
	    string firstName
	    string lastName
	    string fullName "()"
	    boolean isActive
	    date birthDate
    }
	MOVIE }|--|| RATING : "ageRating—rating"
	MOVIE }|--o| GENRE : "genreId—id"
	MOVIE }o--|{ ACTOR : "MOVIEACTOR"
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
subgraph MOVIEACTOR
movieactorMovieId[movieId]
movieactorActorId[actorId]
end
movieactorMovieId --> movId
movieactorActorId --> actorId
movAgeRating --> ratingRating
movGenreId --> genreId
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
actors --> movieId1((movieId))
actors --> actorId1((actorId))
```
^2d

```col-md

| MOVIES |       |           |         |
| ------ | ----- | --------- | ------- |
| id     | title | ageRating | genreId |
| 1      | Lost  | G         | 1       |
| 2      | Found | R         | 2       |


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


| MOVIEACTOR |         |
| ---------- | ------- |
| movieId    | actorId |
| 1          | 1       |
| 1          | 2       |
| 1          | 3       |
| 2          | 2       |
| 2          | 4       |
| 2          | 5       |
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
        integer genreId FK "?"
    }
    ACTOR {
	    integer id PK
	    string firstName
	    string lastName
	    string fullName "()"
	    boolean isActive
	    date birthDate
    }
	MOVIE }|--|| RATING : "ageRating—rating"
	MOVIE }|--|{ GENRE : "MOVIEGENRE"
	MOVIE }|--|{ ACTOR : "MOVIEACTOR"
```
^2f

```mermaid
%%{ init: { 'flowchart': { 'curve': 'stepBefore', "defaultRenderer": "elk" } } }%%
flowchart LR

subgraph MOVIE
movId[_id_]
movTitle[title]
movAgeRating[ageRating]
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
subgraph MOVIEACTOR
movieactorMovieId[movieId]
movieactorActorId[actorId]
end
subgraph MOVIEGENRE
moviegenreMovieId[movieId]
moviegenreGenreId[GenreId]
end
moviegenreMovieId --> movId
moviegenreGenreId --> genreId
movieactorMovieId --> movId
movieactorActorId --> actorId
movAgeRating --> ratingRating
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
genre --> movieId((movieId))
genre --> genreId1((genreId))
MOVIE --"N"--> actors --"M"--> ACTOR
actors --> movieId1((movieId))
actors --> actorId1((actorId))
```
^2h

```col-md

| MOVIES |       |           |
| ------ | ----- | --------- |
| id     | title | ageRating |
| 1      | Lost  | G         |
| 2      | Found | R         |


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


| MOVIEACTOR |         |
| ---------- | ------- |
| movieId    | actorId |
| 1          | 1       |
| 1          | 2       |
| 1          | 3       |
| 2          | 2       |
| 2          | 4       |
| 2          | 5       |


| MOVIEGENRE |         |
| ---------- | ------- |
| movieId    | actorId |
| 1          | 1       |
| 1          | 2       |
| 2          | 2       |

```
^2i
