
```mermaid
stateDiagram-v2
	ai: a
	state 2 <<choice>>
	af: a
	b2: b

	[*] --> ai
	ai --> 2
	2 --> b2
	af --> 2
	b2 --> 2
	2 --> af
	af --> [*]
```
^a

```mermaid
stateDiagram-v2
	state 2 <<choice>>
	a1: a
	b1: b

	[*] --> 2
	2 --> a1
	2 --> [*]
	2 --> b1
	a1 --> 2
	b1 --> 2
```
^b

```mermaid
stateDiagram-v2
	[*] --> a
	[*] --> b
	a --> b
	b --> a
	a --> [*]
	b --> [*]
	[*] --> [*]
```


```mermaid
stateDiagram-v2
	state 2 <<choice>>
	state 3 <<join>>
	a1: a
	b1: b
	a3: a
	b3: b
	a4: a
	b4: b

	[*] --> 2
	2 --> a1
	2 --> b1
	a1 --> 2
	b1 --> 2
	a1 --> a3
	a1 --> b3
	a3 --> 3
	b3 --> 3
	3 --> a4
	3 --> b4
	a4 --> [*]
	b4 --> [*]
```
^c

```mermaid
stateDiagram-v2
	state 1 <<choice>>
	state 2 <<choice>>
	state 3 <<choice>>
	state 4 <<choice>>
	a1: a
	a2: a
	a3: a
	a4: a
	b1: b
	b2: b
	b3: b
	
	[*] --> 1
	1 --> a1
	a1 --> 1
	1 --> b1
	b1 --> 2
	2 --> a2
	a2 --> 2
	2 --> b2
	b2 --> 3
	3 --> a3
	a3 --> 3
	3 --> b3
	b3 --> 4
	4 --> a4
	a4 --> 4
	4 --> [*]
```
^d


```mermaid
stateDiagram-v2
	s1: /\*
	s2: */
	q1: "
	q2: "
	n1: not "
	n2: not " or */
	state 1 <<choice>>
	state 2 <<choice>>
	[*] --> s1
	s1 --> 1
	1 --> q1
	q1 --> 2
	2 --> n1
	n1 --> 2
	2 --> q2
	q2 --> 1
	1 --> n2
	n2 --> 1
	1 --> s2
	s2 --> [*]
```
^c2

| State | Description     | $\epsilon$  | $"$         | $*/$        | $/*$        | $other$     |
| ----- | --------------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Start | Start           | $\emptyset$ | $\emptyset$ | $\{0\}$     | $\emptyset$ | $\emptyset$ |
| 0     | `/*`            | $\{1\}$     | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |
| 1     | Loop Point      | $\emptyset$ | $\{2\}$     | $\{3\}$     | $\{4\}$     | $\{4\}$     |
| 2     | `"`             | $\{5\}$     | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |
| 3     | `*/`            | $\{End\}$   | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |
| 4     | Not `"` or `*/` | $\{4\}$     | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |
| 5     | Loop Point      | $\emptyset$ | $\{7\}$     | $\{6\}$     | $\{6\}$     | $\{6\}$     |
| 6     | Not `"`         | $\{5\}$     | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |
| 7     | `"`             | $\{1\}$     | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |
| End   | End             | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ | $\emptyset$ |
^362


```mermaid
stateDiagram-v2
	state 2 <<choice>>
	state 3 <<choice>>
	a1: a
	b1: b

	[*] --> 2
	2 --> a1
	2 --> [*]
	2 --> b1
	a1 --> 3
	b1 --> 3
	3 --> 2
```
^b2

| State | Description | $\epsilon$  | $a$         | $b$         |
| ----- | ----------- | ----------- | ----------- | ----------- |
| Start | Start       | $\{0\}$     | $\emptyset$ | $\emptyset$ |
| 0     | Loop Start  | $\{End\}$   | $\{1\}$     | $\{2\}$     |
| 1     | `a`         | $\{3\}$     | $\emptyset$ | $\emptyset$ |
| 2     | `b`         | $\{3\}$     | $\emptyset$ | $\emptyset$ |
| 3     | Loop End    | $\{0\}$     | $\emptyset$ | $\emptyset$ |
| End   | End         | $\emptyset$ | $\emptyset$ | $\emptyset$ |
^b3

| NFA State           | DFA State | $a$ | $b$ | End |
| ------------------- | --------- | --- | --- | --- |
| $\{Start, 0, End\}$ | $\alpha$  | A   | B   | Yes |
| $\{1, 3, 0, End\}$  | A         | A   | B   | Yes |
| $\{2, 3, 0, End\}$  | B         | A   | B   | Yes |
^b4

| State | $a$ | $b$ | End |
| ----- | --- | --- | --- |
| Start | A   | B   | Yes |
| A     | A   | B   | Yes |
| B     | A   | B   | Yes |
^b5

```mermaid
stateDiagram-v2
	classDef bold font-weight:bold,
	start: Start
	A: A
	B: B
	
	class start bold
	class A bold
	class B bold
	
	start --> A
	start --> B
	A --> B
	B --> A

```
^b6
