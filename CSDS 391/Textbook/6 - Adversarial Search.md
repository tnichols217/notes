---
date created: 2023-09-24 20:22
date updated: 2023-09-24 23:37
---

# Adversarial Search

> [!def]
> **Competitive Environments**
> When two or more agents have conflicting goals

## Game Theory

> [!def]
> **Position**
> A synonym to state in the context of games
>
> ---
>
> **Move**
> A synonym to action in the context of games

### Stances on Multi Agent Environments

#### The Economy

Consider all other agents as part of an economy, and predict and respond to the general movement instead of individual agents

- Much more effective for large number of agents

#### The Environment

Consider all other agents as part of an unpredictable environment and just respond based on their response

- Hard to distinguish useful from useless information, like an upper cut from an enemy or just the rain

#### The Model

Model the adversarial agents in order to predict and beat their movements

- Much more computationally expensive
- Much more accurate

### Types of Multi Agent Games

#### Information

##### Perfect Information

- All agents can see the entire state of the game
- Much easier to predict and calculate the future of the game

##### Partial Observable

- Agents cannot see the entire state of the game, often only what relates to them directly
- Harder to predict future moves as there is high uncertainty in the game state

#### Benefit sums

##### Zero-sum

- Whenever a move benefits one player, it equally harms the other player
- There is no win-win scenario

##### Non-zero-sum

- There are possibly mutually beneficial moves
- Both players will strive for a mutually winning game if this was true

#### Determinism

##### Deterministic Games

- Every action moves to one corresponding state
- No chance of failing an action

##### Non-deterministic Games

- Actions may have a possibility of failing
- Chance is involved in your action (dice, dealing of cards)

### Properties of a game

- **Initial state** of the game
- Player **to move**
- Legal **actions**
- **Transition model** from state down an action
- **Terminal test** to check if the game is over
- **Utility Function** which gives 1 for a sure win and 0 for a sure lose and an in between depending on chance or 0.5 for a draw

## Multi Agent Algorithms

> [!def]
> **Ply**
> A single move made by a single player, not a move by all players

- Cannot control the other player's move, so must be conditional

### Types of Strategies

#### Type A Strategy

A strategy that searches wide and picks the best option based on a heuristic function from searching those ply

#### Type B Strategy

A strategy that follows the most promising line as deep as possible

### Search vs Lookup

In the early game of some complex games, it may be worth it to pre-compute early games as they have high similarity over multiple games. This allows us to look up a previously chosen optimal action without researching every time.

### Minimax Search

Picks the move that will gave the most advantage to the agent assuming the other agent also plays optimally

> [!def]
> **Backed up values**
> After computation down the children of a node, store metadata about those children in the parent node like **minimum utility** and **maximum utility**

- Very high time complexity
- Not ideal for complex games like chess

### Alpha-Beta Pruning

> [!def]
> **Alpha $\alpha$**
> The highest possible utility of a node and its sub-pathes assuming the opponent plays optimally
>
> ---
>
> **Beta $\beta$**
> The lowest possible utility of a node and its sub-pathes assuming the opponent plays optimally

Since one player plays to maximize utility whilst the other plays to minimize, we can eliminate entire trees of nodes relying on this property

Before exploring a node, the final utility under that node will be on the interval of $[-\infty,\infty]$, after exploring one node, say with utility $2$, if the player that plays that ply is seeking to minimize, then we know the resulting utility of that tree must lie on $[-\infty,2]$ since the agent will never play a move above utility $2$. If the max player already knows that the interval of a sibling node is above $2$, then that entire tree can be thrown away.

#### Heuristic Alpha-Beta Tree Search

> [!def]
> **Evaluation Function**
> A heuristic that produces an estimate of the expected utility of a node, without exploring the node
>
> - Much like the material value system in chess — a type of weighted linear function

Instead of searching till an end game state, search until a cutoff is satisfied, at which a heuristic evaluation function is used to determine the best goal states

##### Horizon Effect

When an imminent loss in inevitable, but the algorithm cannot see far enough ahead to know, so it just pushes it off as long as possible by sacrificing everything else

- Happens more often with small ply look-ahead

##### Forward Pruning

Prunes nodes that appear to be poor before exploring deeper. Can be implemented with beam-search

- Speeds up computation
- Introduces more uncertainty and possibility of missing a good move

###### Evaluation Based

Don't explore nodes if their evaluation is very low

###### Late Move Reduction

Explore later moves to a lesser depth by trusting that the move ordering works well

### Move Ordering

Since Alpha-Beta Pruning relies on information on other nodes, the order of which you explore nodes is significant

- Perfect move ordering will bring alpha-beta pruning's branching factor to square root that of default minimax

#### Solutions

These optimizations to move ordering can be combined to improve minimax and alpha-beta pruning

> [!def]
> **Killer Moves**
> The best possible legal move is called a killer move
>
> ---
>
> **Killer Move Heuristic**
> Trying to find and explore the killer moves first

- **Iterative deepening**, then rank possible options and explore the best first
- **Transposition Table**, store result of states so that in case another path leads to the same state no recalculation is needed

### Monte Carlo Tree Search (MCTS)

> [!def]
> **Selection Policy**
> A function that chooses a to explore and test, balancing exploring new nodes with exploiting known good ones
>
> ---
>
> **Playout Policy**
> A function that picks moves that bias towards winning for each player, to simulate the end of a game
>
> - Does not need to be perfect, just needs to bias for its agent
>
> ---
>
> **UCBI function**
> A selection policy that ranks all possible moves based on certainty and win-rate
>
> Most often is:
> $UCBI(n)=\frac{U(n)}{N(n)}+C\sqrt{\frac{\log N(\text{PARENT(n)})}{N(n)}}$
>
> Where:
>
> - $\text{PARENT}$ is the parent of the node
> - $N$ is the number of playouts
> - $U$ is the number of won playouts
> - $C$ is the exploitation-exploration constant, most often $\sqrt 2$

1. **Selection**: Select notable moves until the bottom of the explored tree has been reached using a selection policy
2. **Expansion**: Generate notable children of this node by picking notable actions from the previous node
3. **Simulation**: Simulate these child nodes until the end of the game for a certain sample size by using a playout policy, then record back the win/loss to the top node
4. **Back-propagation**: Update all parent nodes with the new information from the simulations
5. Repeat until a policy guides that a move is good enough

- Tends to be much better for high branching factor games like go
- Can search much deeper at the cost of not exploring a lot of the possible branches

### Non-deterministic Games

Games that involve chance like dice or a draw of the cards are non-deterministic and are considered **stochastic games**. Minimax needs to be adapted to account for the chance

- Trees include a chance node, with probabilities of each chance
- The search algorithm is ran until another chance event, then marks probabilities again (called **Expeciminimax**)
- The utility of a parent node is determined by its expected utility after accounting for probability
- For alpha-beta pruning if we have a limit of expected utility, we can have a domain which an expected utility will be without needed to explore every node below a chance node
