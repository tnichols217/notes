---
date created: 2023-11-05 21:38
date updated: 2023-11-05 22:40
---

# Quantifying Uncertainty

## Belief States

> [!def]
> **Belief State**
> A representation of all possible world states with likelihoods for all of them

- Expensive to compute
- Only likely to be used for small systems

## Decision Making

- Sometimes there is no "correct" answer or path
- Sometimes there is a **qualification problem** where there are factors hard to explain
- Decisions must still be made by the system based on rationality

## Summarizing Uncertainty

> [!def]
> **Probability Theory**
> A way to represent likelihoods of current states from a limited amount of information about the environment

- Explaining an effect from a list of causes can also be impossible
  - Must be represented with rules of uncertainty
  - Failure to correctly identify an effect could stem from
    - Laziness
    - Theoretical Ignorance
    - Practical Ignorance
- **Degrees of belief** must be used to represent likely effects from causes using probability theory

## Rational Decisions

> [!def]
> **Utility Theory**
> A way to represent preferences based on their **relative** usefulness to each other.
>
> ---
>
> **Decision Theory**
> Probability Theory + Utility Theory

- Rational Decisions are ones use the **Maximum expected utility** of a state.

## Probability Lingo

> [!def]
> **Marginal Probability**
> Probability of a particular trait across all possible other trait combinations
>
> ---
>
> **Marginalization**
> Summing individual probabilities to get a marginal probability
>
> ---
>
> **Conditioning**
> Representing $P(X\cap Y)$ as $P(X|Y)P(Y)$
>
> ---
>
> **Independence**
> When $P(X|Y)=P(X)$
>
> ---
>
> **Bayes' Rule**
> $P(Y|X\cap Z)=\frac{P(X|Y\cap Z)P(Y|Z)}{P(X|Z)}$
>
> ---
>
> **Conditional Independence**
> In $A$ and $B$ where
> $P(A\cap B|C)=P(A|C)P(B|C)$
> but not necessarily
> $P(A\cap B)=P(A)P(B)$
> Said to be $A$ and $B$ are independent, only given $C$
>
> ---
>
> **Naive Bayes' Rule**
> Assuming conditional independence across all other variables given one of them.
> $P(X_1,...,X_n)=P(X_1)\prod\limits_{i=2}^{n}P(X_i|X_1)$
> 
> ---
> 
> 
