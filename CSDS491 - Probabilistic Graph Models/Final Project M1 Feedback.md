# Oliver Yuan's Pac-Man Model

## Summary

Oliver plans to utilize multiple models to aid Pac-Man's movement around the maze while optimizing tasks like collecting pellets, not dying, and eating ghosts.

He plans to utilize the following models: Markov Decision Processes, Hidden Markov Models, Bayesian Networks, Reinforcement Learning (Q-Learning, DQN) together to create a synergy that would hopefully teach Pac-Man to be effective at playing the game.

### MDP

Given position, movement, pellet location, and lives, predict which direction to go given a reward function.

### HMM

Given observations of ghost positions, predict their movement to aid Pac-Man's movement.

### BN

Update probabilities of ghost threat, power-up, lives, etc

### RL

Utilize an RL model that trains the aforementioned models through trial and error, deriving probabilities and models instead of using pre-known values.

## Recommendations

I believe your plan is already well fleshed out, not needing much change, however given the different scenarios mentioned in your paper I am curious as to which model you are most interested in training.

You mentioned having limited understanding of the ghost's position while playing the game. Is there a reason this differs from the actual Pac-Man game where you have total knowledge of ghost position? Additionally, if you can only "see" a ghost from down a hallway, Pac-Man may have too little information about ghost position in order for it to predict or "know" anything.

If using a limited knowledge model with your HMM to predict their positions, do you plan to use the default ghost pathfinding from Pac-Man? As the movement of ghosts in Pac-Man are completely deterministic given Pac-Man's position, which is of full knowledge to the ghosts. Additionally, with the limited knowledge model, there could be situations where your model never sees ghosts until it is impossible to recover from it (ie. getting stuck in a corner and ghosts blocking both exits).

If not using a limited knowledge model, do you think using a "direction" action or a "pathfinding" action more appropriate for the Pac-Man's movement? As this may reduce the size of your models if your model simply states its desired position, and use A-star to pathfind to that location — ofcourse updated on the fly. I can see the direction action being more directly tied to the shape of the maze itself, forcing the model to be extremely specific to this specific maze setup.

Lastly, do you believe it to be necessary to utilize so many models to predict the movement of Pac-Man, it appears like there may be cases where less modelling could have a positive impact on the overall performance of your project.

# Harry Hillsdownley's Movie Review Sentiment Analysis

## Summary

Harry plans to utilize a Hidden Markov Model to predict the sentiment of movie reviews.

This model was chosen as it is able to create a cohesive sentiment of an entire review given the context of the rest of the words in the review, giving a most likely sentiment given transitions between different words and their sentiments.

## Recommendations

I don't specifically understand why you would choose to use a HMM for this model, as at the time of analysis, the entire review is known, and HMMs typically are used as a model to predict "transitions" between words, which can be applied to predict the most likely meaning/transcription of the next word given all previous words. A sentiment of a writing however is dependant upon the writing as a whole, not exactly a stream of thought changing over time as the review is written.

I feel like this method of analysis may bias the sentiment analysis of a review to the words at the end of a review, especially if there is a strong word towards the end, which may skew your sentiment analysis.

I would think of ways to either mitigate or combat this in your model if it does end up displaying itself in your training.
