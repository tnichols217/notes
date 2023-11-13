# Learning Probabilistic Models

> [!def]
> **Bayesian Learning**
> Calculating the probability of each hypothesis given the data, and making predictions based on the outcomes
> 
> ---
> 
> **Bayes Law for vectors**
> Across multiple hypotheses,
> $P(h_i|\vec d)=\alpha P(\vec d|h_i)P(h_i)$
> where $\alpha$ is a constant
> 
> $P(X|\vec d)=\sum\limits_i^IP(X|h_i)P(h_i|\vec d)$
> By the law of total probability
> 
> $P(\vec d|h_i)=\prod\limits_j^JP(d_j|h_i)$
> 
> ---
> 
> **Overfitting**
> When the hypothesis space is too expressive and the model ends up memorizing instead of generalizing the data
> 
> ---
> 
> **MAP - Maximum a posteriori**
> Making predictions based on the most probable hypothesis or the hypothesis that maximizes likelihood
> 
> ---
> 
> **MDL - Minimum Description Length**
> Compares probabilities by checking the length of their description in bits. Smaller means more optimal according to
> $-\log_2(P(\vec d|h_i))-\log_2(P(h_i))$

## Maximizing hypothesis probability

Maximizing $P(\vec d|h_i)=\prod\limits_j^JP(d_j|h_i)$ is equivalent to maximizing its log, $\ln P(\vec d|h_i)=\sum\limits_j^JP(d_j|h_i)$
