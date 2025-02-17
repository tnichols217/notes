# Probabilistic Reasoning

## Bayesian Networks

1. Each node corresponds to a random variable
2. Directed links connect pairs of nodes
	1. Is a DAG, so no loops
3. Each node has associated probability information (**CPT** - Conditional Probability Table) $\theta(\text{Node}|\text{parents})$

- Represents a connection to every node in the network, working as another representation of the joint distribution

### Nodes

- Contains parents which are what are given to the node
- Each node contains probabilities for the domain of the distribution given the parents of the node

### Relationships between Nodes

1. **A->B** Direct Cause
	- $P(B|A)$
2. **A->B->C** Indirect Cause
	- $P(B|A)$
	- $P(C|B)$
	- $C$ is independent of $A$ given $B$
3. **B<-A->C** Common Cause
	- $P(B|A)$
	- $P(C|A)$
4. **A->C<-B** Common Effect
	- $P(C|A,B)$

### Probabilities of a state

$P(x_1,...,x_n)=\prod\limits_{i=1}^n\theta(x_i|\text{parents}(X_i))$
Where $\text{parents}$ are the values in the set of ${x_1,...,x_n}$ of the parents of the node.

- Can be proven that $\theta()=P()$

### Constructing a network

> [!def]
> **Chain rule**
> $P(x_1,...,x_n)$
> $=P(x_n|x_{n-1},...,x_1)P(x_{n-1}|x_{n-2},...,x_1)...P(x_2|x_1)P(x_1)$
> $=\prod\limits_{i=1}^nP(x_i|x_{i-1},...,x_1)$

1. Remove unrelated nodes
2. Attempt to order nodes in the order of causes to effects
3. For each node
	1. Find a minimal amount of related parent nodes
	2. Insert a link from parent to current node
	3. Create the conditional probability table
