```
S \- a
  |- S \- a
  |    |- S \- e
  |    |- b
  |    |- S \- b
  |         |- S \- e
  |         |- a
  |         |- S \- e
  |- b
  |- S \- e
```
^1c

$$
\begin{align}
rexpr&\to rterm~rexpr' \\
rexpr'&\to +rterm~rexpr'~|~\epsilon \\
rterm&\to rfactor~rterm' \\
rterm'&\to rfactor~rterm'~|~\epsilon \\
rfactor&\to rprimary~rfactor' \\
rfactor'&\to *~rfactor'~|~\epsilon \\
rprimary&\to a~|~b
\end{align}
$$
^2