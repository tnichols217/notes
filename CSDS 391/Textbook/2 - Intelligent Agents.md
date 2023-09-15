---
date created: 2023-09-15 05:00
---
# Intelligent Agents

An **agent** is anything that can perceive its environment (through sensors) and act upon it (through actuators)

- **Percept sequences** is the history of perception of an agent
- **Agent function** is what maps percept sequences into actions
- **Tabulating** is putting inputs and outputs of an agent into a table

## Training an AI

- AI is often trained and rewarded in a consequentialist nature, only training on the final output
- Make sure that you reward and punish an AI on what you **want the result to be** and not what you **want the AI to do**

## Rationality

- For an AI, depends on
	- Measurement of success
	- Knowledge of environment
	- Available actions
	- Percept sequence
- The agent should select the best option based on the percept sequence and environment to maximize success
- Balancing is important, especially to ensure that the AI does not avoid perceiving dangers to reduce punishment
- **Autonomy** is using **percept sequences to modify actions** that would be based on prior knowledge otherwise

## Task Environment

The world that the AI lives in, consisting of the inputs, outputs, and modifiable objects

- Performance
- Environment
	- Multi-agency
		- Single-agent: does not need to interact with other agents or intelligent beings
		- Multi-agent: needs to interact and learn from other agents
	- Dynamic
		- Dynamic: Environment changes even without influence from the agent
		- Static: Environment does not change without the agent's actuation
	- Discretion
		- Discrete: defined time steps and action phases
		- Continuous: constantly acting and acting upon sensors
- Actuators
	- Determinism
		- Deterministic: New state of environment after actuation completely depends on the action
		- Nondeterministic (stochastic): New state of environment after actuation is influenced but not defined by the action
- Sensors
	- Observational
		- Fully observable: knows the entire environment
		- Partially observable: knows limited information about the environment
	- Known
		- Known: understanding the environment based on sensor data
		- Unknown: not having been trained in such an environment before


## Types of agents

### Simple Reflex

- Ignores percept history and acts on current inputs
- Much less data needed to be processed
