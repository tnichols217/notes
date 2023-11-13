# Probabilistic Reasoning

## Bayesian Networks

1. Each node corresponds to a random variable
2. Directed links connect pairs of nodes
	1. Is a DAG, so no loops
3. Each node has associated probability information $\theta(\text{Node}|\text{parents})$

- Represents a connection to every node in the network, working as another representation of the joint distribution

### Nodes

- Contains parents which are what are given to the node
- Each node contains probabilities for the domain of the distribution given the parents of the node

### Probabilities of a state

$P(x_1,...,x_n)=\prod\limits_{i=1}^n\theta(x_i|\text{parents}(X_i))$
Where $\text{parents}$ are the values in the set of ${x_1,...,x_n}$ of the parents of the node.

- Can be proven that $\theta()=P()$

### Constructing a network

The ****
$P(x_1,...,x_n)=P(x_n|x_{n-1},...,x_1)P(x_{n-1}|x_{n-2},...,x_1)...P(x_2|x_1)P(x_1)$
