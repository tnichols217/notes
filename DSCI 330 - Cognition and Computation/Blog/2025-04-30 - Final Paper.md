# Final Paper

## Prompt

Post a 3000 word summary of your project, with full references, in any standard citation style.

## Response

### Introductory

In the fast-growing field of AI, the want for agents to act intelligently and humanly has been an increasing want in the field. Over time, multiple companies have come up with various solutions in order to increase these agents' abilities, or just to make them more human-like, including utilizing multiple different training methods, by using a different model structure, or by utilizing reasoning structures. One of the most promising techniques mentioned are the reasoning models, which directly aim to make LLMs "think" and generate output more like humans.

This essay seeks to explore what reasoning models — more specifically chain of thought models — do and how its capabilities are important for pushing the field of AI forward. This essay is also a companion to my final project, AutoPrompt, which may be found on my GitHub, which is an exploration and implementation of my ideas in a format easily utilized and played around with for users. By drawing parallels to human cognition, this project seeks to understand human thought processes better as well as offer an avenue to directly apply this learning to LLMs in order to produce more human AIs.

### A Brief Explanation of Chain-of-Thought

Similar to my discussion of functional pipelines in my second paper for this class on lambda calculus, Chain-of-Thought explores multiple techniques that encourage LLMs to utilize a step-by-step thought model in order to produce results that have more logical backing to them. Unlike traditional completion models, instead of directly utilizing the statistical LLM model to derive a response to the prompt, it instead utilizes a sequence of steps encouraging deeper thought and exploration before coming with an answer — a direct similarity to the common saying "think before you speak",  but applied to LLMs. This approach is directly applicable to problem solving situations, logical deduction, or any kind of multi-step planning or reasoning, as it allows the model to directly emulate the processes of planning and executing.

Very simply, the CoT process make the reasoning of models explicitly defined in its own area, allowing models to do more thinking and processing even when the statistical completion would not require it. in practicum, this does improve model performance, as seen in the various production LLM reasoning models, including the groundbreaking DeepSeek R1 for its time. For example, when solving a math problem, the model would be likely to first break down the problem and understand it in a way that is logical to itself, then break down the solving process into steps, before executing those steps and coming up with an answer, allowing the model to have a direct line of reasoning back to the question without logical jumps or statistical assumptions.

### The Rationale Behind CoT

One of the most compelling reasoning CoT was originally explored was the want to create more human-like LLMs that performed well on logical benchmarks and understanding. Unlike statistical models, humans do not simply statistically decide the answers to everything — especially not logical or reasoning-based problems. Such cases require deeper thought and understanding — something typical LLMs are unable to properly emulate in a meaningful way.

In proper thought processes that most humans learn, people should not be jumping to conclusions, but should be taking logical steps in their understanding, with executable actions in order to achieve a goal. We think, iterate, refine, and often collaborate with others in order to come up with solutions to problems — so why can't AI? CoT seeks to apply this method of thought to LLMs in order to achieve better outputs, as well as to gain better explainability of answers, instead of its typical black-box-like answers, with no logical reasoning or thought.

### Our Implementation of CoT

Our implementation of CoT utilizes a self-hosted Ollama server, which provides multiple models to test the reasoning system with. We have defined a CoT structure, which allows for easy development of your own custom chains of thought with easy integration into our system.

The prompt format may specify multiple model parameters, steps, checks, and examples for each individual phase of thought, allowing for quick iteration and easy interpretability of the logical pathway. By standardizing these formats, we allow the interchange of other people's prompts and discoveries, which allow for people to understand and see which logical pathways work best with LLMs.

Our implementation also features a fully featured CLI, with the ability to swap models on the fly, change parameters, swap prompting schemes, and of course utilize different chains of thought.

### Applications

Implementations of CoT unlock capabilities in many fields, as various thought processes allow developments in their respective fields. For example, a CoT specializing in deductive reasoning could help significantly in detective cases, but one embedded with physics knowledge would be significantly better at helping in physics research. This diversity in the possibilities of chains directly translates into a wide range of applications for the ideas of CoT. Additionally, in education, the ideas of CoT allow users to understand and learn reasoning patterns from the model itself, teaching users how to resolve and think about various topics.

Our implementation of CoT is particularly useful in this regard as well, as CoTs are easily transferrably and tunable to the user's desire, also directly benefitting teamwork, by making a shared CoT system possible. Over time, people can collaborate by refining, observing, and developing CoTs together.

### Design Choices

Other choices of this particular project also include the fact that we utilize Ollama and have built in Ollama management commands. This allows us to utilize multiple open models in order to test CoT across different systems. It additionally also allows for external URLs to utilize any Ollama compliant API. This ensures that anything done within the CLI or with the CoTs are fully local and all data is held by the user.

Open source tools such as this allow deeper insight into the inner workings of the models, which is also educational and useful for the user. Moreover, the utilization of local tools allows the integration with any other local tools, further expanding the applications of our tool, all while maintaining transparency and control.

### Chain of Thought Today

After the initial implementations of CoT have been proven to be effective, further research in the area has been done developing it from its initial ideas and conceptions. Although the associated project with this paper focuses mainly on the original chain of thought theory, with pre-defined, well-researched, manually selected thought processes, modern implementations instead opt for an easier to use method, with wider applications. These modern developments include both Automatic Chain-of-Thought (Auto CoT or ACoT), as well as Tree-of-Thought (ToT) prompting.

#### Auto Chain of Thought

One gripe with the utilization of the original chain of thought model was how time consuming it was to come up with the original chains of thought. Auto CoT on the other hand seeks to offload and automatically generate the thought processes to the LLM itself before executing the thought process and coming with an answer. This approach reduces the amount of effort needed to be put in to creating the model in the first place. However, while this method allows for a curated chain for particular models, it often time suffers from the lack of guidance the typical chain of thought model offers, suffering from creating illogical thought processes or pathways.

Auto-CoT ultimately is very similar to the original CoT model, but instead of having curated chains, there is only one chain, which acts as the meta chain for this prompt. It requests the LLM to generate a thought process that it could execute for this problem, with a rational flow of ideas between the steps. This meta-chain would then refine this executable chain until the meta-chain is done executing. Once the executable chain has been made, then it will be executed upon the original prompt, hopefully providing a usefull thought process to answer the prompt in a similar manner that the original CoT model would.

This implementation allows the LLM to generate and utilize chains for problems that do not already have pre-defined chains created by the model makers, which give it some of the benefits of CoT even for areas previously not covered by it. Other benefits of ACoT is that it is likely to scale better, and with integration of specialized models to utilize ACoT, it can be a very promising method for answering multi-step questions. Similar to CoT, this model demonstrates an improvement in reasoning over a non-CoT model, and may even refine processes and answers during the chain, at the cost of less guidance and a possibility to completely misunderstand the chain altogether.

#### Tree of Thought

Another method that enhances the CoT model is the Tree of Thought model. Instead of utilizing linear thought processes as with the original CoT model, ToT instead utilizes a tree or directed graph that can draw similarities between different thought processes, utilize similar subsections of processing, and reduce the amount of workload to create a large amount of CoTs. It additionally allows model to self-evaluate at runtime, and backtrack when ideas do not execute as plan, allowing models to further plan and eventually settle on a process that works for the requested problem.

The ToT model is typically designed as a directed graph, with each node on this graph representing a specific step in the thought process, with evaluations, checks, and conditions. The model as a whole may be thought as a search process, searching probable nodes until a reasonable response can be made. This graph typically is manually made, much like the original CoT model, where all partial thoughts, self evaluations, and next step evaluations are all written as part of the model.

The ToT model proves to be more robust and effective at solving difficult problems, as its ability to backtrack and self evaluate allow it to more critically design and think out its actions. It has also proven to be more effective at processing and thinking about harder tasks, as it is able to reevaluate and realize if answers are reasonable or not, unlike many other reasoning models unless explicitly defined as a step. Much like other CoT models, it performs particularly well on multi-step reasoning and planning, by nature of the structure of the model. 

#### Where CoT is Going

Auto-CoT and ToT are both models that are very promising for the future of CoT models. further research has also been done looking at the combination of the two, where a graph of steps may be learned for each prompt, with prior graphs being utilized as a prior in learning and understanding difficult tasks. These prior graphs may even be trained, learned, and shared across multiple users, prompts, and LLMs, furthering the use of this methodology.

### Further Developments

As discussed within this essay, there are further developments within the field of CoT itself, which would be good additions to this project. However, due to the limitations of time, only basic CoT concepts were implemented, which is stlll an essential and important tool for understanding and utilizing CoT models. Additional improvements to this project would include pre-compiled releases of the software, for easier usage for non-technical users, as well as built in testing, to ensure tool reliability.

### Additional Goals

Lastly, this project is also a push in the direction of the freeing of AI, by making tools to understand and use AI open and accessible to regular people, we reduce the ability for knowledge to be kept and hidden from people, especially in products people would use on a regular basis. It also represents a push towards more human centric AI, by prioritizing transparency, data ownership, and interoperability, we do not even lock users in to our own system, making further developments and benefits easy to use, develop, and transition to.

As models grow in size and capability, it is also important to understand what they do in a way that is helpful for ourselves. CoT modelling allows some insight into how results are made, with a glimpse into the thought process. It not only improves the output of the LLM itself, but teaches the user more about how to do it on their own.

### Conclusion

Chain of thought prompting is a powerful tool for bridging the gap between human thought and understanding and LLM generated answers. By providing LLMs with thought processes, we allow it to follow logical pathways and reasoning, bringing more reasonable results to light. Lastly, this project aims to provide better tools for people to understand and utilize AI better, through the opening of models and processes, people can learn, and learn to utilize the tools of the modern age better.
