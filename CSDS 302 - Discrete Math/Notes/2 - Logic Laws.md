# Logic Laws

1. Communicative
	1. $p\lor q\iff q\lor p$
	2. $p\land q\iff q\land p$
2. Associative
	1. $(p\lor q)\lor r\iff p\lor (q\lor r)$
	2. $(p\land q)\land r\iff p\land (q\land r)$
3. Distributive
	1. $p\land(q\lor r)\iff(p\land q)\lor(p\land r)$
	2. $p\lor(q\land r)\iff(p\lor q)\land(p\lor r)$
4. Identity
	1. $p\lor\mathbf c\iff p$
	2. $p\land\mathbf t\iff p$
5. Negation
	1. $p\land\lnot p\iff\mathbf c$
	2. $p\lor\lnot p\iff\mathbf t$
6. Involution
	1. $\lnot\lnot p\iff p$
7. Idempotent
	1. $p\land p\iff p$
	2. $p\lor p\iff p$
8. Universal Bound Law
	1. $p\land\mathbf c\iff \mathbf c$
	2. $p\lor\mathbf t\iff \mathbf t$
9. De Morgan's Laws
	1. $\lnot(p\lor q)\iff\lnot p\land\lnot q$
	2. $\lnot(p\land q)\iff\lnot p\lor\lnot q$
10. Absorption Law
	1. $p\land(p\lor q)\iff p$
	2. $p\lor(p\land q)\iff p$

# Implications

1. Conditional Equivalence
	1. $p\to q\iff\lnot p\lor q$
2. Chain Rule
	1. $(p\to q)\land(q\to r)\implies(p\to r)$
3. Detachment — Modus Ponens
	1. $(p\to q)\land p\implies q$
4. Indirect Reasoning — Modus Tollens
	1. $(p\to q)\land\lnot q\implies \lnot p$
5. Conjunction
	1. $p$
	2. $q$
	3. $p\land q$

# Contraposition

$p\to q$

1. Inversion
	1. $\lnot p\to\lnot q$
2. Conversion
	1. $q\to p$
3. Negation
	1. $\lnot(p\to q)$
	2. $p\land\lnot q$
4. Contraposition
	1. $\lnot q\to\lnot p$

# Special Cases

1. Generalization
	1. $p\therefore p\lor q$
2. Specialization
	1. $p\land q\therefore q$
3. Division by cases
	1. $p\lor q,\quad p\to r,q\to r\qquad\therefore r$

# Statements


> [!def]
> **Statement**
> A statement is any declarative sentence which is either true or false
> 
> **Argument**
> A set of initial statements, called premises, followed by a conclusion
> An argument is valid if all true premises are true leading to a true conclusion 

