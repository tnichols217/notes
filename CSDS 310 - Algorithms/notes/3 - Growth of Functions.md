# Growth of Functions

## Asymptotic Notation

$o\sim<$
$O\sim\le$
$\theta\sim=$
$\Omega\sim\ge$
$\omega\sim>$

$f(n)\in o(g(n))\iff 0\le f(n)< cg(n):c\in\mathbb R^{+},n>n_0\in\mathbb R^{+}$
$f(n)\in O(g(n))\iff 0\le f(n)\le cg(n):c\in\mathbb R^{+},n>n_0\in\mathbb R^{+}$
$f(n)\in \theta(g(n))\iff c_{1}g(n)\le f(n)\le c_2g(n):c_1,c_2\in\mathbb R^{+},n>n_0\in\mathbb R^{+}$
$f(n)\in \Omega(g(n))\iff cg(n)\le f(n):c\in\mathbb R^{+},n>n_0\in\mathbb R^{+}$
$f(n)\in \omega(g(n))\iff cg(n)< f(n):c\in\mathbb R^{+},n>n_0\in\mathbb R^{+}$

## Properties of Asymptotic Notations

$f(n)\in\theta(g(n))\to f(n)\in O(g(n)),\Omega(g(n));f(n)\not\in o(g(n)),\omega(g(n))$

### Reflexivity

$f(n)\in\theta(f(n)),O(f(n)),\Omega(f(n))$
$f(n)\not\in o(f(n)),\omega(f(n))$

### Transitivity

$x\in\{o,O,\theta,\Omega,\omega\}$
$f(n)\in x(g(n)),g(n)\in x(h(n))\implies f(n)\in x(h(n))$

### Anti-symmetry

$[o,O,\theta,\Omega,\omega]'\to[\omega,\Omega,\theta,O,o]$
$f(n)\in x(g(n))\iff g(n)\in x'(f(n))$

#### Proof

$f(n)\in O(g(n))$
$\to0\le f(n)\le cg(n):c\in\mathbb R^{+},n>n_0\in\mathbb R^{+}$
$\to \frac{1}{c}f(n)\le g(n):c\in\mathbb R^{+},n>n_0\in\mathbb R^{+}$
$\to g(n)\in\Omega(f(n))$
