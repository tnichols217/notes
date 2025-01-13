# Normalization

## Functional Dependencies

Where $\alpha,\beta$ are attributes of a relations $R$

$\alpha\to\beta\iff t_{1}[\alpha]=t_{2}[\alpha]\implies t_{1}[\beta]=t_{2}[\beta]$

This is notated as $\alpha$ determines $\beta$, where $\alpha$ is the determinant and $\beta$ is the dependent.

### Armstrong Axioms

#### Primary Rules

| Name         | Rule                                                   |
| ------------ | ------------------------------------------------------ |
| Reflexive    | $\beta\subseteq\alpha\implies\alpha\to\beta$           |
| Augmentation | $\alpha\to\beta\implies\alpha\gamma\to\beta\gamma$     |
| Transitivity | $\alpha\to\beta,\beta\to\gamma\implies\alpha\to\gamma$ |

#### Secondary Rules

| Name                 | Rule                                                               |
| -------------------- | ------------------------------------------------------------------ |
| Union, Decomposition | $\alpha\to\beta,\alpha\to\gamma\iff\alpha\to\beta\gamma$           |
| Composition          | $\alpha\to\beta,\gamma\to\delta\implies\alpha\gamma\to\beta\delta$ |
| Pseudo-transitivity  | $\alpha\to\beta,\gamma\beta\to\delta\implies\alpha\gamma\to\delta$ |

## Closures

A set of dependencies $F$ has a closure $F^{+}$ defined as the set of all possible dependencies that may be determined from $F$

### Canonical Cover

A canonical cover $F_{C}$ is a canonical cover of $F$ if:

1. $F$ can determine all dependencies in $F_{C}$ and vice versa
2. $F_{C}$ contains to extraneous dependencies
3. Each determinant is unique

An extraneous dependency is one that may be removed without effecting the closure of the set.

Normally, we attempt to make the canonical cover as concise and small as possible.

## Normal Forms

In a database there are usually up to 5-6 Normal Forms (NFs), in increasing level of strictness

| Normal Form | Requirements                                        |
| ----------- | --------------------------------------------------- |
| 1 NF        | All attributes must be atomic, and depend on the PK |
| 2 NF        | No partial dependencies                             |
| 3 NF        | No transitive dependencies                          |
| BC NF       | All determinants are part of the PK                 |
| 4 NF        |                                                     |
| 5 NF        |                                                     |

A partial dependency is when an attribute may be determined from part and not all of the PK.

A transitional dependency is when a dependency does not include the PK.

### 3rd to BCNF

The only time when a database will be 3NF and not BCNF is when one of the attributes are able to determine part of the PK.

For example:

$AB\to CD,C\to B$

We can swap $C$ and $B$ using the Armstrong Axioms

$AC\to BD,C\to B$

We can then separate the table $ABCD$ into two smaller tables.

$AC\to D,C\to B$

Where $T_{1}=ACD,T_{2}=BC$

## Types of decompositions

### Lossy

A decomposition can either be lossy or lossless.

The formal definition of having a lossless decomposition is that

$R_{1}\cap R_{2}\to R_{1}\text{ or }R_{2}$

Where $R_{1}$ and $R_{2}$ are decompositions of the original relation $R$ and all attributes are represented in $R_{1}\cup R_{2}$.

### Dependency Preservation

If the dependencies of all decomposed relations match all the same dependencies of the original relation, then it preserves dependencies.

This only happens if you do not decompose the relation across a dependency.

You can always guarantee to be able to get to the 3rd Normal Form while preserving dependencies, but not BCNF.
