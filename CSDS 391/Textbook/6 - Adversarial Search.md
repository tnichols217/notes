---
date created: 2023-09-24 20:22
date updated: 2023-09-24 20:30
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

## Multi Agent 