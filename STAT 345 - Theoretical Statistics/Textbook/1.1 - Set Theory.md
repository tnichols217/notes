---
date created: 2023-09-18 19:11
date updated: 2023-09-18 19:11
---

# Set Theory

> [!def]
> **Sample Space**
> All possible outcomes of a variable, often denoted as **$S$**

Finite sample spaces can be denoted with all elements inside a list enclosed by curly braces.
$S=\{H,T\}$ for the sample space of flipping a coin

> [!def]
> **Event**
> An event is a group of possible outcomes which are a subset of $S$. Often probabilities are calculated by the event and not just an element of S
>
> $A\subset S\iff x\in A \implies x\in S$

## Set Identities and Theorems

### Containment

$A\subset B\iff x\in A \implies z\in B$

### Equality

$A=B\iff A\subset B\text{ and }B\subset A$

### Communicativity

$A\cup B=B\cup A$
$A\cap B=B\cap A$

### Associativity

$A\cup(B\cup C)=(A\cup B)\cup C$
$A\cap(B\cap C)=(A\cap B)\cap C$

### Distributivity

$A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$
$A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$

### DeMorgan's Laws

$(A\cup B)^C=A^C\cap B^C$
$(A\cap B)^C=A^C\cup B^C$
$(\bigcup\limits_{i=1}^\infty A_i^C)^C=\bigcap\limits_{i-1}^\infty A_i$
$(\bigcap\limits_{i=1}^\infty A_i^C)^C=\bigcup\limits_{i-1}^\infty A_i$
