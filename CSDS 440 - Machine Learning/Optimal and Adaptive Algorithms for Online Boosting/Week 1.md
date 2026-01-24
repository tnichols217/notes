# Week 1

## Notes

### General Background

- Online learning is a set of systems and algorithms that can self-learn over time, by assessing and processing upon individual samples as they happen in real time
- Previous algorithms are able to learn arbitrarily accurately given arbitrarily large data
- The new algorithm proposed, proposes to do this optimally quickly (Online BBM)
- A secondary algorithm is also proposed that does not require pre-knoledge of tuning parameters (AdaBoost)
- We can create **boosters** that are very smart, also known as strong learners that are composed of a large number of weak learners (learners slightly better than random guessing)
- Boosters function as a weighted vote of weak learners
- Boosters are able to achieve very accurate results off of inaccurate weaker learners

### Implementation

#### Weak/Strong Learner Error

We need to have weak learners that will gradually get better with an error bound condition. We ensure that these weak learners abide by the following loss constraint with $1-\delta$ probability:

$\sum\limits\limits_{t=1}^{T}L(\hat y_{t},y_{t})\le\left( \mathbb E[L(\text{random},y_{t})]-\gamma \right)\|\vec p\|_{1}+S$

Where $S$ is our excess loss parameter, $T$ is the number of samples trained upon, and $\gamma$ is a metric of how much better than random guessing the weak learner is over random guessing. The excess loss parameter exists to allow for some leeway early in the training process, as the weak learners have not been trained yet. The $\vec p$ vector of $T$ length represents the importance of samples, typically included with a training set. If $\vec p$ is not provided, treat all importances as $1$, which makes $\|\vec p\|_{1}=T$.

With this, once $T\gg \frac{S}{\gamma}$, we can expect to have a reasonably trained weak learner.

A similar constraint exists on the strong learner (booster), but instead of $\gamma$, we have $\epsilon$ as the improvement rate. As $T$ becomes sufficiently large, we expect the error rate of the booster to approach $\epsilon$.

#### Composition of the Strong Learner

It is provable that:
- With weak learners of edge $\gamma$ and excess loss $S$
- A strong learner exists with error $\epsilon$

This strong learner:
- Is composed of $O\left( \frac{1}{\gamma^{2}}\ln\left( \frac{1}{\epsilon} \right) \right)$ weak learners
- Has excess loss of $\tilde O\left( \frac{S}{\gamma}+\frac{1}{\gamma^{2}} \right)$

If $S\ge\tilde\Omega\left( \frac{1}{\gamma} \right)$, then this is optimal up to polylog factors

The booster will then take a weighted average with weights $\vec \alpha$ on the outputs of each weak learner $\vec{W}(\vec x)$ which will then be binned into categories if the output is categorical.

#### Updating the Weak Learners

Once we compare this with the true sample, we then have to backpropagate the result to the weak learners.

First, we define a weight vector $\vec w$ for each weak learner in $\vec W$, where the higher the weight the more likely a weak learner is to be updated. This is calculated over time.

We then define our update importance vector $\vec q$

$\vec q=\frac{\vec w}{\|\vec w\|_{\infty}}$

If the weak learners support importance sampling ($\vec p$), we pass $\vec q$ as the update importance to each weak learner, and if not, we conditionally update that weak learner $W_{i}$ with a random sample of probability $q_{i}$.

### Other Topics

The reminder of the paper discusses:
- Implementation details of two specific algorithms that follows the topics described above
- Proofs for the bounds of the training speed of these algorithms

### Unsure Topics

#### Lemma 1

There is a constant $\bar S=2S+\tilde O\left( \frac{1}{\gamma} \right)$ such that for any $T$, with high probability, for every weak learner $W$ we have

$\vec w\cdot \vec z\ge \gamma\|\vec w\|_{\infty}-\tilde S\|\vec w\|_{\infty}$

Where:
$\vec z=\vec y\odot\vec W(\vec x)$
$\vec s^{i}=\vec s^{i-1}+\vec\alpha^{i}\odot\vec z^{i}$

## 1

Briefly summarize your knowledge of the area you are studying as of last week, and your plans for the current week from Q7 of your last diary. If this is the first diary write "Not Applicable."

> N/A

## 2

List all resources you have read or looked at this week, along with the time you spent on each one (to the nearest 1/2 hour is enough). For web pages, blog posts, videos etc, provide links and titles. For papers, provide links and citations. For AI tools, provide a transcript of your session in a separate file in the Week_n folder, and list the file name (as a link) here.

> I have just covered the paper assigned to me
> 
> I have spent about 7.5 hours total on reading and understanding the theory behind it.

## 3

Summarize what you have learned **this week** from the resources above. Be clear, detailed and precise. It is ok to be uncertain about the content. Do **not** copy/paste content from any resource.

> All my notes on the topic are listed at the top of this document for the sake of organization. This week, I have only read the assigned paper and no external resources.

## 4

Describe any new ideas you may have had as you were studying the resources, and if you did any follow ups to investigate these ideas.

> Boosting is typically done with very weak, weak learners, like simple decision trees. I wonder if boosting may be used to other randomly initialied training algorithms to improve output error, like stable diffusion or neural networks. I do recognize that this is equivalent to adding another layer to a neural network, but I am curious if utilizing a simpler approach like boosting would be more time-effecient in training.

## 5

If you implemented/ran any code or algorithms from the resources or while investigating any new ideas, describe what you did. Link to a jupyter notebook in your Week_n folder showing the runs. You may also include python files containing code in your Week_n folder. If so, their content should be described here. If you forked another repo or imported pre-built code, please provide a link. If an AI tool wrote part of the code, please provide a session transcript in the Week_n folder and link to it here. If any part of the code did not run or did not behave as expected, describe your best guess why and possible fixes.

> No, not yet, I focused instead mainly on understanding theory first.

## 6

Summarize any specific points of confusion, uncertainty or difficulty from your reading or implementation that arose from your readings or implementations this week. This can partly overlap with your answer (3).

> I am still learning all the terminology and reasoning behind why specific measures or transforms are used. A lot of the language utilized in the paper is not explicitly clear or insightful to me, so additional reading for a clear insight into the paper may be necessary.

## 7

List specific goals you would like to accomplish for next week and action items aligned with these goals based on your answers above. Be as specific as you can.

> I would like to see how well this algorithm generalizes to various weak learners or loss functions. I would also like to look more into the implementation details of the algorithms and possibly re-implement a generalized version in some programming language.
